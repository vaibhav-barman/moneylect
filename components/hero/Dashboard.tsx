import DashboardHeader from "./widgets/DashboardHeader";
import BalanceWidget from "./widgets/BalanceWidget";
import ChartWidget from "./widgets/ChartWidget";
import StatsWidget from "./widgets/StatsWidget";
import SavingsGoalWidget from "./widgets/SavingsGoalWidget";
import RecentTransactionsWidget from "./widgets/RecentTransactionsWidget";

export default function Dashboard() {
  return (
    <div className="w-[500px] rounded-[36px] border border-gray-100 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-[0_30px_80px_rgba(16,185,129,0.18)] transition-all duration-500 hover:-translate-y-2 ">

      <DashboardHeader />

      <BalanceWidget />

      <ChartWidget />

      <StatsWidget />

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <SavingsGoalWidget />

        <RecentTransactionsWidget />

      </div>

    </div>
  );
}