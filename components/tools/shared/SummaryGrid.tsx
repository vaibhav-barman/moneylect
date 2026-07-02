import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SummaryGrid({
  children,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {children}
    </div>
  );
}