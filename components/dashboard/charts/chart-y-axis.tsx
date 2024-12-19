"use client";

import { YAxis } from "recharts";

interface ChartYAxisProps {
  formatter?: (value: number) => string;
}

export function ChartYAxis({ formatter }: ChartYAxisProps) {
  return (
    <YAxis
      stroke="hsl(var(--muted-foreground))"
      fontSize={12}
      tickLine={false}
      axisLine={false}
      tickFormatter={formatter}
      width={80}
    />
  );
}