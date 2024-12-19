"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  ChartBar,
  ChartPie,
  ChartGrid,
} from "@/components/ui/chart";
import { ResponsiveContainer } from "recharts";

export function LiquidityMetrics() {
  const distributionData = [
    { name: "Top 10%", value: 45 },
    { name: "Next 20%", value: 30 },
    { name: "Rest 70%", value: 25 },
  ];

  const yieldData = [
    { name: "24h", value: 15.2 },
    { name: "7d", value: 14.8 },
    { name: "30d", value: 16.5 },
    { name: "90d", value: 15.9 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Liquidity Overview</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Liquidity</p>
            <h4 className="text-2xl font-bold">$5.8M</h4>
            <p className="text-sm text-green-500">+3.2% vs last week</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active Providers</p>
            <h4 className="text-2xl font-bold">127</h4>
            <p className="text-sm text-green-500">+5 new this week</p>
          </div>
        </div>

        <Tabs defaultValue="distribution" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="yield">Yield</TabsTrigger>
          </TabsList>
          
          <TabsContent value="distribution">
            <div className="h-[200px]">
              <ChartContainer
                config={{
                  value: {
                    label: "Distribution",
                    theme: {
                      light: "var(--theme-primary)",
                      dark: "var(--theme-primary)",
                    },
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ChartPie
                    data={distributionData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  />
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Top Provider</span>
                <span className="font-medium">$580K (10%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average Provider</span>
                <span className="font-medium">$45.7K</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="yield">
            <div className="h-[200px]">
              <ChartContainer
                config={{
                  value: {
                    label: "APY %",
                    theme: {
                      light: "var(--theme-primary)",
                      dark: "var(--theme-primary)",
                    },
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ChartGrid />
                  <ChartXAxis dataKey="name" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartBar
                    data={yieldData}
                    dataKey="value"
                    radius={[4, 4, 0, 0]}
                  />
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current APY</span>
                <span className="font-medium">15.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">30d Average</span>
                <span className="font-medium">16.5%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
