"use client";

import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-center w-full px-6 py-3 bg-white border-b-2 h-14">
      <div className="container flex items-center justify-between ">
        <h1 className="text-xl font-bold text-blue-500">
          <Link href={"/"}>{"GIVEN'S LOG"}</Link>
        </h1>
        <nav className="hidden gap-4 text-sm uppercase md:flex ">
          <Link
            className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
            href="/category/developer"
          >
            developer
          </Link>
          <Link
            className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
            href="/category/life"
          >
            life
          </Link>
          <Link
            className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
            href="/about"
          >
            about
          </Link>
          <Link
            className="font-medium text-gray-500 transition-colors hover:text-cyan-400 "
            href="/contact"
          >
            contact
          </Link>
        </nav>
        <div className="relative flex md:hidden">
          <button
            className="flex items-center justify-center p-2 text-lg cursor-pointer md:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <GoX /> : <GoThreeBars />}
          </button>
          <div
            className={classNames(
              "fixed flex md:hidden flex-col text-center gap-4 w-full uppercase transition ease-in bg-white shadow left-0 top-12 p-6 rounded-box",
              { flex: toggle, hidden: !toggle }
            )}
          >
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
              href="/category/developer"
            >
              developer
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
              href="/category/life"
            >
              life
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
              href="/about"
            >
              about
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-cyan-400"
              href="/contact"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export const HeaderSpacer = () => {
  return <div className="h-14" />;
};
