const faqs = [
  {
    q: "What is SIP?",
    a: "SIP stands for Systematic Investment Plan. It allows you to invest a fixed amount every month into mutual funds.",
  },

  {
    q: "Is SIP safe?",
    a: "SIP invests in market-linked mutual funds. It reduces timing risk through regular investing, but returns are not guaranteed.",
  },

  {
    q: "Can I stop my SIP?",
    a: "Yes. SIPs are flexible and can usually be stopped, paused, or modified through your investment platform.",
  },

  {
    q: "What return should I assume?",
    a: "Many long-term equity mutual fund examples use around 10–12% for illustration, but actual returns vary.",
  },
];

export default function FAQ() {
  return (

    <section className="mt-24">

      <h2 className="text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="mt-12 space-y-6">

        {faqs.map((faq) => (

          <div
            key={faq.q}
            className="rounded-3xl border border-gray-200 p-8"
          >

            <h3 className="text-xl font-bold">
              {faq.q}
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              {faq.a}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}