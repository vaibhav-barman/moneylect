import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI stands for Equated Monthly Installment. It is the fixed monthly payment you make to repay your loan.",
  },

  {
    question: "How is EMI calculated?",
    answer:
      "EMI depends on the loan amount, interest rate and repayment tenure using the standard amortization formula.",
  },

  {
    question: "Can I reduce my EMI?",
    answer:
      "Yes. Increasing the tenure or getting a lower interest rate reduces your monthly EMI.",
  },

  {
    question: "Does prepayment reduce interest?",
    answer:
      "Yes. Making partial or full prepayments reduces the outstanding principal and the total interest paid.",
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