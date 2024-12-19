"use client";

import { XAxis } from "recharts";

interface ChartXAxisProps {
  dataKey: string;
}

export function ChartXAxis({ dataKey }: ChartXAxisProps) {
  return (
    <XAxis
      dataKey={dataKey}
      stroke="hsl(var(--muted-foreground))"
      fontSize={12}
      tickLine={false}
      axisLine={false}
      padding={{ left: 10, right: 10 }}
    />
  );
}