export interface Product {
  price: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export type Cart = ProductInCart[];

export interface Coupon {
  type: "flat" | "percent" | "shipping";
  value?: number; // Flat amount for flat, percent amount for percent
}
