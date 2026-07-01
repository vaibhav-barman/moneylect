import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Stats from "@/components/home/Stats";
import HeroIllustration from "@/components/hero/HeroIllustration";
import HeroSocialProof from "@/components/home/HeroSocialProof";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">

      <div className="absolute inset-0">

        <div className="absolute -top-44 right-0 h-[650px] w-[650px] rounded-full bg-emerald-100 opacity-40 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-blue-100 opacity-30 blur-[120px]" />

      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 xl:gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <Badge>
              🇮🇳 Built for Indian Students & Young Professionals
            </Badge>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-7xl">
              Master Personal Finance
              <br />
              Before Your{" "}
              <span className="text-emerald-600">
                First Salary.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
              Step-by-step guides on saving, investing,
              budgeting, taxes, credit cards and more.
              Everything you need to build wealth and
              financial freedom.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

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

            <div className="mt-10">
              <Stats />
              <HeroSocialProof />
            </div>

          </div>

          {/* RIGHT SIDE */}

          <HeroIllustration />

        </div>
      </div>
    </section>
  );
}