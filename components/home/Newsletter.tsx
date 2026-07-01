import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-br from-emerald-600 to-emerald-700 px-12 py-20 text-center shadow-2xl">

        <p className="font-semibold uppercase tracking-widest text-emerald-100">
          WEEKLY FINANCE LESSONS
        </p>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Become Better With Money Every Week.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-emerald-100">
          Join thousands of learners receiving simple finance lessons,
          investing tips and practical money advice every week.
        </p>

        <div className="mt-12 flex justify-center">

          <Button href="#">
            Join Free Newsletter
          </Button>

        </div>

      </div>

    </section>
  );
}