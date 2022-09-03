/**
 * Apply from React TypeScript definition
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */
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

  // @ts-ignore Declare variables that have no meaning to avoid the vite type-only import-export problem.
  // see: https://vitejs.dev/guide/features.html#typescript
  const _ignore = null;
}