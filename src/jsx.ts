type DOMNode = Element;

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

  export type HTMLElementAttribute<T> = Omit<SVGElementAttribute<T>, 'style'> & RefAttribute & {
    style?: Partial<CSSStyleDeclaration>
    xmlns?: string
  };

  export type SVGElementAttribute<T> = Omit<Partial<T>, 'viewBox'> & SVGAttributes & RefAttribute & {
    style?: Partial<CSSStyleDeclaration>
    xmlns?: string
  };

  export type AriaRole =
    | 'alert'
    | 'alertdialog'
    | 'application'
    | 'article'
    | 'banner'
    | 'button'
    | 'cell'
    | 'checkbox'
    | 'columnheader'
    | 'combobox'
    | 'complementary'
    | 'contentinfo'
    | 'definition'
    | 'dialog'
    | 'directory'
    | 'document'
    | 'feed'
    | 'figure'
    | 'form'
    | 'grid'
    | 'gridcell'
    | 'group'
    | 'heading'
    | 'img'
    | 'link'
    | 'list'
    | 'listbox'
    | 'listitem'
    | 'log'
    | 'main'
    | 'marquee'
    | 'math'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'navigation'
    | 'none'
    | 'note'
    | 'option'
    | 'presentation'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'region'
    | 'row'
    | 'rowgroup'
    | 'rowheader'
    | 'scrollbar'
    | 'search'
    | 'searchbox'
    | 'separator'
    | 'slider'
    | 'spinbutton'
    | 'status'
    | 'switch'
    | 'tab'
    | 'table'
    | 'tablist'
    | 'tabpanel'
    | 'term'
    | 'textbox'
    | 'timer'
    | 'toolbar'
    | 'tooltip'
    | 'tree'
    | 'treegrid'
    | 'treeitem'
    | (string & {});

  export type RefAttribute = {
    ref?: ((ref: DOMNode) => {}) | {};
  }

  export interface SVGAttributes {
    // Attributes which also defined in HTMLAttributes
    // See comment in SVGDOMPropertyConfig.js
    className?: string | undefined;
    color?: string | undefined;
    height?: number | string | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    max?: number | string | undefined;
    media?: string | undefined;
    method?: string | undefined;
    min?: number | string | undefined;
    name?: string | undefined;
    style?: Partial<CSSStyleDeclaration> | undefined;
    target?: string | undefined;
    type?: string | undefined;
    width?: number | string | undefined;

    // Other HTML properties supported by SVG elements in browsers
    role?: AriaRole | undefined;
    tabIndex?: number | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;

    // SVG Specific attributes
    accentHeight?: number | string | undefined;
    accumulate?: "none" | "sum" | undefined;
    additive?: "replace" | "sum" | undefined;
    alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
      "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;
    allowReorder?: "no" | "yes" | undefined;
    alphabetic?: number | string | undefined;
    amplitude?: number | string | undefined;
    arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
    ascent?: number | string | undefined;
    attributeName?: string | undefined;
    attributeType?: string | undefined;
    autoReverse?: Booleanish | undefined;
    azimuth?: number | string | undefined;
    baseFrequency?: number | string | undefined;
    baselineShift?: number | string | undefined;
    baseProfile?: number | string | undefined;
    bbox?: number | string | undefined;
    begin?: number | string | undefined;
    bias?: number | string | undefined;
    by?: number | string | undefined;
    calcMode?: number | string | undefined;
    capHeight?: number | string | undefined;
    clip?: number | string | undefined;
    clipPath?: string | undefined;
    clipPathUnits?: number | string | undefined;
    clipRule?: number | string | undefined;
    colorInterpolation?: number | string | undefined;
    colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
    colorProfile?: number | string | undefined;
    colorRendering?: number | string | undefined;
    contentScriptType?: number | string | undefined;
    contentStyleType?: number | string | undefined;
    cursor?: number | string | undefined;
    cx?: number | string | undefined;
    cy?: number | string | undefined;
    d?: string | undefined;
    decelerate?: number | string | undefined;
    descent?: number | string | undefined;
    diffuseConstant?: number | string | undefined;
    direction?: number | string | undefined;
    display?: number | string | undefined;
    divisor?: number | string | undefined;
    dominantBaseline?: number | string | undefined;
    dur?: number | string | undefined;
    dx?: number | string | undefined;
    dy?: number | string | undefined;
    edgeMode?: number | string | undefined;
    elevation?: number | string | undefined;
    enableBackground?: number | string | undefined;
    end?: number | string | undefined;
    exponent?: number | string | undefined;
    externalResourcesRequired?: Booleanish | undefined;
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;
    fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
    filter?: string | undefined;
    filterRes?: number | string | undefined;
    filterUnits?: number | string | undefined;
    floodColor?: number | string | undefined;
    floodOpacity?: number | string | undefined;
    focusable?: Booleanish | "auto" | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | string | undefined;
    fontSizeAdjust?: number | string | undefined;
    fontStretch?: number | string | undefined;
    fontStyle?: number | string | undefined;
    fontVariant?: number | string | undefined;
    fontWeight?: number | string | undefined;
    format?: number | string | undefined;
    fr?: number | string | undefined;
    from?: number | string | undefined;
    fx?: number | string | undefined;
    fy?: number | string | undefined;
    g1?: number | string | undefined;
    g2?: number | string | undefined;
    glyphName?: number | string | undefined;
    glyphOrientationHorizontal?: number | string | undefined;
    glyphOrientationVertical?: number | string | undefined;
    glyphRef?: number | string | undefined;
    gradientTransform?: string | undefined;
    gradientUnits?: string | undefined;
    hanging?: number | string | undefined;
    horizAdvX?: number | string | undefined;
    horizOriginX?: number | string | undefined;
    href?: string | undefined;
    ideographic?: number | string | undefined;
    imageRendering?: number | string | undefined;
    in2?: number | string | undefined;
    in?: string | undefined;
    intercept?: number | string | undefined;
    k1?: number | string | undefined;
    k2?: number | string | undefined;
    k3?: number | string | undefined;
    k4?: number | string | undefined;
    k?: number | string | undefined;
    kernelMatrix?: number | string | undefined;
    kernelUnitLength?: number | string | undefined;
    kerning?: number | string | undefined;
    keyPoints?: number | string | undefined;
    keySplines?: number | string | undefined;
    keyTimes?: number | string | undefined;
    lengthAdjust?: number | string | undefined;
    letterSpacing?: number | string | undefined;
    lightingColor?: number | string | undefined;
    limitingConeAngle?: number | string | undefined;
    local?: number | string | undefined;
    markerEnd?: string | undefined;
    markerHeight?: number | string | undefined;
    markerMid?: string | undefined;
    markerStart?: string | undefined;
    markerUnits?: number | string | undefined;
    markerWidth?: number | string | undefined;
    mask?: string | undefined;
    maskContentUnits?: number | string | undefined;
    maskUnits?: number | string | undefined;
    mathematical?: number | string | undefined;
    mode?: number | string | undefined;
    numOctaves?: number | string | undefined;
    offset?: number | string | undefined;
    opacity?: number | string | undefined;
    operator?: number | string | undefined;
    order?: number | string | undefined;
    orient?: number | string | undefined;
    orientation?: number | string | undefined;
    origin?: number | string | undefined;
    overflow?: number | string | undefined;
    overlinePosition?: number | string | undefined;
    overlineThickness?: number | string | undefined;
    paintOrder?: number | string | undefined;
    panose1?: number | string | undefined;
    path?: string | undefined;
    pathLength?: number | string | undefined;
    patternContentUnits?: string | undefined;
    patternTransform?: number | string | undefined;
    patternUnits?: string | undefined;
    pointerEvents?: number | string | undefined;
    points?: string | undefined;
    pointsAtX?: number | string | undefined;
    pointsAtY?: number | string | undefined;
    pointsAtZ?: number | string | undefined;
    preserveAlpha?: Booleanish | undefined;
    preserveAspectRatio?: string | undefined;
    primitiveUnits?: number | string | undefined;
    r?: number | string | undefined;
    radius?: number | string | undefined;
    refX?: number | string | undefined;
    refY?: number | string | undefined;
    renderingIntent?: number | string | undefined;
    repeatCount?: number | string | undefined;
    repeatDur?: number | string | undefined;
    requiredExtensions?: number | string | undefined;
    requiredFeatures?: number | string | undefined;
    restart?: number | string | undefined;
    result?: string | undefined;
    rotate?: number | string | undefined;
    rx?: number | string | undefined;
    ry?: number | string | undefined;
    scale?: number | string | undefined;
    seed?: number | string | undefined;
    shapeRendering?: number | string | undefined;
    slope?: number | string | undefined;
    spacing?: number | string | undefined;
    specularConstant?: number | string | undefined;
    specularExponent?: number | string | undefined;
    speed?: number | string | undefined;
    spreadMethod?: string | undefined;
    startOffset?: number | string | undefined;
    stdDeviation?: number | string | undefined;
    stemh?: number | string | undefined;
    stemv?: number | string | undefined;
    stitchTiles?: number | string | undefined;
    stopColor?: string | undefined;
    stopOpacity?: number | string | undefined;
    strikethroughPosition?: number | string | undefined;
    strikethroughThickness?: number | string | undefined;
    string?: number | string | undefined;
    stroke?: string | undefined;
    strokeDasharray?: string | number | undefined;
    strokeDashoffset?: string | number | undefined;
    strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
    strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
    strokeMiterlimit?: number | string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: number | string | undefined;
    surfaceScale?: number | string | undefined;
    systemLanguage?: number | string | undefined;
    tableValues?: number | string | undefined;
    targetX?: number | string | undefined;
    targetY?: number | string | undefined;
    textAnchor?: string | undefined;
    textDecoration?: number | string | undefined;
    textLength?: number | string | undefined;
    textRendering?: number | string | undefined;
    to?: number | string | undefined;
    transform?: string | undefined;
    u1?: number | string | undefined;
    u2?: number | string | undefined;
    underlinePosition?: number | string | undefined;
    underlineThickness?: number | string | undefined;
    unicode?: number | string | undefined;
    unicodeBidi?: number | string | undefined;
    unicodeRange?: number | string | undefined;
    unitsPerEm?: number | string | undefined;
    vAlphabetic?: number | string | undefined;
    values?: string | undefined;
    vectorEffect?: number | string | undefined;
    version?: string | undefined;
    vertAdvY?: number | string | undefined;
    vertOriginX?: number | string | undefined;
    vertOriginY?: number | string | undefined;
    vHanging?: number | string | undefined;
    vIdeographic?: number | string | undefined;
    viewBox?: string | undefined;
    viewTarget?: number | string | undefined;
    visibility?: number | string | undefined;
    vMathematical?: number | string | undefined;
    widths?: number | string | undefined;
    wordSpacing?: number | string | undefined;
    writingMode?: number | string | undefined;
    x1?: number | string | undefined;
    x2?: number | string | undefined;
    x?: number | string | undefined;
    xChannelSelector?: string | undefined;
    xHeight?: number | string | undefined;
    xlinkActuate?: string | undefined;
    xlinkArcrole?: string | undefined;
    xlinkHref?: string | undefined;
    xlinkRole?: string | undefined;
    xlinkShow?: string | undefined;
    xlinkTitle?: string | undefined;
    xlinkType?: string | undefined;
    xmlBase?: string | undefined;
    xmlLang?: string | undefined;
    xmlns?: string | undefined;
    xmlnsXlink?: string | undefined;
    xmlSpace?: string | undefined;
    y1?: number | string | undefined;
    y2?: number | string | undefined;
    y?: number | string | undefined;
    yChannelSelector?: string | undefined;
    z?: number | string | undefined;
    zoomAndPan?: string | undefined;
  }

  export type Booleanish = boolean | 'true' | 'false';


  export interface IntrinsicElements {
    // HTML
    a: HTMLElementAttribute<HTMLAnchorElement>;
    abbr: HTMLElementAttribute<HTMLElement>;
    address: HTMLElementAttribute<HTMLElement>;
    area: HTMLElementAttribute<HTMLAreaElement>;
    article: HTMLElementAttribute<HTMLElement>;
    aside: HTMLElementAttribute<HTMLElement>;
    audio: HTMLElementAttribute<HTMLAudioElement>;
    b: HTMLElementAttribute<HTMLElement>;
    base: HTMLElementAttribute<HTMLBaseElement>;
    bdi: HTMLElementAttribute<HTMLElement>;
    bdo: HTMLElementAttribute<HTMLElement>;
    big: HTMLElementAttribute<HTMLElement>;
    blockquote: HTMLElementAttribute<HTMLQuoteElement>;
    body: HTMLElementAttribute<HTMLBodyElement>;
    br: HTMLElementAttribute<HTMLBRElement>;
    button: HTMLElementAttribute<HTMLButtonElement>;
    canvas: HTMLElementAttribute<HTMLCanvasElement>;
    caption: HTMLElementAttribute<HTMLElement>;
    cite: HTMLElementAttribute<HTMLElement>;
    code: HTMLElementAttribute<HTMLElement>;
    col: HTMLElementAttribute<HTMLTableColElement>;
    colgroup: HTMLElementAttribute<HTMLTableColElement>;
    data: HTMLElementAttribute<HTMLDataElement>;
    datalist: HTMLElementAttribute<HTMLDataListElement>;
    dd: HTMLElementAttribute<HTMLElement>;
    del: HTMLElementAttribute<HTMLModElement>;
    details: HTMLElementAttribute<HTMLDetailsElement>;
    dfn: HTMLElementAttribute<HTMLElement>;
    dialog: HTMLElementAttribute<HTMLDialogElement>;
    div: HTMLElementAttribute<HTMLDivElement>;
    dl: HTMLElementAttribute<HTMLDListElement>;
    dt: HTMLElementAttribute<HTMLElement>;
    em: HTMLElementAttribute<HTMLElement>;
    embed: HTMLElementAttribute<HTMLEmbedElement>;
    fieldset: HTMLElementAttribute<HTMLFieldSetElement>;
    figcaption: HTMLElementAttribute<HTMLElement>;
    figure: HTMLElementAttribute<HTMLElement>;
    footer: HTMLElementAttribute<HTMLElement>;
    form: HTMLElementAttribute<HTMLFormElement>;
    h1: HTMLElementAttribute<HTMLHeadingElement>;
    h2: HTMLElementAttribute<HTMLHeadingElement>;
    h3: HTMLElementAttribute<HTMLHeadingElement>;
    h4: HTMLElementAttribute<HTMLHeadingElement>;
    h5: HTMLElementAttribute<HTMLHeadingElement>;
    h6: HTMLElementAttribute<HTMLHeadingElement>;
    head: HTMLElementAttribute<HTMLElement>;
    header: HTMLElementAttribute<HTMLElement>;
    hgroup: HTMLElementAttribute<HTMLElement>;
    hr: HTMLElementAttribute<HTMLHRElement>;
    html: HTMLElementAttribute<HTMLHtmlElement>;
    i: HTMLElementAttribute<HTMLElement>;
    iframe: HTMLElementAttribute<HTMLIFrameElement>;
    img: HTMLElementAttribute<HTMLImageElement>;
    input: HTMLElementAttribute<HTMLInputElement>;
    ins: HTMLElementAttribute<HTMLModElement>;
    kbd: HTMLElementAttribute<HTMLElement>;
    keygen: HTMLElementAttribute<HTMLElement>;
    label: HTMLElementAttribute<HTMLLabelElement>;
    legend: HTMLElementAttribute<HTMLLegendElement>;
    li: HTMLElementAttribute<HTMLLIElement>;
    link: HTMLElementAttribute<HTMLLinkElement>;
    main: HTMLElementAttribute<HTMLElement>;
    map: HTMLElementAttribute<HTMLMapElement>;
    mark: HTMLElementAttribute<HTMLElement>;
    menu: HTMLElementAttribute<HTMLElement>;
    menuitem: HTMLElementAttribute<HTMLElement>;
    meta: HTMLElementAttribute<HTMLMetaElement>;
    meter: HTMLElementAttribute<HTMLMeterElement>;
    nav: HTMLElementAttribute<HTMLElement>;
    noscript: HTMLElementAttribute<HTMLElement>;
    object: HTMLElementAttribute<HTMLObjectElement>;
    ol: HTMLElementAttribute<HTMLOListElement>;
    optgroup: HTMLElementAttribute<HTMLOptGroupElement>;
    option: HTMLElementAttribute<HTMLOptionElement>;
    output: HTMLElementAttribute<HTMLOutputElement>;
    p: HTMLElementAttribute<HTMLParagraphElement>;
    param: HTMLElementAttribute<HTMLParamElement>;
    picture: HTMLElementAttribute<HTMLElement>;
    pre: HTMLElementAttribute<HTMLPreElement>;
    progress: HTMLElementAttribute<HTMLProgressElement>;
    q: HTMLElementAttribute<HTMLQuoteElement>;
    rp: HTMLElementAttribute<HTMLElement>;
    rt: HTMLElementAttribute<HTMLElement>;
    ruby: HTMLElementAttribute<HTMLElement>;
    s: HTMLElementAttribute<HTMLElement>;
    samp: HTMLElementAttribute<HTMLElement>;
    slot: HTMLElementAttribute<HTMLSlotElement>;
    script: HTMLElementAttribute<HTMLScriptElement>;
    section: HTMLElementAttribute<HTMLElement>;
    select: HTMLElementAttribute<HTMLSelectElement>;
    small: HTMLElementAttribute<HTMLElement>;
    source: HTMLElementAttribute<HTMLSourceElement>;
    span: HTMLElementAttribute<HTMLSpanElement>;
    strong: HTMLElementAttribute<HTMLElement>;
    style: HTMLElementAttribute<HTMLStyleElement>;
    sub: HTMLElementAttribute<HTMLElement>;
    summary: HTMLElementAttribute<HTMLElement>;
    sup: HTMLElementAttribute<HTMLElement>;
    table: HTMLElementAttribute<HTMLTableElement>;
    template: HTMLElementAttribute<HTMLTemplateElement>;
    tbody: HTMLElementAttribute<HTMLTableSectionElement>;
    td: HTMLElementAttribute<HTMLTableDataCellElement>;
    textarea: HTMLElementAttribute<HTMLTextAreaElement>;
    tfoot: HTMLElementAttribute<HTMLTableSectionElement>;
    th: HTMLElementAttribute<HTMLTableHeaderCellElement>;
    thead: HTMLElementAttribute<HTMLTableSectionElement>;
    time: HTMLElementAttribute<HTMLTimeElement>;
    title: HTMLElementAttribute<HTMLTitleElement>;
    tr: HTMLElementAttribute<HTMLTableRowElement>;
    track: HTMLElementAttribute<HTMLTrackElement>;
    u: HTMLElementAttribute<HTMLElement>;
    ul: HTMLElementAttribute<HTMLUListElement>;
    "var": HTMLElementAttribute<HTMLElement>;
    video: HTMLElementAttribute<HTMLVideoElement>;
    wbr: HTMLElementAttribute<HTMLElement>;
    webview: HTMLElementAttribute<HTMLElement>;

    // SVG
    svg: SVGElementAttribute<SVGSVGElement>;

    animate: SVGElementAttribute<SVGElement>;
    animateMotion: SVGElementAttribute<SVGElement>;
    animateTransform: SVGElementAttribute<SVGElement>;
    circle: SVGElementAttribute<SVGCircleElement>;
    clipPath: SVGElementAttribute<SVGClipPathElement>;
    defs: SVGElementAttribute<SVGDefsElement>;
    desc: SVGElementAttribute<SVGDescElement>;
    ellipse: SVGElementAttribute<SVGEllipseElement>;
    feBlend: SVGElementAttribute<SVGFEBlendElement>;
    feColorMatrix: SVGElementAttribute<SVGFEColorMatrixElement>;
    feComponentTransfer: SVGElementAttribute<SVGFEComponentTransferElement>;
    feComposite: SVGElementAttribute<SVGFECompositeElement>;
    feConvolveMatrix: SVGElementAttribute<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: SVGElementAttribute<SVGFEDiffuseLightingElement>;
    feDisplacementMap: SVGElementAttribute<SVGFEDisplacementMapElement>;
    feDistantLight: SVGElementAttribute<SVGFEDistantLightElement>;
    feDropShadow: SVGElementAttribute<SVGFEDropShadowElement>;
    feFlood: SVGElementAttribute<SVGFEFloodElement>;
    feFuncA: SVGElementAttribute<SVGFEFuncAElement>;
    feFuncB: SVGElementAttribute<SVGFEFuncBElement>;
    feFuncG: SVGElementAttribute<SVGFEFuncGElement>;
    feFuncR: SVGElementAttribute<SVGFEFuncRElement>;
    feGaussianBlur: SVGElementAttribute<SVGFEGaussianBlurElement>;
    feImage: SVGElementAttribute<SVGFEImageElement>;
    feMerge: SVGElementAttribute<SVGFEMergeElement>;
    feMergeNode: SVGElementAttribute<SVGFEMergeNodeElement>;
    feMorphology: SVGElementAttribute<SVGFEMorphologyElement>;
    feOffset: SVGElementAttribute<SVGFEOffsetElement>;
    fePointLight: SVGElementAttribute<SVGFEPointLightElement>;
    feSpecularLighting: SVGElementAttribute<SVGFESpecularLightingElement>;
    feSpotLight: SVGElementAttribute<SVGFESpotLightElement>;
    feTile: SVGElementAttribute<SVGFETileElement>;
    feTurbulence: SVGElementAttribute<SVGFETurbulenceElement>;
    filter: SVGElementAttribute<SVGFilterElement>;
    foreignObject: SVGElementAttribute<SVGForeignObjectElement>;
    g: SVGElementAttribute<SVGGElement>;
    image: SVGElementAttribute<SVGImageElement>;
    line: SVGElementAttribute<SVGLineElement>;
    linearGradient: SVGElementAttribute<SVGLinearGradientElement>;
    marker: SVGElementAttribute<SVGMarkerElement>;
    mask: SVGElementAttribute<SVGMaskElement>;
    metadata: SVGElementAttribute<SVGMetadataElement>;
    mpath: SVGElementAttribute<SVGElement>;
    path: SVGElementAttribute<SVGPathElement>;
    pattern: SVGElementAttribute<SVGPatternElement>;
    polygon: SVGElementAttribute<SVGPolygonElement>;
    polyline: SVGElementAttribute<SVGPolylineElement>;
    radialGradient: SVGElementAttribute<SVGRadialGradientElement>;
    rect: SVGElementAttribute<SVGRectElement>;
    stop: SVGElementAttribute<SVGStopElement>;
    switch: SVGElementAttribute<SVGSwitchElement>;
    symbol: SVGElementAttribute<SVGSymbolElement>;
    text: SVGElementAttribute<SVGTextElement>;
    textPath: SVGElementAttribute<SVGTextPathElement>;
    tspan: SVGElementAttribute<SVGTSpanElement>;
    use: SVGElementAttribute<SVGUseElement>;
    view: SVGElementAttribute<SVGViewElement>;
  }

  // @ts-ignore Declare variables that have no meaning to avoid the vite type-only import-export problem.
  // see: https://vitejs.dev/guide/features.html#typescript
  const _ignore = null;
}