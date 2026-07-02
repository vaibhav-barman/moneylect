import Link from "next/link";

export default function LearnMore() {
  return (
    <section className="mt-24 rounded-[36px] bg-gradient-to-r from-emerald-600 to-emerald-500 p-14 text-white">

      <h2 className="text-5xl font-bold">
        New to SIP Investing?
      </h2>

      <p className="mt-6 max-w-2xl text-xl leading-9 text-emerald-100">
        Learn what SIP is, how it works, mistakes beginners make and how to start investing with as little as ₹500/month.
      </p>

      <Link
        href="/articles/what-is-sip"
        className="
        mt-10
        inline-flex
        rounded-full
        bg-white
        px-8
        py-4
        font-semibold
        text-emerald-700
      "
      >
        Read Complete Guide →
      </Link>

    </section>
  );
}