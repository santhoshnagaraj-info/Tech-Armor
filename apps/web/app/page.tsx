// src/components/product/ProductForm.tsx   

import Hero from "@/src/components/hero/Hero";
import ProductsPage from "@/src/components/products/ProductGrid";
import getHeroProduct from "@/src/services/hero.service";

const heroProduct = await getHeroProduct();


export default function HomePage() {
  return (
    <div className="bg-zinc-50 dark:bg-black ">
      {/* <nav className="p-4 text-3xl text-center"> Home Page</nav> */}
      <Hero product={heroProduct} />
      <ProductsPage/>

    </div>
  );
}
