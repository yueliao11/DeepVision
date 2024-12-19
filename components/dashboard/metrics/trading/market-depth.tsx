"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  ChartLine,
  ChartArea,
  ChartGrid,
} from "@/components/ui/chart";
import { ResponsiveContainer } from "recharts";

export function MarketDepth() {
  const depthData = [
    { price: 90, buyVolume: 100, sellVolume: 0 },
    { price: 95, buyVolume: 150, sellVolume: 0 },
    { price: 100, buyVolume: 200, sellVolume: 200 },
    { price: 105, buyVolume: 0, sellVolume: 150 },
    { price: 110, buyVolume: 0, sellVolume: 100 },
  ];

  const priceData = [
    { time: "09:00", price: 100 },
    { time: "12:00", price: 102 },
    { time: "15:00", price: 101 },
    { time: "18:00", price: 103 },
    { time: "21:00", price: 102 },
    { time: "00:00", price: 104 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Market Depth</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Buy Orders</p>
            <h4 className="text-2xl font-bold">$2.3M</h4>
            <p className="text-sm text-green-500">45 active orders</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Sell Orders</p>
            <h4 className="text-2xl font-bold">$1.8M</h4>
            <p className="text-sm text-red-500">38 active orders</p>
          </div>
        </div>

        <Tabs defaultValue="depth" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="depth">Order Book</TabsTrigger>
            <TabsTrigger value="history">Price History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="depth">
            <div className="h-[200px]">
              <ChartContainer
                config={{
                  buyVolume: {
                    label: "Buy Volume",
                    theme: {
                      light: "var(--theme-success)",
                      dark: "var(--theme-success)",
                    },
                  },
                  sellVolume: {
                    label: "Sell Volume",
                    theme: {
                      light: "var(--theme-danger)",
                      dark: "var(--theme-danger)",
                    },
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ChartGrid />
                  <ChartXAxis dataKey="price" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartArea
                    data={depthData}
                    dataKey="buyVolume"
                    stroke="var(--theme-success)"
                    fill="var(--theme-success)"
                    fillOpacity={0.2}
                  />
                  <ChartArea
                    data={depthData}
                    dataKey="sellVolume"
                    stroke="var(--theme-danger)"
                    fill="var(--theme-danger)"
                    fillOpacity={0.2}
                  />
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Spread</span>
                <span className="font-medium">0.15%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">24h Volume</span>
                <span className="font-medium">$4.8M</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="h-[200px]">
              <ChartContainer
                config={{
                  price: {
                    label: "Price",
                    theme: {
                      light: "var(--theme-primary)",
                      dark: "var(--theme-primary)",
                    },
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ChartGrid />
                  <ChartXAxis dataKey="time" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartLine
                    data={priceData}
                    dataKey="price"
                    strokeWidth={2}
                  />
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">24h High</span>
                <span className="font-medium">$104.20</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">24h Low</span>
                <span className="font-medium">$99.80</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
