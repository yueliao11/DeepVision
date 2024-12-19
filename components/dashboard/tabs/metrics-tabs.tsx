"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TradingMetrics } from "./trading-metrics";
import { GovernanceMetrics } from "./governance-metrics";
import { MarketMetrics } from "./market-metrics";

export function MetricsTabs() {
  return (
    <Tabs defaultValue="trading" className="space-y-4">
      <TabsList className="bg-secondary/50 backdrop-blur-sm">
        <TabsTrigger value="trading">Trading Activity</TabsTrigger>
        <TabsTrigger value="governance">Governance & Staking</TabsTrigger>
        <TabsTrigger value="market">Market Analysis</TabsTrigger>
      </TabsList>

      <TabsContent value="trading" className="space-y-4">
        <TradingMetrics />
      </TabsContent>

      <TabsContent value="governance" className="space-y-4">
        <GovernanceMetrics />
      </TabsContent>

      <TabsContent value="market" className="space-y-4">
        <MarketMetrics />
      </TabsContent>
    </Tabs>
  );
}