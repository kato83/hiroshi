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
  ...children: any
): ((ns?: string) => Node) => {
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

export import h = createElement;

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
export const render = (node: createElement.JSX.Element | ((props?: any) => createElement.JSX.Element), entryPoint: HTMLElement) => {
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

// @todo define IntrinsicElements props
export declare namespace createElement.JSX {
  type Element = (namespace?: string) => Node;
  type Fragment = () => DocumentFragment;

  interface IntrinsicElements {
    // HTML
    a: any;
    abbr: any;
    address: any;
    area: any;
    article: any;
    aside: any;
    audio: any;
    b: any;
    base: any;
    bdi: any;
    bdo: any;
    big: any;
    blockquote: any;
    body: any;
    br: any;
    button: any;
    canvas: any;
    caption: any;
    cite: any;
    code: any;
    col: any;
    colgroup: any;
    data: any;
    datalist: any;
    dd: any;
    del: any;
    details: any;
    dfn: any;
    dialog: any;
    div: any;
    dl: any;
    dt: any;
    em: any;
    embed: any;
    fieldset: any;
    figcaption: any;
    figure: any;
    footer: any;
    form: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
    head: any;
    header: any;
    hgroup: any;
    hr: any;
    html: any;
    i: any;
    iframe: any;
    img: any;
    input: any;
    ins: any;
    kbd: any;
    keygen: any;
    label: any;
    legend: any;
    li: any;
    link: any;
    main: any;
    map: any;
    mark: any;
    menu: any;
    menuitem: any;
    meta: any;
    meter: any;
    nav: any;
    noindex: any;
    noscript: any;
    object: any;
    ol: any;
    optgroup: any;
    option: any;
    output: any;
    p: any;
    param: any;
    picture: any;
    pre: any;
    progress: any;
    q: any;
    rp: any;
    rt: any;
    ruby: any;
    s: any;
    samp: any;
    script: any;
    section: any;
    select: any;
    small: any;
    source: any;
    span: any;
    strong: any;
    style: any;
    sub: any;
    summary: any;
    sup: any;
    table: any;
    tbody: any;
    td: any;
    textarea: any;
    tfoot: any;
    th: any;
    thead: any;
    time: any;
    title: any;
    tr: any;
    track: any;
    u: any;
    ul: any;
    "var": any;
    video: any;
    wbr: any;
    webview: any;

    // SVG
    svg: any;
    animate: any;
    animateTransform: any;
    circle: any;
    clipPath: any;
    defs: any;
    desc: any;
    ellipse: any;
    feBlend: any;
    feColorMatrix: any;
    feComponentTransfer: any;
    feComposite: any;
    feConvolveMatrix: any;
    feDiffuseLighting: any;
    feDisplacementMap: any;
    feDistantLight: any;
    feFlood: any;
    feFuncA: any;
    feFuncB: any;
    feFuncG: any;
    feFuncR: any;
    feGaussianBlur: any;
    feImage: any;
    feMerge: any;
    feMergeNode: any;
    feMorphology: any;
    feOffset: any;
    fePointLight: any;
    feSpecularLighting: any;
    feSpotLight: any;
    feTile: any;
    feTurbulence: any;
    filter: any;
    foreignObject: any;
    g: any;
    image: any;
    line: any;
    linearGradient: any;
    marker: any;
    mask: any;
    metadata: any;
    path: any;
    pattern: any;
    polygon: any;
    polyline: any;
    radialGradient: any;
    rect: any;
    stop: any;
    switch: any;
    symbol: any;
    text: any;
    textPath: any;
    tspan: any;
    use: any;
    view: any;
  }
}