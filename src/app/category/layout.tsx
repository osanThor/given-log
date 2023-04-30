export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[700px] items-start gap-10 flex flex-col md:flex-row">
      <div className="order-2 flex-[3] md:order-1">{children}</div>
      <div className="flex-[0.5] border p-2 px-3 rounded-2xl w-full border-gray-300 order-1 md:order-2 md:w-auto bg-gray-100">
        <h3 className="w-full mb-2 text-sm font-medium">Tags</h3>
        <ul className="flex flex-wrap gap-1">
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
          <li className="p-1 px-2 text-xs bg-white border border-gray-300 rounded-full">
            #example
          </li>
        </ul>
      </div>
    </div>
  );
}
