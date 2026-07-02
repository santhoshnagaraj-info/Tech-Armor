// src/components/product/ProductForm.tsx   

import Hero from "@/src/components/hero/Hero";
import ProductsPage from "@/src/components/products/ProductGrid";
import getHeroProduct from "@/src/services/hero.service";
import OfferBanner from "@/src/components/offer/OfferBanner";
import { offers } from "@/src/data/offer";


const heroProduct = await getHeroProduct();
const activeOffer = offers.find((offer) => offer.active) ?? offers[0];

export default function HomePage() {
  return (
    <div className="bg-zinc-50 dark:bg-black ">
      {/* <nav className="p-4 text-3xl text-center"> Home Page</nav> */}
      <Hero product={heroProduct} />
      <ProductsPage/>
      <OfferBanner offer={activeOffer} />

    </div>
  );
}
