type Props = {
  category: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  readTime: string;
};

export default function ArticleHero({
  category,
  title,
  description,
  author,
  publishedAt,
  readTime,
}: Props) {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-emerald-50 to-white py-20">

      <div className="mx-auto max-w-4xl px-6">

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          {category}
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">
          {title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-600">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-6 text-gray-500">

          <span>👤 {author}</span>

          <span>📅 {publishedAt}</span>

          <span>⏱ {readTime}</span>

        </div>

      </div>

    </section>
  );
}