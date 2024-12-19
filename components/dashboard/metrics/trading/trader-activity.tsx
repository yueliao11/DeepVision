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

export function TraderActivity() {
  const activityData = [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 150 },
    { name: "Wed", value: 180 },
    { name: "Thu", value: 140 },
    { name: "Fri", value: 160 },
    { name: "Sat", value: 130 },
    { name: "Sun", value: 110 },
  ];

  const distributionData = [
    { name: "$0-1K", value: 45 },
    { name: "$1K-10K", value: 30 },
    { name: "$10K-50K", value: 15 },
    { name: "$50K+", value: 10 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Trader Activity</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Active Traders</p>
            <h4 className="text-2xl font-bold">342</h4>
            <p className="text-sm text-green-500">+12% vs last week</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Avg. Trade Size</p>
            <h4 className="text-2xl font-bold">$2.8K</h4>
            <p className="text-sm text-green-500">+5% vs last week</p>
          </div>
        </div>

        <Tabs defaultValue="activity" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
          </TabsList>
          
          <TabsContent value="activity">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={activityData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="name" />
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
                <span className="text-muted-foreground">Peak Activity</span>
                <span className="font-medium">Wed 14:00 UTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekly Trades</span>
                <span className="font-medium">2,847</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="distribution">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={distributionData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="name" />
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
                <span className="text-muted-foreground">Top Trader Volume</span>
                <span className="font-medium">$158K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Median Trade Size</span>
                <span className="font-medium">$2.3K</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
