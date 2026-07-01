"use client";

import {
  Search,
  ShoppingCart,
  UserCircle,
  Headphones,
  Smartphone,
  BatteryCharging,
  Shield,
  Zap,
  Radio,
} from "lucide-react";

import Logo from "./logo";
import NavMenu from "./NavMenu";
import Container from "../ui/Container";
import { CATEGORY_LINKS } from "@/src/lib/navigation";

const icons = [
  Headphones,
  Smartphone,
  BatteryCharging,
  Zap,
  Radio,
  Shield,
];

export default function Navbar() {
  return (
    <header id="/" className="sticky top-0 z-50 w-full border-b border-cyan-900/40 bg-[#050b16]/95 backdrop-blur-lg">
      {/* Top Navbar */}
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <NavMenu />

          <div className="flex items-center gap-6">
            <Search
              size={20}
              className="cursor-pointer text-cyan-400 transition hover:scale-110"
            />

            <ShoppingCart
              size={20}
              className="cursor-pointer text-cyan-400 transition hover:scale-110"
            />

            <UserCircle
              size={22}
              className="cursor-pointer text-cyan-400 transition hover:scale-110"
            />
          </div>
        </div>
      </Container>

      {/* Category Navigation */}
      <div className="border-t border-cyan-900/30 bg-[#071526]">
        <Container>
          <div className="flex h-14 items-center justify-center gap-10 overflow-x-auto whitespace-nowrap">
            {CATEGORY_LINKS.map((item, index) => {
              const Icon = icons[index];

              return (
                <button
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  <Icon size={16} />

                  {item}
                </button>
              );
            })}
          </div>
        </Container>
      </div>
    </header>
  );
}