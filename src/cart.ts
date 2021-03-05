import { SHIPPING_COST, SHIPPING_THRESHOLD, TAXES } from "./constants";
import { getCouponValue, isFreeShippingCoupon } from "./coupon";
import { getPrice, getQuantity } from "./product";
import { Cart, Coupon, ProductInCart } from "./types";

/**
 * Given a cart, return it's subtotal (pre-tax, pre-coupon, pre-shipping)
 * @param cart
 */
export const getSubtotal = (cart: Cart): number => {
  const subtotal = cart.reduce(
    (acc: number, product: ProductInCart) =>
      acc + getPrice(product) * getQuantity(product),
    0
  );
  return subtotal;
};

/**
 * Given a cart and coupon, returns the subtotal
 * Note: Shipping is discounted after
 * @param cart
 * @param coupon
 */
export const getSubtotalWithCoupon = (cart: Cart, coupon?: Coupon): number => {
  const subtotal = getSubtotal(cart);
  const couponValue = getCouponValue(subtotal, coupon);
  return subtotal - couponValue;
};

/**
 * Given a subtotal, calculates taxes for it
 * @param subtotal
 */
export const getTaxes = (cart: Cart, coupon?: Coupon): number =>
  getSubtotalWithCoupon(cart, coupon) * TAXES;

/**
 * Given a cart and shipping coupon return the shippign cost
 * @param cart
 */
export const getShipping = (cart: Cart, coupon?: Coupon): number => {
  if (isFreeShippingCoupon(coupon)) {
    return 0;
  }

  return getSubtotal(cart) < SHIPPING_THRESHOLD ? SHIPPING_COST : 0;
};

/**
 * Given a cart and TODO a coupon, return the total price including taxes, coupon and shipping
 * @param cart
 */
export const getTotal = (cart: Cart, coupon?: Coupon): number => {
  const subtotal = getSubtotalWithCoupon(cart, coupon);

  const taxes = getTaxes(cart, coupon);
  const shipping = getShipping(cart, coupon);
  return Math.round((subtotal + taxes + shipping) * 100) / 100;
};
