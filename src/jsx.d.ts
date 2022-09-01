/**
 * Apply from React TypeScript definition
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */

export namespace createElement {
  export namespace JSX {
    export type Element = (namespace?: string) => Node;
    export type Fragment = () => DocumentFragment;

    interface HTMLAttributes<T> extends Partial<T> {
      ref?: ((ref: JSX.Element) => {}) | {};
    }

    export interface IntrinsicAttributes {
      ref?: ((ref: JSX.Element) => {}) | {};
    }

    export interface IntrinsicElements {
      // HTML
      a: HTMLAttributes<HTMLAnchorElement>;
      abbr: HTMLAttributes<HTMLElement>;
      address: HTMLAttributes<HTMLElement>;
      area: HTMLAttributes<HTMLAreaElement>;
      article: HTMLAttributes<HTMLElement>;
      aside: HTMLAttributes<HTMLElement>;
      audio: HTMLAttributes<HTMLAudioElement>;
      b: HTMLAttributes<HTMLElement>;
      base: HTMLAttributes<HTMLBaseElement>;
      bdi: HTMLAttributes<HTMLElement>;
      bdo: HTMLAttributes<HTMLElement>;
      big: HTMLAttributes<HTMLElement>;
      blockquote: HTMLAttributes<HTMLQuoteElement>;
      body: HTMLAttributes<HTMLBodyElement>;
      br: HTMLAttributes<HTMLBRElement>;
      button: HTMLAttributes<HTMLButtonElement>;
      canvas: HTMLAttributes<HTMLCanvasElement>;
      caption: HTMLAttributes<HTMLElement>;
      cite: HTMLAttributes<HTMLElement>;
      code: HTMLAttributes<HTMLElement>;
      col: HTMLAttributes<HTMLTableColElement>;
      colgroup: HTMLAttributes<HTMLTableColElement>;
      data: HTMLAttributes<HTMLDataElement>;
      datalist: HTMLAttributes<HTMLDataListElement>;
      dd: HTMLAttributes<HTMLElement>;
      del: HTMLAttributes<HTMLModElement>;
      details: HTMLAttributes<HTMLDetailsElement>;
      dfn: HTMLAttributes<HTMLElement>;
      dialog: HTMLAttributes<HTMLDialogElement>;
      div: HTMLAttributes<HTMLDivElement>;
      dl: HTMLAttributes<HTMLDListElement>;
      dt: HTMLAttributes<HTMLElement>;
      em: HTMLAttributes<HTMLElement>;
      embed: HTMLAttributes<HTMLEmbedElement>;
      fieldset: HTMLAttributes<HTMLFieldSetElement>;
      figcaption: HTMLAttributes<HTMLElement>;
      figure: HTMLAttributes<HTMLElement>;
      footer: HTMLAttributes<HTMLElement>;
      form: HTMLAttributes<HTMLFormElement>;
      h1: HTMLAttributes<HTMLHeadingElement>;
      h2: HTMLAttributes<HTMLHeadingElement>;
      h3: HTMLAttributes<HTMLHeadingElement>;
      h4: HTMLAttributes<HTMLHeadingElement>;
      h5: HTMLAttributes<HTMLHeadingElement>;
      h6: HTMLAttributes<HTMLHeadingElement>;
      head: HTMLAttributes<HTMLElement>;
      header: HTMLAttributes<HTMLElement>;
      hgroup: HTMLAttributes<HTMLElement>;
      hr: HTMLAttributes<HTMLHRElement>;
      html: HTMLAttributes<HTMLHtmlElement>;
      i: HTMLAttributes<HTMLElement>;
      iframe: HTMLAttributes<HTMLIFrameElement>;
      img: HTMLAttributes<HTMLImageElement>;
      input: HTMLAttributes<HTMLInputElement>;
      ins: HTMLAttributes<HTMLModElement>;
      kbd: HTMLAttributes<HTMLElement>;
      keygen: HTMLAttributes<HTMLElement>;
      label: HTMLAttributes<HTMLLabelElement>;
      legend: HTMLAttributes<HTMLLegendElement>;
      li: HTMLAttributes<HTMLLIElement>;
      link: HTMLAttributes<HTMLLinkElement>;
      main: HTMLAttributes<HTMLElement>;
      map: HTMLAttributes<HTMLMapElement>;
      mark: HTMLAttributes<HTMLElement>;
      menu: HTMLAttributes<HTMLElement>;
      menuitem: HTMLAttributes<HTMLElement>;
      meta: HTMLAttributes<HTMLMetaElement>;
      meter: HTMLAttributes<HTMLMeterElement>;
      nav: HTMLAttributes<HTMLElement>;
      noscript: HTMLAttributes<HTMLElement>;
      object: HTMLAttributes<HTMLObjectElement>;
      ol: HTMLAttributes<HTMLOListElement>;
      optgroup: HTMLAttributes<HTMLOptGroupElement>;
      option: HTMLAttributes<HTMLOptionElement>;
      output: HTMLAttributes<HTMLOutputElement>;
      p: HTMLAttributes<HTMLParagraphElement>;
      param: HTMLAttributes<HTMLParamElement>;
      picture: HTMLAttributes<HTMLElement>;
      pre: HTMLAttributes<HTMLPreElement>;
      progress: HTMLAttributes<HTMLProgressElement>;
      q: HTMLAttributes<HTMLQuoteElement>;
      rp: HTMLAttributes<HTMLElement>;
      rt: HTMLAttributes<HTMLElement>;
      ruby: HTMLAttributes<HTMLElement>;
      s: HTMLAttributes<HTMLElement>;
      samp: HTMLAttributes<HTMLElement>;
      slot: HTMLAttributes<HTMLSlotElement>;
      script: HTMLAttributes<HTMLScriptElement>;
      section: HTMLAttributes<HTMLElement>;
      select: HTMLAttributes<HTMLSelectElement>;
      small: HTMLAttributes<HTMLElement>;
      source: HTMLAttributes<HTMLSourceElement>;
      span: HTMLAttributes<HTMLSpanElement>;
      strong: HTMLAttributes<HTMLElement>;
      style: HTMLAttributes<HTMLStyleElement>;
      sub: HTMLAttributes<HTMLElement>;
      summary: HTMLAttributes<HTMLElement>;
      sup: HTMLAttributes<HTMLElement>;
      table: HTMLAttributes<HTMLTableElement>;
      template: HTMLAttributes<HTMLTemplateElement>;
      tbody: HTMLAttributes<HTMLTableSectionElement>;
      td: HTMLAttributes<HTMLTableDataCellElement>;
      textarea: HTMLAttributes<HTMLTextAreaElement>;
      tfoot: HTMLAttributes<HTMLTableSectionElement>;
      th: HTMLAttributes<HTMLTableHeaderCellElement>;
      thead: HTMLAttributes<HTMLTableSectionElement>;
      time: HTMLAttributes<HTMLTimeElement>;
      title: HTMLAttributes<HTMLTitleElement>;
      tr: HTMLAttributes<HTMLTableRowElement>;
      track: HTMLAttributes<HTMLTrackElement>;
      u: HTMLAttributes<HTMLElement>;
      ul: HTMLAttributes<HTMLUListElement>;
      "var": HTMLAttributes<HTMLElement>;
      video: HTMLAttributes<HTMLVideoElement>;
      wbr: HTMLAttributes<HTMLElement>;
      webview: HTMLAttributes<HTMLElement>;

