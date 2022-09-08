/**!
 * @license Hiroshi JS | Copyright (c) Kato83.
 * https://github.com/kato83/hiroshi/blob/master/LICENSE.txt
 */

import {JSX as JSXInternal} from './jsx';

namespace Hiroshi {

  /**
   * Build element.
   * @param nodeName element name or Component function
   * @param attributes attributes
   * @param children rest parameter children
   */
  export function createElement(
    nodeName: string | ((props: any) => JSX.Element),
    attributes: ({ [p: string]: unknown } | null) = {},
    ...children: any[]
  ): JSX.Element {
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

  export import h = Hiroshi.createElement;
  export import JSX = JSXInternal;

  /**
   * create document fragment.
   */
  export const Fragment = () => () => document.createDocumentFragment();

  export const createRef = <T extends Node>(initialVale?: T) => {
    return Object.seal({current: initialVale ?? null});
  };

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
      else if (isNotNullable(elm[attribute])) {
        elm[attribute] = value;
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
   * apply element and mount.
   * @param node
   * @param entryPoint Output location for the object passed in the node argument.
   */
  export const render = (node: JSX.Element, entryPoint?: HTMLElement): Node => {
    return entryPoint?.appendChild(node()) ?? node();
  };

  /**
   * convert camel case to kebab case.
   */
  const camel2KebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

}

const isNotNullable = (arg: any) => typeof arg !== 'undefined' && arg !== null;
const isObject = (arg): arg is object => typeof arg === 'object' && arg !== null;
const isString = (arg): arg is string => typeof arg === 'string';
const isFunction = (arg): arg is Function => typeof arg === 'function';

export default Hiroshi;
export import createRef = Hiroshi.createRef;
export import render = Hiroshi.render;
export import Fragment = Hiroshi.Fragment;

export function createElement(
  nodeName: string | ((props: any) => JSXInternal.Element),
  attributes: ({ [p: string]: unknown } | null) = {},
  ...children: any[]
): JSXInternal.Element {
  return Hiroshi.createElement(nodeName, attributes, ...children)
}

export function h(
  nodeName: string | ((props: any) => JSXInternal.Element),
  attributes: ({ [p: string]: unknown } | null) = {},
  ...children: any[]
): JSXInternal.Element {
  return Hiroshi.h(nodeName, attributes, ...children)
}

export declare namespace createElement {
  export import JSX = Hiroshi.JSX;
}

export declare namespace h {
  export import JSX = Hiroshi.JSX;
}