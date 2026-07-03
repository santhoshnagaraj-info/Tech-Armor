import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-cyan-900/30 bg-[#050b16]">
      <Container className="pt-8">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="mb-5 text-2xl font-black italic text-cyan-400">
              TECH_ARMOR
            </h2>

            <p className="leading-7 text-gray-400">
              Engineered for elite life. Protecting your hardware with
              mathematical rigor and military-grade precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 font-bold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Warranty</li>
              <li>Shipping</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 font-bold uppercase tracking-wider text-white">
              Newsletter
            </h3>

            <div className="flex overflow-hidden rounded-lg border border-cyan-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
              />

              <button className="bg-cyan-400 px-6 font-semibold text-black transition hover:bg-cyan-300">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="m-2 border-t border-cyan-900/30 p-2 text-center text-sm text-gray-500">
          © 2025 TECH_ARMOR. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}