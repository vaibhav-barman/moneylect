import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ArticleHero from "@/components/article/ArticleHero";
import ReadingProgress from "@/components/article/ReadingProgress";
import ShareButtons from "@/components/article/ShareButtons";
import RelatedArticles from "@/components/article/RelatedArticles";

import { articles } from "@/data/articles/articles";
import { notFound } from "next/navigation";

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
      <ReadingProgress />

      <Navbar />

      <ArticleHero
        category={article.category}
        title={article.title}
        description={article.description}
        author={article.author}
        publishedAt={article.publishedAt}
        readTime={article.readTime}
      />

      <main className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[80px_1fr]">

          <aside className="hidden lg:block">
            <ShareButtons />
          </aside>

          <article className="prose prose-lg max-w-none">

            {article.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

          </article>

        </div>

        <RelatedArticles />

      </main>

      <Footer />
    </>
  );
}