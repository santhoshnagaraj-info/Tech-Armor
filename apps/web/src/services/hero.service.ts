import { getProducts } from "@/src/services/product.service";

export default async function getHeroProduct() {
  // Implementation for fetching hero product

  const products = await getProducts();
    const heroProduct =
    products.find((product) => product.name) ??
    products.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    )[0];

  return heroProduct;
}