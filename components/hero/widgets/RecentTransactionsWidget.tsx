export default function RecentTransactionsWidget() {
  const transactions = [
    {
      name: "Monthly SIP",
      amount: "- ₹5,000",
      color: "text-red-500",
    },
    {
      name: "Salary",
      amount: "+ ₹45,000",
      color: "text-emerald-600",
    },
    {
      name: "Rent",
      amount: "- ₹12,000",
      color: "text-red-500",
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

      <h4 className="font-semibold text-gray-900">
        Recent Activity
      </h4>

      <div className="mt-5 space-y-4">

        {transactions.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <span className="text-gray-600">
              {item.name}
            </span>

            <span className={`font-semibold ${item.color}`}>
              {item.amount}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}