import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { articles } from "@/data/articles/articles";

export default function FeaturedArticles() {
  const featured = articles.slice(0, 4);

  return (
    <section className="bg-gray-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Latest Guides"
          title="Start Reading Today"
          subtitle="Simple finance articles written for Indian students and young professionals."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Large Featured Card */}

          <Link
            href={`/articles/${featured[0].slug}`}
            className="group rounded-3xl bg-white p-10 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:col-span-2"
          >

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              {featured[0].category}
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 group-hover:text-emerald-600">
              {featured[0].title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {featured[0].description}
            </p>

            <div className="mt-10 flex items-center justify-between">

              <span className="text-gray-500">
                {featured[0].readTime}
              </span>

              <ArrowRight
                size={24}
                className="text-emerald-600 transition group-hover:translate-x-2"
              />

            </div>

          </Link>

          {/* Small Cards */}

          <div className="space-y-6">

            {featured.slice(1).map((article) => (

              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >

                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  {article.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-emerald-600">
                  {article.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-gray-500">
                    {article.readTime}
                  </span>

                  <ArrowRight
                    size={20}
                    className="text-emerald-600 transition group-hover:translate-x-2"
                  />

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}