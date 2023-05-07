export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:gap-10">
      {children}
    </div>
  );
}
