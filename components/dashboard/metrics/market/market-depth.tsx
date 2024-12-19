"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
  ChartGrid,
  ChartComposed,
} from "@/components/ui/recharts";

export function MarketDepth() {
  const depthData = [
    { price: 95, buy: 100000, sell: 0 },
    { price: 97, buy: 150000, sell: 0 },
    { price: 99, buy: 200000, sell: 0 },
    { price: 100, buy: 250000, sell: 250000 },
    { price: 101, buy: 0, sell: 200000 },
    { price: 103, buy: 0, sell: 150000 },
    { price: 105, buy: 0, sell: 100000 },
  ];

  const liquidityData = [
    { price: 95, value: 100000 },
    { price: 97, value: 150000 },
    { price: 99, value: 200000 },
    { price: 100, value: 500000 },
    { price: 101, value: 200000 },
    { price: 103, value: 150000 },
    { price: 105, value: 100000 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Market Depth</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Liquidity</p>
            <h4 className="text-2xl font-bold">$1.4M</h4>
            <p className="text-sm text-green-500">+5.2% vs last week</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Spread</p>
            <h4 className="text-2xl font-bold">0.15%</h4>
            <p className="text-sm text-green-500">-0.02% vs avg</p>
          </div>
        </div>

        <Tabs defaultValue="depth" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="depth">Order Book</TabsTrigger>
            <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="depth">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={depthData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="price" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartArea
                    dataKey="buy"
                    stroke="var(--theme-success)"
                    fill="var(--theme-success)"
                    fillOpacity={0.2}
                  />
                  <ChartArea
                    dataKey="sell"
                    stroke="var(--theme-danger)"
                    fill="var(--theme-danger)"
                    fillOpacity={0.2}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Buy Orders</span>
                <span className="font-medium">$700K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sell Orders</span>
                <span className="font-medium">$700K</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="liquidity">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={liquidityData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="price" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartArea
                    dataKey="value"
                    stroke="var(--theme-primary)"
                    fill="var(--theme-primary)"
                    fillOpacity={0.2}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Peak Liquidity</span>
                <span className="font-medium">$500K at $100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Liquidity</span>
                <span className="font-medium">$200K per level</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
