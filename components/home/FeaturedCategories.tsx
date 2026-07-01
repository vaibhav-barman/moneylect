import Card from "@/components/ui/Card";

const categories = [
  {
    title: "Saving",
    description: "Learn how to build an emergency fund and save consistently.",
    icon: "💰",
    href: "/saving",
  },
  {
    title: "Investing",
    description: "Understand SIPs, mutual funds and long-term investing.",
    icon: "📈",
    href: "/investing",
  },
  {
    title: "Credit & Loans",
    description: "Use credit cards wisely and avoid unnecessary debt.",
    icon: "💳",
    href: "/credit",
  },
  {
    title: "Taxes",
    description: "Learn the basics of income tax before your first salary.",
    icon: "📄",
    href: "/taxes",
  },
  {
    title: "Insurance",
    description: "Protect yourself with the right insurance at the right time.",
    icon: "🛡️",
    href: "/insurance",
  },
  {
    title: "Budgeting",
    description: "Create a budget that actually works for your lifestyle.",
    icon: "📊",
    href: "/budgeting",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Start With The Basics
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-600">
          Build your financial knowledge step by step.
        </p>

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
    </section>
  );
}