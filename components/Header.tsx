"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user } = useUser();

  console.log(user);

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* Top Row */}
      <div>
        <Link href="/">FleaMarket</Link>
      </div>
    </header>
  );
}

export default Header;
