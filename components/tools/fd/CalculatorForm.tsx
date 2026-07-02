import Slider from "@/components/ui/Slider";

type Props = {
  principal: number;
  years: number;
  rate: number;

  setPrincipal: (n: number) => void;
  setYears: (n: number) => void;
  setRate: (n: number) => void;
};

export default function CalculatorForm({
  principal,
  years,
  rate,
  setPrincipal,
  setYears,
  setRate,
}: Props) {
  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        FD Details
      </h2>

      <p className="mt-2 text-gray-500">
        Adjust your investment details.
      </p>

      <div className="mt-10 space-y-10">

        <Slider
          label="Investment Amount"
          value={principal}
          min={1000}
          max={10000000}
          step={1000}
          prefix="₹"
          onChange={setPrincipal}
        />

        <Slider
          label="Investment Period"
          value={years}
          min={1}
          max={20}
          suffix=" Years"
          onChange={setYears}
        />

        <Slider
          label="Interest Rate"
          value={rate}
          min={1}
          max={12}
          step={0.1}
          suffix="%"
          onChange={setRate}
        />

      </div>

    </div>
  );
}