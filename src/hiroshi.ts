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
      a: HTMLAnchorElement;
      abbr: HTMLElement;
      address: HTMLElement;
      area: HTMLAreaElement;
      article: HTMLElement;
      aside: HTMLElement;
      audio: HTMLAudioElement;
      b: HTMLElement;
      base: HTMLBaseElement;
      bdi: HTMLElement;
      bdo: HTMLElement;
      big: HTMLElement;
      blockquote: HTMLQuoteElement;
      body: HTMLBodyElement;
      br: HTMLBRElement;
      button: HTMLButtonElement;
      canvas: HTMLCanvasElement;
      caption: HTMLElement;
      cite: HTMLElement;
      code: HTMLElement;
      col: HTMLTableColElement;
      colgroup: HTMLTableColElement;
      data: HTMLDataElement;
      datalist: HTMLDataListElement;
      dd: HTMLElement;
      del: HTMLModElement;
      details: HTMLDetailsElement;
      dfn: HTMLElement;
      dialog: HTMLDialogElement;
      div: HTMLDivElement;
      dl: HTMLDListElement;
      dt: HTMLElement;
      em: HTMLElement;
      embed: HTMLEmbedElement;
      fieldset: HTMLFieldSetElement;
      figcaption: HTMLElement;
      figure: HTMLElement;
      footer: HTMLElement;
      form: HTMLFormElement;
      h1: HTMLHeadingElement;
      h2: HTMLHeadingElement;
      h3: HTMLHeadingElement;
      h4: HTMLHeadingElement;
      h5: HTMLHeadingElement;
      h6: HTMLHeadingElement;
      head: HTMLElement;
      header: HTMLElement;
      hgroup: HTMLElement;
      hr: HTMLHRElement;
      html: HTMLHtmlElement;
      i: HTMLElement;
      iframe: HTMLIFrameElement;
      img: HTMLImageElement;
      input: HTMLInputElement;
      ins: HTMLModElement;
      kbd: HTMLElement;
      keygen: HTMLElement;
      label: HTMLLabelElement;
      legend: HTMLLegendElement;
      li: HTMLLIElement;
      link: HTMLLinkElement;
      main: HTMLElement;
      map: HTMLMapElement;
      mark: HTMLElement;
      menu: HTMLElement;
      menuitem: HTMLElement;
      meta: HTMLMetaElement;
      meter: HTMLMeterElement;
      nav: HTMLElement;
      noscript: HTMLElement;
      object: HTMLObjectElement;
      ol: HTMLOListElement;
      optgroup: HTMLOptGroupElement;
      option: HTMLOptionElement;
      output: HTMLOutputElement;
      p: HTMLParagraphElement;
      param: HTMLParamElement;
      picture: HTMLElement;
      pre: HTMLPreElement;
      progress: HTMLProgressElement;
      q: HTMLQuoteElement;
      rp: HTMLElement;
      rt: HTMLElement;
      ruby: HTMLElement;
      s: HTMLElement;
      samp: HTMLElement;
      slot: HTMLSlotElement;
      script: HTMLScriptElement;
      section: HTMLElement;
      select: HTMLSelectElement;
      small: HTMLElement;
      source: HTMLSourceElement;
      span: HTMLSpanElement;
      strong: HTMLElement;
      style: HTMLStyleElement;
      sub: HTMLElement;
      summary: HTMLElement;
      sup: HTMLElement;
      table: HTMLTableElement;
      template: HTMLTemplateElement;
      tbody: HTMLTableSectionElement;
      td: HTMLTableDataCellElement;
      textarea: HTMLTextAreaElement;
      tfoot: HTMLTableSectionElement;
      th: HTMLTableHeaderCellElement;
      thead: HTMLTableSectionElement;
      time: HTMLTimeElement;
      title: HTMLTitleElement;
      tr: HTMLTableRowElement;
      track: HTMLTrackElement;
      u: HTMLElement;
      ul: HTMLUListElement;
      "var": HTMLElement;
      video: HTMLVideoElement;
      wbr: HTMLElement;
      webview: HTMLElement;

      // SVG
      svg: SVGSVGElement;

      animate: SVGElement;
      animateMotion: SVGElement;
      animateTransform: SVGElement;
      circle: SVGCircleElement;
      clipPath: SVGClipPathElement;
      defs: SVGDefsElement;
      desc: SVGDescElement;
      ellipse: SVGEllipseElement;
      feBlend: SVGFEBlendElement;
      feColorMatrix: SVGFEColorMatrixElement;
      feComponentTransfer: SVGFEComponentTransferElement;
      feComposite: SVGFECompositeElement;
      feConvolveMatrix: SVGFEConvolveMatrixElement;
      feDiffuseLighting: SVGFEDiffuseLightingElement;
      feDisplacementMap: SVGFEDisplacementMapElement;
      feDistantLight: SVGFEDistantLightElement;
      feDropShadow: SVGFEDropShadowElement;
      feFlood: SVGFEFloodElement;
      feFuncA: SVGFEFuncAElement;
      feFuncB: SVGFEFuncBElement;
      feFuncG: SVGFEFuncGElement;
      feFuncR: SVGFEFuncRElement;
      feGaussianBlur: SVGFEGaussianBlurElement;
      feImage: SVGFEImageElement;
      feMerge: SVGFEMergeElement;
      feMergeNode: SVGFEMergeNodeElement;
      feMorphology: SVGFEMorphologyElement;
      feOffset: SVGFEOffsetElement;
      fePointLight: SVGFEPointLightElement;
      feSpecularLighting: SVGFESpecularLightingElement;
      feSpotLight: SVGFESpotLightElement;
      feTile: SVGFETileElement;
      feTurbulence: SVGFETurbulenceElement;
      filter: SVGFilterElement;
      foreignObject: SVGForeignObjectElement;
      g: SVGGElement;
      image: SVGImageElement;
      line: SVGLineElement;
      linearGradient: SVGLinearGradientElement;
      marker: SVGMarkerElement;
      mask: SVGMaskElement;
      metadata: SVGMetadataElement;
      mpath: SVGElement;
      path: SVGPathElement;
      pattern: SVGPatternElement;
      polygon: SVGPolygonElement;
      polyline: SVGPolylineElement;
      radialGradient: SVGRadialGradientElement;
      rect: SVGRectElement;
      stop: SVGStopElement;
      switch: SVGSwitchElement;
      symbol: SVGSymbolElement;
      text: SVGTextElement;
      textPath: SVGTextPathElement;
      tspan: SVGTSpanElement;
      use: SVGUseElement;
      view: SVGViewElement;
    }
  }
}