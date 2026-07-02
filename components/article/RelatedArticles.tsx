import ArticleCard from "@/components/content/ArticleCard";
import { getArticles } from "@/services/article.service";

export default function RelatedArticles() {
  const articles = getArticles().slice(0, 3);

  return (
    <section className="mt-32">

      <h2 className="text-4xl font-bold">
        Related Articles
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">

        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            description={article.description}
            category={article.category}
            readTime={article.readTime}
          />
        ))}

      </div>

    </section>
  );
}