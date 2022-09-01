/**!
 * @license Hiroshi JS | Copyright (c) Kato83.
 * https://github.com/kato83/hiroshi/blob/master/LICENSE.txt
 */

/**
 * Build element.
 * @param nodeName element name or Component function
 * @param attributes attributes
 * @param children rest parameter children
 */
export function createElement(
  nodeName: string | ((...props) => (...props) => Element),
  attributes: { [p: string]: unknown } = {},
  ...children: any[]
): createElement.JSX.Element {
  const {xmlns, ...otherAttributes} = attributes ?? {};

  return (ns) => {
    const elm = isString(nodeName) ?
      document.createElementNS((xmlns ?? ns ?? 'http://www.w3.org/1999/xhtml') as string, nodeName)
      : nodeName({children: children, ...attributes ?? {}})() as Element;

    if (isString(nodeName) || Object.is(nodeName, Fragment)) {
      const displayChildren = children.flat()
        .filter(c => isNotNullable(c) && typeof c !== 'boolean')
        .map(c => isFunction(c) ? c(xmlns) : c);
      elm.append(...displayChildren);
    }

    if (isString(nodeName)) {
      applyAttributes(elm, otherAttributes);
    }

    return elm;
  };
}

const applyAttributes = (elm: Element, attributes: { [p: string]: unknown } = {}) => {
  const {ref, ...otherAttributes} = attributes ?? {};
  const {namespaceURI} = elm;

  for (const attribute in otherAttributes) {
    const value = otherAttributes[attribute];

    // style property
    if (attribute === 'style' && isObject(value)) {
      for (const property in value) {
        (elm as HTMLElement).style[property] = value[property];
      }
    }
    // builtin event property
    else if (!isString(namespaceURI) && isNotNullable(elm[attributeMapping(attribute)])) {
      elm[attributeMapping(attribute)] = value;
    }
    // custom event property
    else if (isMaybeEvent(attribute)) {
      elm.addEventListener(
        attribute.substring(2),
        value as EventListenerOrEventListenerObject);
    }
    // other attribute (aria-*, data-* attribute, etc.)
    else if (isNotNullable(value) && value !== false) {
      elm.setAttribute(
        !isString(namespaceURI) ? camel2KebabCase(attribute) : attribute,
        value === true ? '' : value as string);
    }
  }

  // ref
  if (isObject(ref) && 'current' in ref) {
    ref['current'] = elm;
  } else if (isFunction(ref)) {
    ref(elm);
  }
};

/**
 * create document fragment.
 */
export const Fragment = () => () => document.createDocumentFragment();

export const createRef = <T extends Node>(initialVale?: T) => {
  return Object.seal({current: initialVale ?? null});
};

/**
 * apply element and mount.
 * @param node
 * @param entryPoint Output location for the object passed in the node argument.
 */
export const render = (node: createElement.JSX.Element, entryPoint: HTMLElement) => {
  const result = isFunction(node) ? node() : node;
  entryPoint.appendChild(isFunction(result) ? result() : result);
};

const attributeMapping = (key: string) =>
  (isMaybeEvent(key)) ?
    key.toLowerCase() :
    {
      // If special dom property mappings are required, they should be added.
    }[key] ?? key;

const isNotNullable = (arg: any) => typeof arg !== 'undefined' && arg !== null;
const isObject = (arg): arg is object => typeof arg === 'object' && arg !== null;
const isString = (arg): arg is string => typeof arg === 'string';
const isFunction = (arg): arg is Function => typeof arg === 'function';
const isMaybeEvent = (key: string) => key.startsWith('on') && isNotNullable(key[2]);

/**
 * convert camel case to kebab case.
 */
const camel2KebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export function h(
  nodeName: string | ((...props) => (...props) => Element),
  attributes: { [p: string]: unknown } = {},
  ...children: any[]
): createElement.JSX.Element {
  return createElement(nodeName, attributes, ...children);
}

/**
 * Apply from React TypeScript definition
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */
export namespace h {
  export import JSX = createElement.JSX;
}

export namespace createElement {
  export namespace JSX {
    export type Element = (namespace?: string) => Node;
    export type Fragment = () => DocumentFragment;

    export interface IntrinsicAttributes {
      ref?: ((ref: JSX.Element) => {}) | {};
    }

    type ElementAttribute<T> = Partial<T> & {
      ref?: ((ref: JSX.Element) => {}) | {}
    };

