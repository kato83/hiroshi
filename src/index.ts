type Children = string & string[] & Node & Node[];

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
                attribute.substr(2).toLowerCase(),
                attributes[attribute]);
        } else {
            const name = attribute === 'className' ? 'class' : attribute;
            elm.setAttribute(
                camel2KebabCase(name),
                attributes[attribute]);
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
