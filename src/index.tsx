type Children = Node & string[] & Array<Node[]>;

/**
 * 要素を組み立てる
 * @param tagName タグ名称
 * @param attributes 属性郡
 * @param children
 */
export const createElement = (
    tagName: string | any,
    attributes: { [p: string]: unknown } = {},
    ...children: Children[]
): Node => {
    if (tagName instanceof DocumentFragment) {
        if (Array.isArray(children) && Array.isArray(children[0])) {
            tagName.append(...children[0]);
        } else {
            tagName.append(...children);
        }
        return tagName;
    } else {
        const elm = Object.is(tagName, createFragment) ? tagName() : document.createElement(tagName);
        for (const attribute in attributes) {
            elm.setAttribute(camel2KebabCase(attribute), attributes[attribute]);
        }
        if (Array.isArray(children)) {
            elm.append(...children);
        } else {
            elm.append(children);
        }
        return elm;
    }
};

export const createFragment = () => document.createDocumentFragment();

/**
 * キャメルケースからHTML属性のケバブケースに変換する
 */
export const camel2KebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export const sample = () => <>
    <div class='a'>sample</div>
    <div dataHoge='hoge'>sample</div>
</>;