    export interface IntrinsicElements {
      // HTML
      a: ElementAttribute<HTMLAnchorElement>;
      abbr: ElementAttribute<HTMLElement>;
      address: ElementAttribute<HTMLElement>;
      area: ElementAttribute<HTMLAreaElement>;
      article: ElementAttribute<HTMLElement>;
      aside: ElementAttribute<HTMLElement>;
      audio: ElementAttribute<HTMLAudioElement>;
      b: ElementAttribute<HTMLElement>;
      base: ElementAttribute<HTMLBaseElement>;
      bdi: ElementAttribute<HTMLElement>;
      bdo: ElementAttribute<HTMLElement>;
      big: ElementAttribute<HTMLElement>;
      blockquote: ElementAttribute<HTMLQuoteElement>;
      body: ElementAttribute<HTMLBodyElement>;
      br: ElementAttribute<HTMLBRElement>;
      button: ElementAttribute<HTMLButtonElement>;
      canvas: ElementAttribute<HTMLCanvasElement>;
      caption: ElementAttribute<HTMLElement>;
      cite: ElementAttribute<HTMLElement>;
      code: ElementAttribute<HTMLElement>;
      col: ElementAttribute<HTMLTableColElement>;
      colgroup: ElementAttribute<HTMLTableColElement>;
      data: ElementAttribute<HTMLDataElement>;
      datalist: ElementAttribute<HTMLDataListElement>;
      dd: ElementAttribute<HTMLElement>;
      del: ElementAttribute<HTMLModElement>;
      details: ElementAttribute<HTMLDetailsElement>;
      dfn: ElementAttribute<HTMLElement>;
      dialog: ElementAttribute<HTMLDialogElement>;
      div: ElementAttribute<HTMLDivElement>;
      dl: ElementAttribute<HTMLDListElement>;
      dt: ElementAttribute<HTMLElement>;
      em: ElementAttribute<HTMLElement>;
      embed: ElementAttribute<HTMLEmbedElement>;
      fieldset: ElementAttribute<HTMLFieldSetElement>;
      figcaption: ElementAttribute<HTMLElement>;
      figure: ElementAttribute<HTMLElement>;
      footer: ElementAttribute<HTMLElement>;
      form: ElementAttribute<HTMLFormElement>;
      h1: ElementAttribute<HTMLHeadingElement>;
      h2: ElementAttribute<HTMLHeadingElement>;
      h3: ElementAttribute<HTMLHeadingElement>;
      h4: ElementAttribute<HTMLHeadingElement>;
      h5: ElementAttribute<HTMLHeadingElement>;
      h6: ElementAttribute<HTMLHeadingElement>;
      head: ElementAttribute<HTMLElement>;
      header: ElementAttribute<HTMLElement>;
      hgroup: ElementAttribute<HTMLElement>;
      hr: ElementAttribute<HTMLHRElement>;
      html: ElementAttribute<HTMLHtmlElement>;
      i: ElementAttribute<HTMLElement>;
      iframe: ElementAttribute<HTMLIFrameElement>;
      img: ElementAttribute<HTMLImageElement>;
      input: ElementAttribute<HTMLInputElement>;
      ins: ElementAttribute<HTMLModElement>;
      kbd: ElementAttribute<HTMLElement>;
      keygen: ElementAttribute<HTMLElement>;
      label: ElementAttribute<HTMLLabelElement>;
      legend: ElementAttribute<HTMLLegendElement>;
      li: ElementAttribute<HTMLLIElement>;
      link: ElementAttribute<HTMLLinkElement>;
      main: ElementAttribute<HTMLElement>;
      map: ElementAttribute<HTMLMapElement>;
      mark: ElementAttribute<HTMLElement>;
      menu: ElementAttribute<HTMLElement>;
      menuitem: ElementAttribute<HTMLElement>;
      meta: ElementAttribute<HTMLMetaElement>;
      meter: ElementAttribute<HTMLMeterElement>;
      nav: ElementAttribute<HTMLElement>;
      noscript: ElementAttribute<HTMLElement>;
      object: ElementAttribute<HTMLObjectElement>;
      ol: ElementAttribute<HTMLOListElement>;
      optgroup: ElementAttribute<HTMLOptGroupElement>;
      option: ElementAttribute<HTMLOptionElement>;
      output: ElementAttribute<HTMLOutputElement>;
      p: ElementAttribute<HTMLParagraphElement>;
      param: ElementAttribute<HTMLParamElement>;
      picture: ElementAttribute<HTMLElement>;
      pre: ElementAttribute<HTMLPreElement>;
      progress: ElementAttribute<HTMLProgressElement>;
      q: ElementAttribute<HTMLQuoteElement>;
      rp: ElementAttribute<HTMLElement>;
      rt: ElementAttribute<HTMLElement>;
      ruby: ElementAttribute<HTMLElement>;
      s: ElementAttribute<HTMLElement>;
      samp: ElementAttribute<HTMLElement>;
      slot: ElementAttribute<HTMLSlotElement>;
      script: ElementAttribute<HTMLScriptElement>;
      section: ElementAttribute<HTMLElement>;
      select: ElementAttribute<HTMLSelectElement>;
      small: ElementAttribute<HTMLElement>;
      source: ElementAttribute<HTMLSourceElement>;
      span: ElementAttribute<HTMLSpanElement>;
      strong: ElementAttribute<HTMLElement>;
      style: ElementAttribute<HTMLStyleElement>;
      sub: ElementAttribute<HTMLElement>;
      summary: ElementAttribute<HTMLElement>;
      sup: ElementAttribute<HTMLElement>;
      table: ElementAttribute<HTMLTableElement>;
      template: ElementAttribute<HTMLTemplateElement>;
      tbody: ElementAttribute<HTMLTableSectionElement>;
      td: ElementAttribute<HTMLTableDataCellElement>;
      textarea: ElementAttribute<HTMLTextAreaElement>;
      tfoot: ElementAttribute<HTMLTableSectionElement>;
      th: ElementAttribute<HTMLTableHeaderCellElement>;
      thead: ElementAttribute<HTMLTableSectionElement>;
      time: ElementAttribute<HTMLTimeElement>;
      title: ElementAttribute<HTMLTitleElement>;
      tr: ElementAttribute<HTMLTableRowElement>;
      track: ElementAttribute<HTMLTrackElement>;
      u: ElementAttribute<HTMLElement>;
      ul: ElementAttribute<HTMLUListElement>;
      "var": ElementAttribute<HTMLElement>;
      video: ElementAttribute<HTMLVideoElement>;
      wbr: ElementAttribute<HTMLElement>;
      webview: ElementAttribute<HTMLElement>;

