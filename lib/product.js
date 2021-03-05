"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuantity = exports.getPrice = void 0;
/**
 * Given a product, return it's price
 * @param product
 */
var getPrice = function (product) { return product.price; };
exports.getPrice = getPrice;
/**
 * Given a productInCart, return it's quantity
 * @param product
 */
var getQuantity = function (product) { return product.quantity; };
exports.getQuantity = getQuantity;
