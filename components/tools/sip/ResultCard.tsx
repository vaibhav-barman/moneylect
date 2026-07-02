type Props = {
  title: string;
  value: string;
  color: string;
};

export default function ResultCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div
      className="
        relative
        rounded-[28px]
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-50 blur-2xl" />

      <p className="relative text-sm font-medium text-gray-500">
        {title}
      </p>

      <h2
        className={`relative mt-3 break-words text-2xl font-black lg:text-3xl ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}