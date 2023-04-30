export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full h-full p-4 px-6 ">
      <div className="container">{children}</div>
    </div>
  );
}
