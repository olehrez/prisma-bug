import { getProducts } from "./products";

describe("products", () => {
  it("should return the products", async () => {
    const products = await getProducts();
    expect(products).toBeDefined();
  });
});
