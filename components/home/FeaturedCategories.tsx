import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { categories } from "@/data/categories/categories";

export default function FeaturedCategories() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <Heading
          title="Start With The Basics"
          subtitle="Build your financial knowledge step by step."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}