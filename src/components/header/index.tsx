import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-indigo-500 p-8">
      <nav className="flex gap-4 text-white">
        <Link href="/">Home</Link>
        <Link href="/case">Case</Link>
        <Link href="/counter">Counter</Link>
      </nav>
    </header>
  );
}

export default Header;
