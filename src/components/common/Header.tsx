"use client";

import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth.context";

const MENUS = [
  {
    href: "/category/dev",
    name: "developer",
  },
  {
    href: "/category/life",
    name: "life",
  },
  {
    href: "/about",
    name: "about",
  },
  {
    href: "/contact",
    name: "contact",
  },
];

export default function Header() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex items-center justify-center w-full px-4 py-3 bg-white border-b-2 h-14">
        <div className="container flex items-center justify-between ">
          <h1 className="text-xl font-bold text-blue-500">
            <Link href={"/"}>{"GIVEN'S LOG"}</Link>
          </h1>
          <div className="flex items-center gap-1 md:gap-4">
            {user && (
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-400"
              >
                로그아웃
              </button>
            )}
            <nav className="hidden text-sm uppercase md:flex ">
              <ul className="flex gnb gap-4 ">
                {MENUS.map((menu) => {
                  const samePath = pathname.startsWith(menu.href);
                  return (
                    <li key={menu.href}>
                      <Link
                        className={classNames(
                          "font-medium transition-colors hover:text-blue-400",
                          {
                            "!text-blue-400": samePath,
                            "text-gray-500": !samePath,
                          }
                        )}
                        href={menu.href}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="relative flex md:hidden">
              <button
                className="flex items-center justify-center p-1 text-xl cursor-pointer md:hidden"
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
                {MENUS.map((menu) => {
                  const samePath = pathname.startsWith(menu.href);
                  return (
                    <Link
                      className={classNames(
                        "font-medium transition-colors hover:text-blue-400",
                        {
                          "!text-blue-400": samePath,
                          "text-gray-500": !samePath,
                        }
                      )}
                      href={menu.href}
                    >
                      {menu.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => setToggle(false)}
        className={`w-full h-screen fixed top-0 left-0 bg-black/40 z-10 ${
          toggle ? "flex" : "hidden"
        } md:hidden`}
      />
    </>
  );
}

export const HeaderSpacer = () => {
  return <div className="h-14" />;
};
