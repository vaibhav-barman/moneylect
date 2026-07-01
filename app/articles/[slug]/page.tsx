import Navbar from "@/components/layout/Navbar";
import { articles } from "@/data/articles/articles";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          {article.category}
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900">
          {article.title}
        </h1>

        <div className="mt-6 flex gap-6 text-gray-500">
          <span>{article.author}</span>
          <span>{article.readTime}</span>
          <span>{article.publishedAt}</span>
        </div>

        <p className="mt-10 text-xl leading-9 text-gray-700">
          {article.description}
        </p>

        <hr className="my-12" />

        <div className="space-y-8 text-lg leading-9 text-gray-700">
          {article.content
            .trim()
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}