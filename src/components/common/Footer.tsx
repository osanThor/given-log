import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-4 mx-2 md:m-4 bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="container p-4 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <Link href="/" className="ml-2 hover:underline">
            {"GIVEN's Log"}
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="https://www.given-log.com"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/osanThor"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Github
            </Link>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
