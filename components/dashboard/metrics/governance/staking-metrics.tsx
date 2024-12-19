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

export function StakingMetrics() {
  const stakingData = [
    { time: "Jan", value: 1000000 },
    { time: "Feb", value: 1200000 },
    { time: "Mar", value: 1400000 },
    { time: "Apr", value: 1600000 },
    { time: "May", value: 1900000 },
    { time: "Jun", value: 2100000 },
  ];

  const rewardsData = [
    { time: "Week 1", value: 15.2 },
    { time: "Week 2", value: 14.8 },
    { time: "Week 3", value: 16.5 },
    { time: "Week 4", value: 15.9 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Staking Overview</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Staked</p>
            <h4 className="text-2xl font-bold">2.1M</h4>
            <p className="text-sm text-green-500">+10.5% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Staking Rate</p>
            <h4 className="text-2xl font-bold">42.5%</h4>
            <p className="text-sm text-green-500">+2.3% vs last month</p>
          </div>
        </div>

        <Tabs defaultValue="trend" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="trend">Trend</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trend">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={stakingData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="time" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartLine
                    dataKey="value"
                    strokeWidth={2}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Growth Rate</span>
                <span className="font-medium">+10.5% monthly</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Projected</span>
                <span className="font-medium">2.5M by next month</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rewards">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={rewardsData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="time" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartBar
                    dataKey="value"
                    radius={[4, 4, 0, 0]}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current APY</span>
                <span className="font-medium">15.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Rewards</span>
                <span className="font-medium">125,000 tokens</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
