import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: string;
  status: string;
};

export default function ToolCard({
  title,
  description,
  href,
  icon,
  status,
}: Props) {
  const available = status === "Available";

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div className="text-5xl">
          {icon}
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            available
              ? "bg-emerald-100 text-emerald-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>

      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        {description}
      </p>

      {available ? (
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Open Calculator →
        </Link>
      ) : (
        <button
          disabled
          className="mt-8 rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-500"
        >
          Coming Soon
        </button>
      )}

    </div>
  );
}