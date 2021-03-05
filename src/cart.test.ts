import { getSubtotal, getTotal, getShipping, getTaxes } from "./cart";
import { SHIPPING_COST } from "./constants";
import { Cart } from "./types";
import { FLAT_10, NO_SHIPPING, PERCENT_20 } from "./mock/coupon";

const CART_1: Cart = [
  {
    price: 12.99,
    quantity: 1,
  },
];

const CART_2: Cart = [
  {
    price: 59,
    quantity: 2,
  },
];

const CART_3: Cart = [
  {
    price: 59,
    quantity: 1,
  },
];

describe("getSubtotal", () => {
  test("subtotal for cart 1 is 12.99", () => {
    expect(getSubtotal(CART_1)).toBe(12.99);
  });
  test("subtotal for cart 2 is 118", () => {
    expect(getSubtotal(CART_2)).toBe(118);
  });
});

describe("getTaxes", () => {
  test("taxes for cart 1 is 2.8578", () => {
    expect(getTaxes(CART_1)).toBe(2.8578);
  });
  test("subtotal for cart 2 is 25.96", () => {
    expect(getTaxes(CART_2)).toBe(25.96);
  });
});

describe("getTaxes with coupon", () => {
  test("taxes for cart 1 with flat 10 coupon is 23.76", () => {
    expect(getTaxes(CART_2, FLAT_10)).toBe(23.76);
  });
  test("subtotal for cart 2 with percent20 coupon is 20.768", () => {
    expect(getTaxes(CART_2, PERCENT_20)).toBe(20.768);
  });
});

describe("getShipping", () => {
  test("Shipping for cart 1 is SHIPPING_COST", () => {
    expect(getShipping(CART_1)).toBe(SHIPPING_COST);
  });
  test("Shipping for cart 2 is 0", () => {
    expect(getShipping(CART_2)).toBe(0);
  });
});

describe("getTotal", () => {
  test("total for cart 1 is 35.85", () => {
    expect(getTotal(CART_1)).toBe(35.85);
  });
  test("total for cart 2 is 143.96", () => {
    expect(getTotal(CART_2)).toBe(143.96);
  });
});

describe("getTotal with coupons", () => {
  test("Flat_10 for Cart 2 total is 131.76", () => {
    expect(getTotal(CART_2, FLAT_10)).toBe(131.76);
  });
  test("Percent_2 for Cart 2 total is 115.17", () => {
    expect(getTotal(CART_2, PERCENT_20)).toBe(115.17);
  });
  test("NO_SHIPPING for Cart 2 total is 143.96", () => {
    expect(getTotal(CART_2, NO_SHIPPING)).toBe(143.96);
  });
  test("NO_SHIPPING for Cart 3 total is 71.98", () => {
    expect(getTotal(CART_3, NO_SHIPPING)).toBe(71.98);
  });
});
