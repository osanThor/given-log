export default function NotFound() {
  return (
    <div className="min-h-[700px] p-4 flex items-center justify-center flex-col">
      <h1 className="mb-4 text-4xl font-bold">
        404 | <span className="text-red-500 ">Not Found</span>
      </h1>
      <p className="mb-4 text-gray-600">페이지를 못찾겠어요....</p>
    </div>
  );
}
