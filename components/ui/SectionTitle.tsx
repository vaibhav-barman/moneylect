type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {badge && (
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      <p className="mt-5 text-xl leading-8 text-gray-600">
        {subtitle}
      </p>

    </div>
  );
}