type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-5xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}