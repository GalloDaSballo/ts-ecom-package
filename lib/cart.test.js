"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("./cart");
var constants_1 = require("./constants");
var coupon_1 = require("./mock/coupon");
var CART_1 = [
    {
        price: 12.99,
        quantity: 1,
    },
];
var CART_2 = [
    {
        price: 59,
        quantity: 2,
    },
];
var CART_3 = [
    {
        price: 59,
        quantity: 1,
    },
];
describe("getSubtotal", function () {
    test("subtotal for cart 1 is 12.99", function () {
        expect(cart_1.getSubtotal(CART_1)).toBe(12.99);
    });
    test("subtotal for cart 2 is 118", function () {
        expect(cart_1.getSubtotal(CART_2)).toBe(118);
    });
});
describe("getTaxes", function () {
    test("taxes for cart 1 is 2.8578", function () {
        expect(cart_1.getTaxes(CART_1)).toBe(2.8578);
    });
    test("subtotal for cart 2 is 25.96", function () {
        expect(cart_1.getTaxes(CART_2)).toBe(25.96);
    });
});
describe("getTaxes with coupon", function () {
    test("taxes for cart 1 with flat 10 coupon is 23.76", function () {
        expect(cart_1.getTaxes(CART_2, coupon_1.FLAT_10)).toBe(23.76);
    });
    test("subtotal for cart 2 with percent20 coupon is 20.768", function () {
        expect(cart_1.getTaxes(CART_2, coupon_1.PERCENT_20)).toBe(20.768);
    });
});
describe("getShipping", function () {
    test("Shipping for cart 1 is SHIPPING_COST", function () {
        expect(cart_1.getShipping(CART_1)).toBe(constants_1.SHIPPING_COST);
    });
    test("Shipping for cart 2 is 0", function () {
        expect(cart_1.getShipping(CART_2)).toBe(0);
    });
});
describe("getTotal", function () {
    test("total for cart 1 is 35.85", function () {
        expect(cart_1.getTotal(CART_1)).toBe(35.85);
    });
    test("total for cart 2 is 143.96", function () {
        expect(cart_1.getTotal(CART_2)).toBe(143.96);
    });
});
describe("getTotal with coupons", function () {
    test("Flat_10 for Cart 2 total is 131.76", function () {
        expect(cart_1.getTotal(CART_2, coupon_1.FLAT_10)).toBe(131.76);
    });
    test("Percent_2 for Cart 2 total is 115.17", function () {
        expect(cart_1.getTotal(CART_2, coupon_1.PERCENT_20)).toBe(115.17);
    });
    test("NO_SHIPPING for Cart 2 total is 143.96", function () {
        expect(cart_1.getTotal(CART_2, coupon_1.NO_SHIPPING)).toBe(143.96);
    });
    test("NO_SHIPPING for Cart 3 total is 71.98", function () {
        expect(cart_1.getTotal(CART_3, coupon_1.NO_SHIPPING)).toBe(71.98);
    });
});
