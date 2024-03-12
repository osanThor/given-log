import Link from "next/link";
import Img from "./Img";

export default function Profile() {
  return (
    <div className="flex flex-col items-center w-full gap-1 py-5 border-b border-gray-200">
      <div className="relative w-[100px] h-[100px] overflow-hidden border border-gray-300 rounded-full">
        <Img
          src="/assets/images/profile.png"
          alt="Rounded avatar"
          sizes="500"
          unoptimized
        />
      </div>
      <p>Hi! My Name is JunYoung</p>
      <Link
        href="/contact"
        className="px-2 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-300"
      >
        Contact
      </Link>
    </div>
  );
}
