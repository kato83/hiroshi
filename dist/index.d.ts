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
declare type Children = string & string[] & Node & Node[];
/**
 * Build element.
 * @param nodeName element name or Component function
 * @param attributes attributes
 * @param children rest parameter children
 */
export declare const createElement: (nodeName: string | (() => Element), attributes?: {
    [p: string]: unknown;
}, ...children: Children[]) => Node;
/**
 * create document fragment.
 */
export declare const createFragment: () => DocumentFragment;
/**
 * convert camel case to kebab case.
 */
export declare const camel2KebabCase: (str: string) => string;
export {};
