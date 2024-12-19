"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  ChartLine,
  ChartBar,
  ChartGrid,
  ChartComposed,
} from "@/components/ui/recharts";
import { ResponsiveContainer } from "recharts";

export function MarketMakerIncentives() {
  const incentiveData = [
    { date: "Week 1", amount: 50000 },
    { date: "Week 2", amount: 55000 },
    { date: "Week 3", amount: 48000 },
    { date: "Week 4", amount: 52000 },
  ];

  const performanceData = [
    { maker: "MM1", volume: 1200000, rewards: 12000 },
    { maker: "MM2", volume: 800000, rewards: 8000 },
    { maker: "MM3", volume: 600000, rewards: 6000 },
    { maker: "MM4", volume: 400000, rewards: 4000 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Market Maker Incentives</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Incentives</p>
            <h4 className="text-2xl font-bold">205K</h4>
            <p className="text-sm text-green-500">Last 30 days</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active MMs</p>
            <h4 className="text-2xl font-bold">12</h4>
            <p className="text-sm text-green-500">+2 this month</p>
          </div>
        </div>

        <Tabs defaultValue="distribution" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="distribution">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={incentiveData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="date" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartLine
                    dataKey="amount"
                    strokeWidth={2}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekly Average</span>
                <span className="font-medium">51,250 tokens</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Distribution Rate</span>
                <span className="font-medium">98.5%</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={performanceData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="maker" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartBar
                    dataKey="rewards"
                    radius={[4, 4, 0, 0]}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Top Performer</span>
                <span className="font-medium">MM1 (12,000 tokens)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average Reward</span>
                <span className="font-medium">7,500 tokens</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
