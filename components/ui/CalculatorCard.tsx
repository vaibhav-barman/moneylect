import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CalculatorCard({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-[32px]
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl
    "
    >
      {children}
    </div>
  );
}