export default function ChartWidget() {
  return (
    <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">

      <svg
        viewBox="0 0 320 120"
        className="w-full"
      >

        <defs>

          <linearGradient
            id="lineGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >

            <stop
              offset="0%"
              stopColor="#34d399"
            />

            <stop
              offset="100%"
              stopColor="#10b981"
            />

          </linearGradient>

        </defs>

        <path
          d="
          M10 90
          C40 80 55 60 80 65
          S120 80 145 45
          S190 40 220 55
          S270 30 310 15
          "
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle
          cx="310"
          cy="15"
          r="5"
          fill="#10b981"
        />

      </svg>

    </div>
  );
}