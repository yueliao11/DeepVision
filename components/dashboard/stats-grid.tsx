"use client";

import { Activity, TrendingUp, Users, DollarSign } from "lucide-react";
import { StatsCard } from "./stats-card";

const statsData = [
  {
    title: "24h Volume",
    value: "$2.4M",
    icon: TrendingUp,
    trend: "+12.5%",
    trendUp: true,
  },
  {
    title: "Active Liquidity",
    value: "$5.8M",
    icon: DollarSign,
    trend: "+5.2%",
    trendUp: true,
  },
  {
    title: "Active Traders",
    value: "1,234",
    icon: Users,
    trend: "-2.1%",
    trendUp: false,
  },
  {
    title: "Market Cap",
    value: "$12.5M",
    icon: Activity,
    trend: "+8.3%",
    trendUp: true,
  },
];

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <StatsCard
          key={stat.title}
          {...stat}
        />
      ))}
    </div>
  );
}