"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var MOCK_PRODUCT = {
    price: 12.99,
    quantity: 3,
};
describe("getPrice", function () {
    test("Price for product is product.price", function () {
        expect(product_1.getPrice(MOCK_PRODUCT)).toBe(MOCK_PRODUCT.price);
    });
});
describe("getQuantity", function () {
    test("Quanity for product is product.quantity", function () {
        expect(product_1.getQuantity(MOCK_PRODUCT)).toBe(MOCK_PRODUCT.quantity);
    });
});
