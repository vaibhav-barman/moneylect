import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What is PPF?",
    answer: "PPF (Public Provident Fund) is a government-backed long-term savings scheme offering tax benefits and guaranteed returns.",
  },
  {
    question: "What is the lock-in period?",
    answer: "The PPF account has a mandatory lock-in period of 15 years.",
  },
  {
    question: "Is PPF tax free?",
    answer: "Yes. Investment, interest earned and maturity amount are tax-free under current tax rules.",
  },
  {
    question: "Can I extend my PPF account?",
    answer: "Yes. After 15 years you can extend it in blocks of 5 years.",
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