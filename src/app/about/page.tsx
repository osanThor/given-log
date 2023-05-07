import Img from "@/components/common/Img";

export default function aboutPage() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-[100px] h-[100px] overflow-hidden border border-gray-300 rounded-full">
        <Img src="/assets/images/profile.jpeg" alt="Rounded avatar" />
      </div>
      Hi! My Name is JunYoung - Given
    </div>
  );
}
