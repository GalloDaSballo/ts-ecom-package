"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coupon_1 = require("./coupon");
var coupon_2 = require("./mock/coupon");
describe("getCouponValue", function () {
    test("Flat Coupon Value is coupon.value", function () {
        expect(coupon_1.getCouponValue(118, coupon_2.FLAT_10)).toBe(coupon_2.FLAT_10.value);
    });
    test("Flat_10 Coupon Value is 10", function () {
        expect(coupon_1.getCouponValue(118, coupon_2.FLAT_10)).toBe(10);
    });
    test("PERCENT_20 Coupon Value is 23.6", function () {
        expect(coupon_1.getCouponValue(118, coupon_2.PERCENT_20)).toBe(23.6);
    });
    test("Shipping Coupon Value is 0", function () {
        expect(coupon_1.getCouponValue(100, coupon_2.NO_SHIPPING)).toBe(0);
    });
});
describe("isFreeShippingCoupon", function () {
    test("NO_SHIPPING is freeshipping", function () {
        expect(coupon_1.isFreeShippingCoupon(coupon_2.NO_SHIPPING)).toBe(true);
    });
    test("No Coupon is not freeshipping", function () {
        expect(coupon_1.isFreeShippingCoupon()).toBe(false);
    });
    test("FLAT_10 Coupon is not freeshipping", function () {
        expect(coupon_1.isFreeShippingCoupon(coupon_2.FLAT_10)).toBe(false);
    });
});
