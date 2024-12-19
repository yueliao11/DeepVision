"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartXAxis } from "./chart-x-axis";
import { ChartYAxis } from "./chart-y-axis";
import { VolumeData } from "@/lib/types/dashboard";

interface VolumeChartProps {
  data: VolumeData[];
}

export function VolumeChart({ data }: VolumeChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <ChartXAxis dataKey="name" />
        <ChartYAxis formatter={(value: number) => `$${value}`} />
        <Tooltip 
          formatter={(value: number) => [`$${value}`, 'Volume']}
          labelFormatter={(label) => `Month: ${label}`}
          contentStyle={{
            backgroundColor: 'hsl(var(--secondary))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          itemStyle={{
            color: 'hsl(var(--foreground))',
          }}
          labelStyle={{
            color: 'hsl(var(--foreground))',
          }}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}