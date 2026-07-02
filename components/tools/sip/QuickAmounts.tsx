type Props = {
  onSelect: (amount: number) => void;
};

const amounts = [
  1000,
  2500,
  5000,
  10000,
  20000,
  50000,
];

export default function QuickAmounts({
  onSelect,
}: Props) {
  return (
    <div className="mt-8">

      <p className="mb-4 font-semibold">
        Quick Amount
      </p>

      <div className="flex flex-wrap gap-3">

        {amounts.map((amount) => (

          <button
            key={amount}
            onClick={() => onSelect(amount)}
            className="
            rounded-full
            border
            border-gray-300
            bg-white
            px-5
            py-3
            font-medium
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-emerald-500
            hover:bg-emerald-50
            hover:text-emerald-700
            "
          >
            ₹{amount.toLocaleString()}
          </button>

        ))}

      </div>

    </div>
  );
}