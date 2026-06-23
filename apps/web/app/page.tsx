import Image from "next/image";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      Home Page
      <ProductsPage/>

    </div>
  );
}
