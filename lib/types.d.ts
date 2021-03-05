export interface Product {
    price: number;
}
export interface ProductInCart extends Product {
    quantity: number;
}
export declare type Cart = ProductInCart[];
export interface Coupon {
    type: "flat" | "percent" | "shipping";
    value?: number;
}
