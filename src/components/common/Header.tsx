"use client";

import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth.context";

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
    <header className="fixed top-0 left-0 z-50 flex items-center justify-center w-full px-6 py-3 bg-white border-b-2 h-14">
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
          <nav className="hidden gap-4 text-sm uppercase md:flex ">
            <Link
              className={classNames(
                "font-medium transition-colors hover:text-cyan-400",
                {
                  "!text-cyan-400": pathname === "/category/dev",
                  "text-gray-500": pathname != "/category/dev",
                }
              )}
              href="/category/dev"
            >
              developer
            </Link>
            <Link
              className={classNames(
                "font-medium  transition-colors hover:text-cyan-400",
                {
                  "!text-cyan-400": pathname === "/category/life",
                  "text-gray-500": pathname != "/category/life",
                }
              )}
              href="/category/life"
            >
              life
            </Link>
            <Link
              className={classNames(
                "font-medium transition-colors hover:text-cyan-400",
                {
                  "!text-cyan-400": pathname === "/about",
                  "text-gray-500": pathname != "/about",
                }
              )}
              href="/about"
            >
              about
            </Link>
            <Link
              className={classNames(
                "font-medium transition-colors hover:text-cyan-400",
                {
                  "!text-cyan-400": pathname === "/contact",
                  "text-gray-500": pathname != "/contact",
                }
              )}
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
                className={classNames(
                  "font-medium transition-colors hover:text-cyan-400",
                  {
                    "!text-cyan-400": pathname === "/category/dev",
                    "text-gray-500": pathname != "/category/dev",
                  }
                )}
                href="/category/dev"
              >
                developer
              </Link>
              <Link
                className={classNames(
                  "font-medium  transition-colors hover:text-cyan-400",
                  {
                    "!text-cyan-400": pathname === "/category/life",
                    "text-gray-500": pathname != "/category/life",
                  }
                )}
                href="/category/life"
              >
                life
              </Link>
              <Link
                className={classNames(
                  "font-medium transition-colors hover:text-cyan-400",
                  {
                    "!text-cyan-400": pathname === "/about",
                    "text-gray-500": pathname != "/about",
                  }
                )}
                href="/about"
              >
                about
              </Link>
              <Link
                className={classNames(
                  "font-medium transition-colors hover:text-cyan-400",
                  {
                    "!text-cyan-400": pathname === "/contact",
                    "text-gray-500": pathname != "/contact",
                  }
                )}
                href="/contact"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export const HeaderSpacer = () => {
  return <div className="h-14" />;
};
