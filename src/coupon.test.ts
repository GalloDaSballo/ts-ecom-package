import { getCouponValue, isFreeShippingCoupon } from "./coupon";
import { FLAT_10, NO_SHIPPING, PERCENT_20 } from "./mock/coupon";

describe("getCouponValue", () => {
  test("Flat Coupon Value is coupon.value", () => {
    expect(getCouponValue(118, FLAT_10)).toBe(FLAT_10.value);
  });
  test("Flat_10 Coupon Value is 10", () => {
    expect(getCouponValue(118, FLAT_10)).toBe(10);
  });
  test("PERCENT_20 Coupon Value is 23.6", () => {
    expect(getCouponValue(118, PERCENT_20)).toBe(23.6);
  });
  test("Shipping Coupon Value is 0", () => {
    expect(getCouponValue(100, NO_SHIPPING)).toBe(0);
  });
});

describe("isFreeShippingCoupon", () => {
  test("NO_SHIPPING is freeshipping", () => {
    expect(isFreeShippingCoupon(NO_SHIPPING)).toBe(true);
  });
  test("No Coupon is not freeshipping", () => {
    expect(isFreeShippingCoupon()).toBe(false);
  });
  test("FLAT_10 Coupon is not freeshipping", () => {
    expect(isFreeShippingCoupon(FLAT_10)).toBe(false);
  });
});
