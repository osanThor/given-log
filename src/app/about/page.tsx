import Profile from "@/components/common/Profile";

export default function aboutPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Profile />
      <div className="flex flex-col items-center w-full gap-4 px-4 py-10 rounded bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-bold">Who am I?</h2>
          <p className="text-center text-gray-700">
            발전과 변화를 멈추지 않는 프론트엔드 개발자
            <br />
            개발자로서 유지보수도 중요하지만, 새로 도입 된 기술들과 라이브러리,
            <br />
            Framework를 도입하여 사용자가 만족할 수 있는 서비스를 만들어내는 것
            <br />
            역시 대단히 중요하고 뜻 깊게 여기고 있습니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-bold">Skills</h2>
          <p className="text-center text-gray-700">
            React, Next, Javascript(ES6), Typescript, Redux, Sass(Scss),
            Tailwind Css
          </p>
        </div>
      </div>
    </div>
  );
}
