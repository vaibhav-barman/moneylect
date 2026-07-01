export default function Marquee() {
  const items = [
    "💰 Save Smarter",
    "📈 Invest Early",
    "💳 Master Credit",
    "🏦 Build Wealth",
    "🇮🇳 Made for Indian Students",
    "🚀 Financial Freedom",
  ];

  return (
    <section className="overflow-hidden bg-emerald-600 py-5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-10 text-lg font-bold uppercase tracking-wider text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}