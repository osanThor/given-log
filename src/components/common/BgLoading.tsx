import { FadeLoader } from "react-spinners";

export default function BgLoading() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/40">
      <FadeLoader color="white" />
    </div>
  );
}
