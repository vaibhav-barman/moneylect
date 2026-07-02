import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ToolSection({
  children,
}: Props) {
  return (
    <section className="mt-24">
      {children}
    </section>
  );
}