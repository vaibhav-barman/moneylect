import {
  PiggyBank,
  TrendingUp,
  CreditCard,
  Receipt,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

const goals = [
  {
    title: "Saving",
    description: "Emergency fund, FD, RD & savings accounts",
    icon: PiggyBank,
  },
  {
    title: "Investing",
    description: "SIP, Mutual Funds, Stocks & Gold",
    icon: TrendingUp,
  },
  {
    title: "Budgeting",
    description: "Control your monthly expenses",
    icon: Wallet,
  },
  {
    title: "Credit Cards",
    description: "Build credit the smart way",
    icon: CreditCard,
  },
  {
    title: "Taxes",
    description: "Income Tax made simple",
    icon: Receipt,
  },
  {
    title: "Insurance",
    description: "Health & Life insurance basics",
    icon: ShieldCheck,
  },
];

export default function ChooseGoal() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Start Here"
          title="Choose Your Financial Goal"
          subtitle="Everyone starts somewhere. Pick a topic and begin your journey."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {goals.map((goal) => {
            const Icon = goal.icon;

            return (
              <button
                key={goal.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {goal.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {goal.description}
                </p>
              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
}