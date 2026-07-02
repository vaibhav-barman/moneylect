type Props = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function CalculatorHeader({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="pb-10">

      <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
        {badge}
      </span>

      <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900 lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        {subtitle}
      </p>

    </div>
  );
}