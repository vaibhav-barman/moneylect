import ResultCard from "./ResultCard";

type Props = {
  invested: number;
  returns: number;
  total: number;
};

export default function CalculatorResult({
  invested,
  returns,
  total,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">

      <ResultCard
        title="Invested"
        value={`₹${invested.toLocaleString("en-IN")}`}
        color="text-blue-600"
      />

      <ResultCard
        title="Returns"
        value={`₹${returns.toLocaleString("en-IN")}`}
        color="text-emerald-600"
      />

      <ResultCard
        title="Wealth"
        value={`₹${total.toLocaleString("en-IN")}`}
        color="text-purple-600"
      />

    </div>
  );
}