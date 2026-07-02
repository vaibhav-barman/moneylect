type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function CalculatorHeader({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
        {badge}
      </span>

      <h1 className="mt-8 text-5xl font-black lg:text-6xl">
        {title}
      </h1>

      <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}