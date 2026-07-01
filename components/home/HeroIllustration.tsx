import Dashboard from "./Dashboard";
import FloatingCard from "./FloatingCard";

export default function HeroIllustration() {
  return (
    <div className="relative hidden h-[620px] items-center justify-center lg:flex">

      {/* Background Glow */}

      <div className="absolute h-[520px] w-[520px] rounded-full bg-emerald-200 opacity-40 blur-[120px]" />

      {/* Dashboard */}

      <Dashboard />

      {/* Floating Cards */}

      <div className="absolute -left-10 top-6 animate-float">

        <FloatingCard
          title="Emergency Fund"
          value="₹1,50,000"
          subtitle="Goal Completed"
          icon="🛡️"
        />

      </div>

      <div
        className="absolute -left-2 bottom-10 animate-float"
        style={{ animationDelay: "1.5s" }}
      >

        <FloatingCard
          title="Monthly SIP"
          value="₹5,000"
          subtitle="Invested this month"
          icon="📈"
        />

      </div>

      <div
        className="absolute -right-10 top-8 animate-float"
        style={{ animationDelay: "3s" }}
      >

        <FloatingCard
          title="Net Worth"
          value="₹1,24,500"
          subtitle="+12.4%"
          icon="💼"
        />

      </div>

      <div
        className="absolute right-0 bottom-14 animate-float"
        style={{ animationDelay: "4.5s" }}
      >

        <FloatingCard
          title="Budget"
          value="72%"
          subtitle="On Track"
          icon="📊"
        />

      </div>

    </div>
  );
}