"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFreeShippingCoupon = exports.getCouponValue = void 0;
/**
 * Given a subtotal and a coupon return the coupon value
 * NOTE: Ignores shipping
 * @param subtotal
 * @param coupon
 */
var getCouponValue = function (subtotal, coupon) {
    if (!coupon) {
        return 0;
    }
    var value = coupon.value || 0;
    if (coupon.type === "flat") {
        return value;
    }
    if (coupon.type === "percent") {
        return value * subtotal;
    }
    return 0;
};
exports.getCouponValue = getCouponValue;
/**
 * Given a coupon returns true if the coupon gives free shipping
 * @param coupon
 */
var isFreeShippingCoupon = function (coupon) {
    return (coupon === null || coupon === void 0 ? void 0 : coupon.type) === "shipping";
};
exports.isFreeShippingCoupon = isFreeShippingCoupon;
