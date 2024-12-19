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

export function MarketCapitalization() {
  const marketCapData = [
    { date: "Jan", value: 100000000 },
    { date: "Feb", value: 120000000 },
    { date: "Mar", value: 115000000 },
    { date: "Apr", value: 140000000 },
    { date: "May", value: 160000000 },
    { date: "Jun", value: 180000000 },
  ];

  const comparisonData = [
    { platform: "Platform A", value: 180 },
    { platform: "Platform B", value: 150 },
    { platform: "Our Platform", value: 140 },
    { platform: "Platform C", value: 120 },
    { platform: "Platform D", value: 100 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Market Capitalization</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Market Cap</p>
            <h4 className="text-2xl font-bold">$180M</h4>
            <p className="text-sm text-green-500">+12.5% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Market Rank</p>
            <h4 className="text-2xl font-bold">#3</h4>
            <p className="text-sm text-green-500">+1 position</p>
          </div>
        </div>

        <Tabs defaultValue="trend" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="trend">Trend</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trend">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={marketCapData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="date" />
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
                <span className="font-medium">+12.5% monthly</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ATH</span>
                <span className="font-medium">$185M</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={comparisonData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="platform" />
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
                <span className="text-muted-foreground">Market Leader</span>
                <span className="font-medium">Platform A ($180M)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Market Share</span>
                <span className="font-medium">20.3%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
