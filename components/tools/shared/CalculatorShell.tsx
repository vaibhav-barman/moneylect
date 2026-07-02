import { ReactNode } from "react";

type Props = {
  header: ReactNode;
  form: ReactNode;
  summary: ReactNode;
  chart: ReactNode;
  table: ReactNode;
  bottom?: ReactNode;
};

export default function CalculatorShell({
  header,
  form,
  summary,
  chart,
  table,
  bottom,
}: Props) {
  return (
    <div className="space-y-14">

      {header}

      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

        {form}

        <div className="space-y-8">

          {summary}

        </div>

      </div>

      {chart}

      {table}

      {bottom}

    </div>
  );
}