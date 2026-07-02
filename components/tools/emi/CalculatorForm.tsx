import Slider from "@/components/ui/Slider";
import { EMI_LIMITS } from "@/lib/constants/calculator";

type Props = {
  loanAmount: number;
  years: number;
  rate: number;

  setLoanAmount: (n: number) => void;
  setYears: (n: number) => void;
  setRate: (n: number) => void;
};

export default function CalculatorForm({
  loanAmount,
  years,
  rate,
  setLoanAmount,
  setYears,
  setRate,
}: Props) {
  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Loan Details
      </h2>

      <p className="mt-2 text-gray-500">
        Adjust the values below.
      </p>

      <div className="mt-10 space-y-10">

        <Slider
          label="Loan Amount"
          value={loanAmount}
          min={EMI_LIMITS.MIN}
          max={EMI_LIMITS.MAX}
          step={EMI_LIMITS.STEP}
          prefix="₹"
          onChange={setLoanAmount}
        />

        <Slider
          label="Loan Tenure"
          value={years}
          min={1}
          max={30}
          suffix=" Years"
          onChange={setYears}
        />

        <Slider
          label="Interest Rate"
          value={rate}
          min={1}
          max={20}
          step={0.1}
          suffix="%"
          onChange={setRate}
        />

      </div>

    </div>
  );
}