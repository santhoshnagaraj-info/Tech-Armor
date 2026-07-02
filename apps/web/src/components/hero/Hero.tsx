import Image from "next/image";

import Container from "../ui/Container";

import { Product } from "@/src/types/product";

interface HeroProps {
  product: Product;
}

export default function Hero({ product }: HeroProps) {
  return (
    <section id="/" className="bg-[#071526]">
      <Container>
        <div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold uppercase tracking-[3px] text-black">
              Engineered Precision
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
              {product.name}
            </h1>
{/* 
            <p className="mt-3 text-xl text-cyan-400">
              {product.subtitle}
            </p> */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              {product.description}
            </p>

            <div className="mt-10 flex gap-5">
              <button className="rounded-lg bg-cyan-400 px-8 py-4 font-bold uppercase text-black transition hover:bg-cyan-300">
                Shop Collection
              </button>

              <button className="rounded-lg border border-cyan-500 px-8 py-4 font-bold uppercase text-white transition hover:bg-cyan-500/20">
                View Specs
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative flex items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <Image
              src={product.image}
              alt={product.name}
              width={650}
              height={650}
              priority
              className="relative object-contain drop-shadow-[0_30px_80px_rgba(0,255,255,.3)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}