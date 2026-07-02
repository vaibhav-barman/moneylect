type Props = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
  onChange: (value: number) => void;
};

export default function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  prefix = "",
  onChange,
}: Props) {
  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">

        <span className="font-semibold text-gray-800">
          {label}
        </span>

        <span className="rounded-xl bg-emerald-50 px-4 py-2 font-bold text-emerald-700">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>

      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          h-2
          w-full
          cursor-pointer
          appearance-none
          rounded-full
          bg-gray-200
          accent-emerald-600
        "
      />

    </div>
  );
}

console.log("Slider loaded");