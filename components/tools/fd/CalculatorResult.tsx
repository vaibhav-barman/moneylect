import ResultCard from "../sip/ResultCard";

type Props = {
  principal: number;
  interest: number;
  maturity: number;
};

export default function CalculatorResult({
  principal,
  interest,
  maturity,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      <ResultCard
        title="Investment"
        value={`₹${principal.toLocaleString("en-IN")}`}
        color="text-blue-600"
      />

      <ResultCard
        title="Interest Earned"
        value={`₹${interest.toLocaleString("en-IN")}`}
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