/**!
 * @license Yuki Kato
 * Hiroshi JS
 * Copyright (c) Kato83.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.camel2KebabCase = exports.createFragment = exports.createElement = void 0;
    var attributeMapping = function (key) {
        var _a;
        return (_a = ({
            className: 'class',
            htmlFor: 'for'
        })[key]) !== null && _a !== void 0 ? _a : key;
    };
    /**
     * Build element.
     * @param nodeName element name or Component function
     * @param attributes attributes
     * @param children rest parameter children
     */
    var createElement = function (nodeName, attributes) {
        if (attributes === void 0) { attributes = {}; }
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var elm = (typeof nodeName === 'string') ? document.createElement(nodeName)
            : nodeName.apply(null);
        for (var attribute in attributes) {
            if (attribute.startsWith('on')
                && attribute.length > 2
                && attribute[2].toUpperCase() === attribute[2]) {
                elm.addEventListener(attribute.substring(2).toLowerCase(), attributes[attribute]);
            }
            else {
                var value = attributes[attribute];
                if (typeof value === 'undefined' || value === null) {
                    elm.removeAttribute(attribute);
                }
                else if (attribute === 'style' && typeof value === 'object') {
                    for (var property in value) {
                        elm.style[property] = value[property];
                    }
                }
                else {
                    elm.setAttribute((0, exports.camel2KebabCase)(attributeMapping(attribute)), value);
                }
            }
        }
        elm.append.apply(elm, children);
        return elm;
    };
    exports.createElement = createElement;
    /**
     * create document fragment.
     */
    var createFragment = function () { return document.createDocumentFragment(); };
    exports.createFragment = createFragment;
    /**
     * convert camel case to kebab case.
     */
    var camel2KebabCase = function (str) { return str.replace(/[A-Z]/g, function (letter) { return "-".concat(letter.toLowerCase()); }); };
    exports.camel2KebabCase = camel2KebabCase;
});
//# sourceMappingURL=index.js.map