export default function SavingsGoalWidget() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <h4 className="font-semibold text-gray-900">
          Emergency Fund
        </h4>

        <span className="text-sm font-medium text-emerald-600">
          75%
        </span>

      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">

        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />

      </div>

      <div className="mt-4 flex justify-between text-sm">

        <span className="text-gray-500">
          ₹1,50,000
        </span>

        <span className="font-semibold">
          Goal ₹2,00,000
        </span>

      </div>

    </div>
  );
}