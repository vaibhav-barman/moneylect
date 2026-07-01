import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white px-6">
      <section className="text-center">
        <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-600">
          MONEYLECT
        </p>

        <h1 className="mx-auto max-w-4xl text-6xl font-extrabold leading-tight text-gray-900">
          Master Personal Finance
          <br />
          Before Your First Salary.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-600">
          The easiest place for Indian students and young professionals
          to build lifelong financial confidence.
        </p>

        <div className="mt-12 flex justify-center gap-5">
            <Button href="/learn">
                Start Learning
            </Button>

            <Button
                href="/articles"
                variant="secondary"
            >
                Explore Articles
            </Button>
        </div>
      </section>
    </main>
  );
}