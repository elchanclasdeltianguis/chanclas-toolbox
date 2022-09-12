"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
const isString = (unknow) => {
    const result = typeof unknow === "string" || unknow instanceof String;
    return result;
};
exports.isString = isString;
