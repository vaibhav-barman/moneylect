import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What is a Fixed Deposit (FD)?",
    answer:
      "A Fixed Deposit (FD) is an investment where you deposit a lump sum with a bank or financial institution for a fixed period and earn a fixed rate of interest.",
  },
  {
    question: "How is FD interest calculated?",
    answer:
      "FD interest is calculated using compound interest. The maturity amount depends on the principal amount, interest rate, tenure and compounding frequency.",
  },
  {
    question: "Is FD interest taxable?",
    answer:
      "Yes. Interest earned from Fixed Deposits is taxable according to your income tax slab.",
  },
  {
    question: "Can I withdraw my FD before maturity?",
    answer:
      "Yes. Most banks allow premature withdrawal, but they may charge a penalty and offer a lower interest rate.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-24">

      <h2 className="text-center text-5xl font-black">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto mt-16 max-w-5xl space-y-5">

        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}

      </div>

    </section>
  );
}