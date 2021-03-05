"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotal = exports.getShipping = exports.getTaxes = exports.getSubtotalWithCoupon = exports.getSubtotal = void 0;
var constants_1 = require("./constants");
var coupon_1 = require("./coupon");
var product_1 = require("./product");
/**
 * Given a cart, return it's subtotal (pre-tax, pre-coupon, pre-shipping)
 * @param cart
 */
var getSubtotal = function (cart) {
    var subtotal = cart.reduce(function (acc, product) {
        return acc + product_1.getPrice(product) * product_1.getQuantity(product);
    }, 0);
    return subtotal;
};
exports.getSubtotal = getSubtotal;
/**
 * Given a cart and coupon, returns the subtotal
 * Note: Shipping is discounted after
 * @param cart
 * @param coupon
 */
var getSubtotalWithCoupon = function (cart, coupon) {
    var subtotal = exports.getSubtotal(cart);
    var couponValue = coupon_1.getCouponValue(subtotal, coupon);
    return subtotal - couponValue;
};
exports.getSubtotalWithCoupon = getSubtotalWithCoupon;
/**
 * Given a subtotal, calculates taxes for it
 * @param subtotal
 */
var getTaxes = function (cart, coupon) {
    return exports.getSubtotalWithCoupon(cart, coupon) * constants_1.TAXES;
};
exports.getTaxes = getTaxes;
/**
 * Given a cart and shipping coupon return the shippign cost
 * @param cart
 */
var getShipping = function (cart, coupon) {
    if (coupon_1.isFreeShippingCoupon(coupon)) {
        return 0;
    }
    return exports.getSubtotal(cart) < constants_1.SHIPPING_THRESHOLD ? constants_1.SHIPPING_COST : 0;
};
exports.getShipping = getShipping;
/**
 * Given a cart and TODO a coupon, return the total price including taxes, coupon and shipping
 * @param cart
 */
var getTotal = function (cart, coupon) {
    var subtotal = exports.getSubtotalWithCoupon(cart, coupon);
    var taxes = exports.getTaxes(cart, coupon);
    var shipping = exports.getShipping(cart, coupon);
    return Math.round((subtotal + taxes + shipping) * 100) / 100;
};
exports.getTotal = getTotal;
