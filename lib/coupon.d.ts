import { Coupon } from "./types";
/**
 * Given a subtotal and a coupon return the coupon value
 * NOTE: Ignores shipping
 * @param subtotal
 * @param coupon
 */
export declare const getCouponValue: (subtotal: number, coupon?: Coupon | undefined) => number;
/**
 * Given a coupon returns true if the coupon gives free shipping
 * @param coupon
 */
export declare const isFreeShippingCoupon: (coupon?: Coupon | undefined) => boolean;
