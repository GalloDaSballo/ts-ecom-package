import { Product, ProductInCart } from "./types";

/**
 * Given a product, return it's price
 * @param product
 */
export const getPrice = (product: Product): number => product.price;

/**
 * Given a productInCart, return it's quantity
 * @param product
 */
export const getQuantity = (product: ProductInCart): number => product.quantity;
