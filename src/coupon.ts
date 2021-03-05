import { Coupon } from "./types";

/**
 * Given a subtotal and a coupon return the coupon value
 * NOTE: Ignores shipping
 * @param subtotal
 * @param coupon
 */
export const getCouponValue = (subtotal: number, coupon?: Coupon): number => {
  if (!coupon) {
    return 0;
  }

  const value = coupon.value || 0;

  if (coupon.type === "flat") {
    return value;
  }

  if (coupon.type === "percent") {
    return value * subtotal;
  }

  return 0;
};

/**
 * Given a coupon returns true if the coupon gives free shipping
 * @param coupon
 */
export const isFreeShippingCoupon = (coupon?: Coupon): boolean =>
  coupon?.type === "shipping";
