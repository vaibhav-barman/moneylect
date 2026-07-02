import ResultCard from "../sip/ResultCard";

type Props = {
  invested: number;
  returns: number;
  maturity: number;
};

export default function CalculatorResult({
  invested,
  returns,
  maturity,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      <ResultCard
        title="Total Investment"
        value={`₹${invested.toLocaleString("en-IN")}`}
        color="text-blue-600"
      />

      <ResultCard
        title="Interest Earned"
        value={`₹${returns.toLocaleString("en-IN")}`}
        color="text-emerald-600"
      />

      <ResultCard
        title="Maturity Value"
        value={`₹${maturity.toLocaleString("en-IN")}`}
        color="text-purple-600"
      />

    </div>
  );
}