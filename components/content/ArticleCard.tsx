import Link from "next/link";

type Props = {
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
}: Props) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="group block overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-lg"
    >
      <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
        {category}
      </p>

      <h2 className="mt-4 text-[30px] leading-tight font-bold text-gray-900 group-hover:text-emerald-600">
        {title}
      </h2>

      <p className="mt-6 leading-8 text-gray-600">
        {description}
      </p>

      <div className="mt-10 flex items-center justify-between">
        <span className="text-gray-500">
          {readTime}
        </span>

        <span className="font-semibold text-emerald-600">
          Read Article →
        </span>
      </div>
    </Link>
  );
}