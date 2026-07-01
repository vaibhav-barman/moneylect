import Link from "next/link";

type ArticleCardProps = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
};

export default function ArticleCard({
  slug,
  title,
  description,
  category,
  readTime,
}: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        {category}
      </p>

      <h2 className="mt-4 text-3xl font-bold text-gray-900 group-hover:text-emerald-600">
        {title}
      </h2>

      <p className="mt-5 leading-8 text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {readTime}
        </span>

        <span className="font-semibold text-emerald-600">
          Read →
        </span>
      </div>
    </Link>
  );
}