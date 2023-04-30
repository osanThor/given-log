export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full p-4 px-6 ">{children}</div>
  );
}
