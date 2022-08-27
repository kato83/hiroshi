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
export const createElement = (
  nodeName: string | ((...props) => (...props) => Element),
  attributes: { [p: string]: unknown } = {},
  ...children: any[]
): createElement.JSX.Element => {
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
};

export {createElement as h};

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

/**
 * Apply from React TypeScript definition
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */
export namespace createElement {
  export namespace JSX {
    export type Element = (namespace?: string) => Node;
    export type Fragment = () => DocumentFragment;

    export interface IntrinsicAttributes {
      ref?: ((ref: JSX.Element) => {}) | {};
    }

    export interface IntrinsicElements {
      // HTML
      a: Partial<HTMLAnchorElement>;
      abbr: Partial<HTMLElement>;
      address: Partial<HTMLElement>;
      area: Partial<HTMLAreaElement>;
      article: Partial<HTMLElement>;
      aside: Partial<HTMLElement>;
      audio: Partial<HTMLAudioElement>;
      b: Partial<HTMLElement>;
      base: Partial<HTMLBaseElement>;
      bdi: Partial<HTMLElement>;
      bdo: Partial<HTMLElement>;
      big: Partial<HTMLElement>;
      blockquote: Partial<HTMLQuoteElement>;
      body: Partial<HTMLBodyElement>;
      br: Partial<HTMLBRElement>;
      button: Partial<HTMLButtonElement>;
      canvas: Partial<HTMLCanvasElement>;
      caption: Partial<HTMLElement>;
      cite: Partial<HTMLElement>;
      code: Partial<HTMLElement>;
      col: Partial<HTMLTableColElement>;
      colgroup: Partial<HTMLTableColElement>;
      data: Partial<HTMLDataElement>;
      datalist: Partial<HTMLDataListElement>;
      dd: Partial<HTMLElement>;
      del: Partial<HTMLModElement>;
      details: Partial<HTMLDetailsElement>;
      dfn: Partial<HTMLElement>;
      dialog: Partial<HTMLDialogElement>;
      div: Partial<HTMLDivElement>;
      dl: Partial<HTMLDListElement>;
      dt: Partial<HTMLElement>;
      em: Partial<HTMLElement>;
      embed: Partial<HTMLEmbedElement>;
      fieldset: Partial<HTMLFieldSetElement>;
      figcaption: Partial<HTMLElement>;
      figure: Partial<HTMLElement>;
      footer: Partial<HTMLElement>;
      form: Partial<HTMLFormElement>;
      h1: Partial<HTMLHeadingElement>;
      h2: Partial<HTMLHeadingElement>;
      h3: Partial<HTMLHeadingElement>;
      h4: Partial<HTMLHeadingElement>;
      h5: Partial<HTMLHeadingElement>;
      h6: Partial<HTMLHeadingElement>;
      head: Partial<HTMLElement>;
      header: Partial<HTMLElement>;
      hgroup: Partial<HTMLElement>;
      hr: Partial<HTMLHRElement>;
      html: Partial<HTMLHtmlElement>;
      i: Partial<HTMLElement>;
      iframe: Partial<HTMLIFrameElement>;
      img: Partial<HTMLImageElement>;
      input: Partial<HTMLInputElement>;
      ins: Partial<HTMLModElement>;
      kbd: Partial<HTMLElement>;
      keygen: Partial<HTMLElement>;
      label: Partial<HTMLLabelElement>;
      legend: Partial<HTMLLegendElement>;
      li: Partial<HTMLLIElement>;
      link: Partial<HTMLLinkElement>;
      main: Partial<HTMLElement>;
      map: Partial<HTMLMapElement>;
      mark: Partial<HTMLElement>;
      menu: Partial<HTMLElement>;
      menuitem: Partial<HTMLElement>;
      meta: Partial<HTMLMetaElement>;
      meter: Partial<HTMLMeterElement>;
      nav: Partial<HTMLElement>;
      noscript: Partial<HTMLElement>;
      object: Partial<HTMLObjectElement>;
      ol: Partial<HTMLOListElement>;
      optgroup: Partial<HTMLOptGroupElement>;
      option: Partial<HTMLOptionElement>;
      output: Partial<HTMLOutputElement>;
      p: Partial<HTMLParagraphElement>;
      param: Partial<HTMLParamElement>;
      picture: Partial<HTMLElement>;
      pre: Partial<HTMLPreElement>;
      progress: Partial<HTMLProgressElement>;
      q: Partial<HTMLQuoteElement>;
      rp: Partial<HTMLElement>;
      rt: Partial<HTMLElement>;
      ruby: Partial<HTMLElement>;
      s: Partial<HTMLElement>;
      samp: Partial<HTMLElement>;
      slot: Partial<HTMLSlotElement>;
      script: Partial<HTMLScriptElement>;
      section: Partial<HTMLElement>;
      select: Partial<HTMLSelectElement>;
      small: Partial<HTMLElement>;
      source: Partial<HTMLSourceElement>;
      span: Partial<HTMLSpanElement>;
      strong: Partial<HTMLElement>;
      style: Partial<HTMLStyleElement>;
      sub: Partial<HTMLElement>;
      summary: Partial<HTMLElement>;
      sup: Partial<HTMLElement>;
      table: Partial<HTMLTableElement>;
      template: Partial<HTMLTemplateElement>;
      tbody: Partial<HTMLTableSectionElement>;
      td: Partial<HTMLTableDataCellElement>;
      textarea: Partial<HTMLTextAreaElement>;
      tfoot: Partial<HTMLTableSectionElement>;
      th: Partial<HTMLTableHeaderCellElement>;
      thead: Partial<HTMLTableSectionElement>;
      time: Partial<HTMLTimeElement>;
      title: Partial<HTMLTitleElement>;
      tr: Partial<HTMLTableRowElement>;
      track: Partial<HTMLTrackElement>;
      u: Partial<HTMLElement>;
      ul: Partial<HTMLUListElement>;
      "var": Partial<HTMLElement>;
      video: Partial<HTMLVideoElement>;
      wbr: Partial<HTMLElement>;
      webview: Partial<HTMLElement>;

