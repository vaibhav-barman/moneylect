export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">

      <h3 className="text-xl font-bold text-gray-900">
        Your Financial Dashboard
      </h3>

      <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-50">
        This Month
      </button>

    </div>
  );
}