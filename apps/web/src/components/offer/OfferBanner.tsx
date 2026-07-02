import Image from "next/image";

import Container from "../ui/Container";
import Countdown from "./CountDown";

import { Offer } from "@/src/types/offer";

interface Props {
  offer: Offer;
}

export default function OfferBanner({ offer }: Props) {
  return (
    <section className="py-20 bg-[#071526]">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#0b1b2e]">
          <div className="grid items-center lg:grid-cols-2">
            {/* Left */}

            <div className="p-10 lg:p-16">
              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-400">
                Save {offer.discount}%
              </span>

              <h2 className="mt-6 text-5xl font-black text-white">
                {offer.title}
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-400">
                {offer.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                <button className="rounded-xl bg-cyan-400 px-8 py-4 font-bold uppercase text-black transition hover:bg-cyan-300">
                  {offer.buttonText}
                </button>

                <Countdown expiresAt={offer.expiresAt} />
              </div>
            </div>

            {/* Right */}

            <div className="relative flex h-[450px] items-center justify-center bg-gradient-to-br from-[#08131f] via-[#0a1b2e] to-[#071526]">
              <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

              <Image
                src={offer.image}
                alt={offer.title}
                width={700}
                height={700}
                className="relative object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}