      // SVG
      svg: HTMLAttributes<SVGSVGElement>;

      animate: HTMLAttributes<SVGElement>;
      animateMotion: HTMLAttributes<SVGElement>;
      animateTransform: HTMLAttributes<SVGElement>;
      circle: HTMLAttributes<SVGCircleElement>;
      clipPath: HTMLAttributes<SVGClipPathElement>;
      defs: HTMLAttributes<SVGDefsElement>;
      desc: HTMLAttributes<SVGDescElement>;
      ellipse: HTMLAttributes<SVGEllipseElement>;
      feBlend: HTMLAttributes<SVGFEBlendElement>;
      feColorMatrix: HTMLAttributes<SVGFEColorMatrixElement>;
      feComponentTransfer: HTMLAttributes<SVGFEComponentTransferElement>;
      feComposite: HTMLAttributes<SVGFECompositeElement>;
      feConvolveMatrix: HTMLAttributes<SVGFEConvolveMatrixElement>;
      feDiffuseLighting: HTMLAttributes<SVGFEDiffuseLightingElement>;
      feDisplacementMap: HTMLAttributes<SVGFEDisplacementMapElement>;
      feDistantLight: HTMLAttributes<SVGFEDistantLightElement>;
      feDropShadow: HTMLAttributes<SVGFEDropShadowElement>;
      feFlood: HTMLAttributes<SVGFEFloodElement>;
      feFuncA: HTMLAttributes<SVGFEFuncAElement>;
      feFuncB: HTMLAttributes<SVGFEFuncBElement>;
      feFuncG: HTMLAttributes<SVGFEFuncGElement>;
      feFuncR: HTMLAttributes<SVGFEFuncRElement>;
      feGaussianBlur: HTMLAttributes<SVGFEGaussianBlurElement>;
      feImage: HTMLAttributes<SVGFEImageElement>;
      feMerge: HTMLAttributes<SVGFEMergeElement>;
      feMergeNode: HTMLAttributes<SVGFEMergeNodeElement>;
      feMorphology: HTMLAttributes<SVGFEMorphologyElement>;
      feOffset: HTMLAttributes<SVGFEOffsetElement>;
      fePointLight: HTMLAttributes<SVGFEPointLightElement>;
      feSpecularLighting: HTMLAttributes<SVGFESpecularLightingElement>;
      feSpotLight: HTMLAttributes<SVGFESpotLightElement>;
      feTile: HTMLAttributes<SVGFETileElement>;
      feTurbulence: HTMLAttributes<SVGFETurbulenceElement>;
      filter: HTMLAttributes<SVGFilterElement>;
      foreignObject: HTMLAttributes<SVGForeignObjectElement>;
      g: HTMLAttributes<SVGGElement>;
      image: HTMLAttributes<SVGImageElement>;
      line: HTMLAttributes<SVGLineElement>;
      linearGradient: HTMLAttributes<SVGLinearGradientElement>;
      marker: HTMLAttributes<SVGMarkerElement>;
      mask: HTMLAttributes<SVGMaskElement>;
      metadata: HTMLAttributes<SVGMetadataElement>;
      mpath: HTMLAttributes<SVGElement>;
      path: HTMLAttributes<SVGPathElement>;
      pattern: HTMLAttributes<SVGPatternElement>;
      polygon: HTMLAttributes<SVGPolygonElement>;
      polyline: HTMLAttributes<SVGPolylineElement>;
      radialGradient: HTMLAttributes<SVGRadialGradientElement>;
      rect: HTMLAttributes<SVGRectElement>;
      stop: HTMLAttributes<SVGStopElement>;
      switch: HTMLAttributes<SVGSwitchElement>;
      symbol: HTMLAttributes<SVGSymbolElement>;
      text: HTMLAttributes<SVGTextElement>;
      textPath: HTMLAttributes<SVGTextPathElement>;
      tspan: HTMLAttributes<SVGTSpanElement>;
      use: HTMLAttributes<SVGUseElement>;
      view: HTMLAttributes<SVGViewElement>;
    }
  }
}