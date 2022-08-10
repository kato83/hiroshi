/**!
 * @license Hiroshi JS | Copyright (c) Kato83.
 * https://github.com/kato83/hiroshi/blob/master/LICENSE.txt
 */

const attributeMapping = (key: string) => ({
    className: 'class',
    htmlFor: 'for',
})[key] ?? key;

const isNotNullable = arg => typeof arg !== 'undefined' && arg !== null;

/**
 * Build element.
 * @param nodeName element name or Component function
 * @param attributes attributes
 * @param children rest parameter children
 */
export const createElement = (
    nodeName: string | (() => Element),
    attributes: { [p: string]: unknown } = {},
    ...children: any
): Node => {
    const elm = (typeof nodeName === 'string') ? document.createElement(nodeName)
        : nodeName.apply(null) as Element;

    for (const attribute in attributes) {
        const value = attributes[attribute];
        if (attribute.startsWith('on')
            && attribute[2]
            && attribute[2].toUpperCase() === attribute[2]) {
            elm.addEventListener(
                attribute.substring(2).toLowerCase(),
                value as EventListenerOrEventListenerObject);
        } else if (attribute === 'style' && typeof value === 'object') {
            for (const property in value) {
                (elm as HTMLElement).style[property] = value[property];
            }
        } else if (isNotNullable(value) && value !== false) {
            elm.setAttribute(
                camel2KebabCase(attributeMapping(attribute)),
                value === true ? '' : value as string);
        }
    }

    const displayChildren = children.flat()
        .filter(c => isNotNullable(c) && typeof c !== 'boolean');
    elm.append(...displayChildren);
    return elm;
};

/**
 * create document fragment.
 */
export const Fragment = () => document.createDocumentFragment();

/**
 * convert camel case to kebab case.
 */
const camel2KebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
