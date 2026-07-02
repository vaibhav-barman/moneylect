type Props = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function PageHeader({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <section className="py-16">

      <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
        {badge}
      </span>

      <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-gray-900 lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        {subtitle}
      </p>

    </section>
  );
}