      // SVG
      svg: ElementAttribute<SVGSVGElement>;

      animate: ElementAttribute<SVGElement>;
      animateMotion: ElementAttribute<SVGElement>;
      animateTransform: ElementAttribute<SVGElement>;
      circle: ElementAttribute<SVGCircleElement>;
      clipPath: ElementAttribute<SVGClipPathElement>;
      defs: ElementAttribute<SVGDefsElement>;
      desc: ElementAttribute<SVGDescElement>;
      ellipse: ElementAttribute<SVGEllipseElement>;
      feBlend: ElementAttribute<SVGFEBlendElement>;
      feColorMatrix: ElementAttribute<SVGFEColorMatrixElement>;
      feComponentTransfer: ElementAttribute<SVGFEComponentTransferElement>;
      feComposite: ElementAttribute<SVGFECompositeElement>;
      feConvolveMatrix: ElementAttribute<SVGFEConvolveMatrixElement>;
      feDiffuseLighting: ElementAttribute<SVGFEDiffuseLightingElement>;
      feDisplacementMap: ElementAttribute<SVGFEDisplacementMapElement>;
      feDistantLight: ElementAttribute<SVGFEDistantLightElement>;
      feDropShadow: ElementAttribute<SVGFEDropShadowElement>;
      feFlood: ElementAttribute<SVGFEFloodElement>;
      feFuncA: ElementAttribute<SVGFEFuncAElement>;
      feFuncB: ElementAttribute<SVGFEFuncBElement>;
      feFuncG: ElementAttribute<SVGFEFuncGElement>;
      feFuncR: ElementAttribute<SVGFEFuncRElement>;
      feGaussianBlur: ElementAttribute<SVGFEGaussianBlurElement>;
      feImage: ElementAttribute<SVGFEImageElement>;
      feMerge: ElementAttribute<SVGFEMergeElement>;
      feMergeNode: ElementAttribute<SVGFEMergeNodeElement>;
      feMorphology: ElementAttribute<SVGFEMorphologyElement>;
      feOffset: ElementAttribute<SVGFEOffsetElement>;
      fePointLight: ElementAttribute<SVGFEPointLightElement>;
      feSpecularLighting: ElementAttribute<SVGFESpecularLightingElement>;
      feSpotLight: ElementAttribute<SVGFESpotLightElement>;
      feTile: ElementAttribute<SVGFETileElement>;
      feTurbulence: ElementAttribute<SVGFETurbulenceElement>;
      filter: ElementAttribute<SVGFilterElement>;
      foreignObject: ElementAttribute<SVGForeignObjectElement>;
      g: ElementAttribute<SVGGElement>;
      image: ElementAttribute<SVGImageElement>;
      line: ElementAttribute<SVGLineElement>;
      linearGradient: ElementAttribute<SVGLinearGradientElement>;
      marker: ElementAttribute<SVGMarkerElement>;
      mask: ElementAttribute<SVGMaskElement>;
      metadata: ElementAttribute<SVGMetadataElement>;
      mpath: ElementAttribute<SVGElement>;
      path: ElementAttribute<SVGPathElement>;
      pattern: ElementAttribute<SVGPatternElement>;
      polygon: ElementAttribute<SVGPolygonElement>;
      polyline: ElementAttribute<SVGPolylineElement>;
      radialGradient: ElementAttribute<SVGRadialGradientElement>;
      rect: ElementAttribute<SVGRectElement>;
      stop: ElementAttribute<SVGStopElement>;
      switch: ElementAttribute<SVGSwitchElement>;
      symbol: ElementAttribute<SVGSymbolElement>;
      text: ElementAttribute<SVGTextElement>;
      textPath: ElementAttribute<SVGTextPathElement>;
      tspan: ElementAttribute<SVGTSpanElement>;
      use: ElementAttribute<SVGUseElement>;
      view: ElementAttribute<SVGViewElement>;
    }
  }
}