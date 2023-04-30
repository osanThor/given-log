import Image from "next/image";
import NoImage from "../../../public/assets/images/noimage.png";
import Link from "next/link";
export default function BoardItem() {
  return (
    <div className="overflow-hidden transition-transform border border-gray-300 rounded-lg shadow-lg h-max max-h-96 hover:translate-y-2">
      <Link href="/">
        <Image src={NoImage} alt="no-image" className="h-40" />
        <div className="px-2 py-4">
          <span className="mb-2 text-xs font-bold text-green-500">DEV</span>
          <h1 className="w-full mb-2 font-bold truncate">title</h1>
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">2023.12.23</span>
            {/* 후에 댓글, 좋아요 count 추가   */}
          </div>
        </div>
      </Link>
    </div>
  );
}
