import Navbar from "@/components/layout/Navbar";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import ArticleCard from "@/components/content/ArticleCard";
import Footer from "@/components/layout/Footer";

import { getArticles } from "@/services/article.service";

export default function ArticlesPage() {

  const articles = getArticles();

  return (
    <>
      <Navbar />

      <Section className="bg-white min-h-screen">
        <div className="mx-auto max-w-7xl px-6">

          <Heading
            title="Latest Articles"
            subtitle="Simple finance guides written for Indian students and young professionals."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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

        </div>
      </Section>

      <Footer />

    </>
  );
}