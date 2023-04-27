export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center w-full">{children}</div>;
}
