"use client";

import { StatsGrid } from "@/components/dashboard/stats-grid";
import { MetricsTabs } from "@/components/dashboard/tabs/metrics-tabs";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col gradient-bg">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <h2 className="text-xl font-bold tracking-tight">DeepBook Dashboard</h2>
          </div>
        </div>
      </header>
      
      <main className="flex-1 space-y-4 p-8 pt-6">
        <StatsGrid />
        <MetricsTabs />
      </main>
    </div>
  );
}