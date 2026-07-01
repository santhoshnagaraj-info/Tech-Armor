"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/src/lib/navigation";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {NAV_LINKS.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm uppercase tracking-[2px] transition-all duration-300
                ${
                  active
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}