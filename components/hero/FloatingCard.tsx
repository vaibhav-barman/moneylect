type FloatingCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon?: string;
};

export default function FloatingCard({
  title,
  value,
  subtitle,
  icon = "💰",
}: FloatingCardProps) {
  return (
    <div className="w-56 rounded-[28px] border border-white/50 bg-white/90 background-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]">

      <div className="flex items-center justify-between">

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-white text-lg">
          {icon}
        </div>

      </div>

      <h3 className="mt-5 text-4xl font-bold text-gray-900">
        {value}
      </h3>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
      </div>

      <p className="mt-3 text-sm font-semibold text-emerald-600">
        {subtitle}
      </p>

    </div>
  );
}