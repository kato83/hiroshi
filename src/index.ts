/**!
 * @license Hiroshi JS | Copyright (c) Kato83.
 * https://github.com/kato83/hiroshi/blob/master/LICENSE.txt
 */

const builtinEventMapping = (key: string) =>
    (isMaybeEvent(key)) ?
        key.toLowerCase() :
        {
            // If special dom property mappings are required, they should be added.
        }[key] ?? key;

const isNotNullable = arg => typeof arg !== 'undefined' && arg !== null;

const isMaybeEvent = key => key.startsWith('on') && key[2];

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

        // style property
        if (attribute === 'style' && typeof value === 'object') {
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
