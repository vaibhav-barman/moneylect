import {
  ArrowDownCircle,
  ArrowUpCircle,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

export default function StatsWidget() {
  return (
    <div className="mt-8 space-y-5">

      <Row
        icon={<ArrowDownCircle size={20} className="text-emerald-600" />}
        title="Income"
        value="₹45,000"
        color="text-emerald-600"
      />

      <Row
        icon={<ArrowUpCircle size={20} className="text-red-500" />}
        title="Expenses"
        value="₹18,600"
        color="text-red-500"
      />

      <Row
        icon={<PiggyBank size={20} className="text-blue-600" />}
        title="Savings"
        value="₹12,500"
        color="text-blue-600"
      />

      <Row
        icon={<TrendingUp size={20} className="text-purple-600" />}
        title="Investments"
        value="₹53,400"
        color="text-purple-600"
      />

    </div>
  );
}

type RowProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
};

function Row({
  icon,
  title,
  value,
  color,
}: RowProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        {icon}

        <span className="font-medium text-gray-700">
          {title}
        </span>

      </div>

      <span className={`font-semibold ${color}`}>
        {value}
      </span>

    </div>
  );
}