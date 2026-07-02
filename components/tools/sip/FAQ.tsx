import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What is SIP?",
    answer:
      "SIP stands for Systematic Investment Plan. It allows you to invest a fixed amount every month into mutual funds.",
  },

  {
    question: "Is SIP safe?",
    answer:
      "SIP invests in market-linked mutual funds. It reduces timing risk through regular investing, but returns are not guaranteed.",
  },

  {
    question: "Can I stop my SIP?",
    answer:
      "Yes. SIPs are flexible and can usually be stopped, paused, or modified through your investment platform.",
  },

  {
    question: "What return should I assume?",
    answer:
      "Many long-term equity mutual fund examples use around 10–12% for illustration, but actual returns vary.",
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