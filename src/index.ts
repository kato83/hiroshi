/**!
 * @license Yuki Kato
 * Hiroshi JS
 * Copyright (c) Kato83.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * rest parameter type
 */
type Children = string & string[] & Node & Node[];

const attributeMapping = (key: string) => ({
    className: 'class',
    htmlFor: 'for',
})[key] ?? key;

/**
 * Build element.
 * @param nodeName element name or Component function
 * @param attributes attributes
 * @param children rest parameter children
 */
export const createElement = (
    nodeName: string | (() => Element),
    attributes: { [p: string]: unknown } = {},
    ...children: Children[]
): Node => {
    const elm = (typeof nodeName === 'string') ? document.createElement(nodeName)
        : nodeName.apply(null) as Element;

    for (const attribute in attributes) {
        if (attribute.startsWith('on')
            && attribute.length > 2
            && attribute[2].toUpperCase() === attribute[2]) {
            elm.addEventListener(
                attribute.substring(2).toLowerCase(),
                attributes[attribute] as  EventListenerOrEventListenerObject);
        } else {
            const value = attributes[attribute];
            if (typeof value === 'undefined' || value === null) {
                elm.removeAttribute(attribute);
            } else if (attribute === 'style' && typeof value === 'object') {
                for (const property in value) {
                    (elm as HTMLElement).style[property] = value[property];
                }
            } else {
                elm.setAttribute(
                    camel2KebabCase(attributeMapping(attribute)),
                    value as string);
            }
        }
    }

    elm.append(...children);
    return elm;
};

/**
 * create document fragment.
 */
export const createFragment = () => document.createDocumentFragment();

/**
 * convert camel case to kebab case.
 */
export const camel2KebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);