import Slider from "@/components/ui/Slider";

type Props = {
  monthlyInvestment: number;
  years: number;
  rate: number;

  setMonthlyInvestment: (n: number) => void;
  setYears: (n: number) => void;
  setRate: (n: number) => void;
};

export default function CalculatorForm({
  monthlyInvestment,
  years,
  rate,
  setMonthlyInvestment,
  setYears,
  setRate,
}: Props) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-gray-900">
        Investment Details
      </h2>

      <p className="mt-2 text-gray-500">
        Adjust the values below to estimate your future SIP returns.
      </p>

      <div className="mt-10 space-y-10">

        <Slider
          label="Monthly SIP"
          value={monthlyInvestment}
          min={500}
          max={100000}
          step={500}
          prefix="₹"
          onChange={setMonthlyInvestment}
        />

        <Slider
          label="Investment Period"
          value={years}
          min={1}
          max={40}
          suffix=" Years"
          onChange={setYears}
        />

        <Slider
          label="Expected Return"
          value={rate}
          min={1}
          max={20}
          suffix="%"
          onChange={setRate}
        />

      </div>

    </div>
  );
}