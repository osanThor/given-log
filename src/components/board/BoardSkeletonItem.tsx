import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function BoardSkeletonItem() {
  return (
    <div className="flex flex-col justify-start overflow-hidden transition-transform border border-gray-300 rounded-lg shadow-lg h-max max-h-96">
      <Skeleton height={160} className="flex" />
      <div className="px-2 pb-4">
        <Skeleton width={70} />
          <Skeleton count={2} />
        <Skeleton width={70} />
      </div>
    </div>
  );
}
