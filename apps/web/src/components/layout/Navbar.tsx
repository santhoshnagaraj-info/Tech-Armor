"use client";

import { Search, ShoppingCart, UserCircle, } from "lucide-react";

import Logo from "./logo";
import NavMenu from "./NavMenu";
import Container from "../ui/Container";
import Category from "./Category";



export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-900/40 bg-transparent backdrop-blur-lg">
      {/* Top Navbar */}
      <Container>
        <div className="flex h-13 items-center justify-between">
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
      <div className="border-t border-cyan-900/30 bg-transparent">
          <Category />
      </div>
    </header>
  );
}