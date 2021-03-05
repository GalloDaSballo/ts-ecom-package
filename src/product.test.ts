import { getPrice, getQuantity } from "./product";
import { ProductInCart } from "./types";

const MOCK_PRODUCT: ProductInCart = {
  price: 12.99,
  quantity: 3,
};

describe("getPrice", () => {
  test("Price for product is product.price", () => {
    expect(getPrice(MOCK_PRODUCT)).toBe(MOCK_PRODUCT.price);
  });
});

describe("getQuantity", () => {
  test("Quanity for product is product.quantity", () => {
    expect(getQuantity(MOCK_PRODUCT)).toBe(MOCK_PRODUCT.quantity);
  });
});
