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
  nodeName: string | ((...props) => Element),
  attributes: { [p: string]: unknown } = {},
  ...children: any
): Node => {
  const elm = (typeof nodeName === 'string') ? document.createElement(nodeName)
    : nodeName({children: children, ...attributes}) as Element;

  if (typeof nodeName === 'string') {
    applyAttributes(elm, attributes);
  }

  const displayChildren = children.flat()
    .filter(c => isNotNullable(c) && typeof c !== 'boolean');

  if (typeof nodeName === 'string' || Object.is(nodeName, Fragment)) {
    elm.append(...displayChildren);
  }

  return elm;
};

const applyAttributes = (elm: Element, attributes: { [p: string]: unknown } = {}) => {
  for (const attribute in attributes) {
    const value = attributes[attribute];

    // ref
    if (attribute === 'ref'
      && value
      && isObject(value)
      && 'current' in value) {
      value['current'] = elm;
    }
    // style property
    else if (attribute === 'style' && isObject(value)) {
      for (const property in value) {
        (elm as HTMLElement).style[property] = value[property];
      }
    }
    // builtin event property
    else if (typeof elm[builtinEventMapping(attribute)] !== 'undefined') {
      elm[builtinEventMapping(attribute)] = value;
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
        camel2KebabCase(attribute),
        value === true ? '' : value as string);
    }
  }
};

/**
 * create document fragment.
 */
export const Fragment = () => document.createDocumentFragment();

export const createRef = <T extends Node>(initialVale?: T) => {
  return Object.seal({current: initialVale ?? null});
};

const builtinEventMapping = (key: string) =>
  (isMaybeEvent(key)) ?
    key.toLowerCase() :
    {
      // If special dom property mappings are required, they should be added.
    }[key] ?? key;

const isNotNullable = (arg: any) => typeof arg !== 'undefined' && arg !== null;
const isObject = (arg): arg is object => typeof arg === 'object' && arg !== null;
const isMaybeEvent = (key: string) => key.startsWith('on') && isNotNullable(key[2]);

/**
 * convert camel case to kebab case.
 */
const camel2KebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
