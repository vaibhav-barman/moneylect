import ResultCard from "../sip/ResultCard";

type Props = {
  emi: number;
  interest: number;
  total: number;
};

export default function CalculatorResult({
  emi,
  interest,
  total,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      <ResultCard
        title="Monthly EMI"
        value={`₹${emi.toLocaleString("en-IN")}`}
        color="text-blue-600"
      />

      <ResultCard
        title="Total Interest"
        value={`₹${interest.toLocaleString("en-IN")}`}
        color="text-emerald-600"
      />

      <ResultCard
        title="Total Payment"
        value={`₹${total.toLocaleString("en-IN")}`}
        color="text-purple-600"
      />

    </div>
  );
}