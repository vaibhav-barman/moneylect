import {
  ShieldCheck,
  BookOpen,
  GraduationCap,
  IndianRupee,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: ShieldCheck,
    title: "No Fake Gurus",
    description:
      "Every lesson is based on practical finance instead of social media hype.",
  },

  {
    icon: BookOpen,
    title: "Simple Language",
    description:
      "No confusing financial jargon. Learn everything in plain English.",
  },

  {
    icon: GraduationCap,
    title: "Built for Beginners",
    description:
      "Designed for students and young professionals starting from zero.",
  },

  {
    icon: IndianRupee,
    title: "Made for India",
    description:
      "SIPs, EPF, Income Tax, Credit Cards and Banking explained for Indians.",
  },
];

export default function WhyMoneylect() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Why Moneylect?"
          title="Learning Finance Shouldn't Be Confusing"
          subtitle="We simplify personal finance so anyone can master money."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">

                  <Icon
                    size={30}
                    className="text-emerald-600"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}