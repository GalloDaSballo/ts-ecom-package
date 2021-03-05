import { Cart, Coupon } from "./types";
/**
 * Given a cart, return it's subtotal (pre-tax, pre-coupon, pre-shipping)
 * @param cart
 */
export declare const getSubtotal: (cart: Cart) => number;
/**
 * Given a cart and coupon, returns the subtotal
 * Note: Shipping is discounted after
 * @param cart
 * @param coupon
 */
export declare const getSubtotalWithCoupon: (cart: Cart, coupon?: Coupon | undefined) => number;
/**
 * Given a subtotal, calculates taxes for it
 * @param subtotal
 */
export declare const getTaxes: (cart: Cart, coupon?: Coupon | undefined) => number;
/**
 * Given a cart and shipping coupon return the shippign cost
 * @param cart
 */
export declare const getShipping: (cart: Cart, coupon?: Coupon | undefined) => number;
/**
 * Given a cart and TODO a coupon, return the total price including taxes, coupon and shipping
 * @param cart
 */
export declare const getTotal: (cart: Cart, coupon?: Coupon | undefined) => number;
