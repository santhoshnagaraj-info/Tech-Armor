import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-3xl font-black tracking-wider text-cyan-400 italic">
        TECH_ARMOR
      </h1>
    </Link>
  );
}