      // SVG
      svg: Partial<SVGSVGElement>;

      animate: Partial<SVGElement>;
      animateMotion: Partial<SVGElement>;
      animateTransform: Partial<SVGElement>;
      circle: Partial<SVGCircleElement>;
      clipPath: Partial<SVGClipPathElement>;
      defs: Partial<SVGDefsElement>;
      desc: Partial<SVGDescElement>;
      ellipse: Partial<SVGEllipseElement>;
      feBlend: Partial<SVGFEBlendElement>;
      feColorMatrix: Partial<SVGFEColorMatrixElement>;
      feComponentTransfer: Partial<SVGFEComponentTransferElement>;
      feComposite: Partial<SVGFECompositeElement>;
      feConvolveMatrix: Partial<SVGFEConvolveMatrixElement>;
      feDiffuseLighting: Partial<SVGFEDiffuseLightingElement>;
      feDisplacementMap: Partial<SVGFEDisplacementMapElement>;
      feDistantLight: Partial<SVGFEDistantLightElement>;
      feDropShadow: Partial<SVGFEDropShadowElement>;
      feFlood: Partial<SVGFEFloodElement>;
      feFuncA: Partial<SVGFEFuncAElement>;
      feFuncB: Partial<SVGFEFuncBElement>;
      feFuncG: Partial<SVGFEFuncGElement>;
      feFuncR: Partial<SVGFEFuncRElement>;
      feGaussianBlur: Partial<SVGFEGaussianBlurElement>;
      feImage: Partial<SVGFEImageElement>;
      feMerge: Partial<SVGFEMergeElement>;
      feMergeNode: Partial<SVGFEMergeNodeElement>;
      feMorphology: Partial<SVGFEMorphologyElement>;
      feOffset: Partial<SVGFEOffsetElement>;
      fePointLight: Partial<SVGFEPointLightElement>;
      feSpecularLighting: Partial<SVGFESpecularLightingElement>;
      feSpotLight: Partial<SVGFESpotLightElement>;
      feTile: Partial<SVGFETileElement>;
      feTurbulence: Partial<SVGFETurbulenceElement>;
      filter: Partial<SVGFilterElement>;
      foreignObject: Partial<SVGForeignObjectElement>;
      g: Partial<SVGGElement>;
      image: Partial<SVGImageElement>;
      line: Partial<SVGLineElement>;
      linearGradient: Partial<SVGLinearGradientElement>;
      marker: Partial<SVGMarkerElement>;
      mask: Partial<SVGMaskElement>;
      metadata: Partial<SVGMetadataElement>;
      mpath: Partial<SVGElement>;
      path: Partial<SVGPathElement>;
      pattern: Partial<SVGPatternElement>;
      polygon: Partial<SVGPolygonElement>;
      polyline: Partial<SVGPolylineElement>;
      radialGradient: Partial<SVGRadialGradientElement>;
      rect: Partial<SVGRectElement>;
      stop: Partial<SVGStopElement>;
      switch: Partial<SVGSwitchElement>;
      symbol: Partial<SVGSymbolElement>;
      text: Partial<SVGTextElement>;
      textPath: Partial<SVGTextPathElement>;
      tspan: Partial<SVGTSpanElement>;
      use: Partial<SVGUseElement>;
      view: Partial<SVGViewElement>;
    }
  }
}