import Link from "next/link";

const articles = [
  {
    title: "What is SIP?",
    href: "/articles/what-is-sip",
  },
  {
    title: "Mutual Funds for Beginners",
    href: "/articles/mutual-funds-for-beginners",
  },
  {
    title: "How Compounding Works",
    href: "/articles/power-of-compounding",
  },
];

export default function RelatedArticles() {
  return (
    <section className="mt-28">

      <h2 className="text-center text-5xl font-black">
        Continue Learning
      </h2>

      <div className="mx-auto mt-14 max-w-4xl space-y-5">

        {articles.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            className="flex items-center justify-between rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
          >
            <span className="text-lg font-semibold">
              {article.title}
            </span>

            <span className="font-bold text-emerald-600">
              Read →
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
}