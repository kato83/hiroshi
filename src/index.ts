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
): ((ns?: string) => Node) => {
  const {xmlns, ...otherAttributes} = attributes ?? {};

  return (ns) => {
    const elm = isString(nodeName) ? document.createElementNS((xmlns ?? ns) as string, nodeName)
      : nodeName({children: children, ...attributes ?? {}}) as Element;

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
    else if (!isString(namespaceURI) && typeof elm[attributeMapping(attribute)] !== 'undefined') {
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
export const Fragment = () => document.createDocumentFragment();

export const createRef = <T extends Node>(initialVale?: T) => {
  return Object.seal({current: initialVale ?? null});
};

/**
 * apply element and mount.
 * @param node
 * @param entryPoint Output location for the object passed in the node argument.
 */
export const render = (node: Node | ((ns?: string) => Node), entryPoint: HTMLElement) => {
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
