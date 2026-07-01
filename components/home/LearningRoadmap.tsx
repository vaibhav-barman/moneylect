import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const roadmap = [
  {
    step: "01",
    title: "Money Basics",
    description:
      "Understand how money works before earning your first salary.",
  },
  {
    step: "02",
    title: "Budgeting",
    description:
      "Create a monthly budget and learn how to manage your expenses.",
  },
  {
    step: "03",
    title: "Saving",
    description:
      "Build an emergency fund and develop strong saving habits.",
  },
  {
    step: "04",
    title: "Investing",
    description:
      "Start investing with SIPs, mutual funds and index funds.",
  },
  {
    step: "05",
    title: "Insurance",
    description:
      "Protect yourself and your family from financial risks.",
  },
  {
    step: "06",
    title: "Financial Freedom",
    description:
      "Build long-term wealth and achieve financial independence.",
  },
];

export default function LearningRoadmap() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <Heading
          title="Your Financial Journey"
          subtitle="Learn personal finance in the correct order instead of randomly jumping between articles."
        />

        <div className="mt-20 relative">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 h-full w-1 rounded-full bg-emerald-100" />

          <div className="space-y-10">

            {roadmap.map((item) => (
              <div
                key={item.step}
                className="relative flex gap-8"
              >
                {/* Number */}

                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-lg">
                  {item.step}
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-lg leading-8 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </Section>
  );
}