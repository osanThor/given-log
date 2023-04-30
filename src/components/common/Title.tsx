interface Props {
  title: string;
}
export default function Title({ title }: Props) {
  return (
    <div className="px-4 py-2 text-lg font-bold text-gray-800 uppercase border-b border-gray-200">
      {title}
    </div>
  );
}
