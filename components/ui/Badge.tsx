type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3">

      <span className="h-2 w-2 rounded-full bg-emerald-500" />

      <span className="text-sm font-semibold text-emerald-700">
        {children}
      </span>

    </div>
  );
}