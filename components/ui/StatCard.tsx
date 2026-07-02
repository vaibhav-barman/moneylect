type Props = {
  label: string;
  value: string;
  color: string;
};

export default function StatCard({
  label,
  value,
  color,
}: Props) {
  return (
    <div
      className="
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
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <h2 className={`mt-3 text-3xl font-black ${color}`}>
        {value}
      </h2>
    </div>
  );
}