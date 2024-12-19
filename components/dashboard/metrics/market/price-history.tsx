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
  ChartBar,
  ChartGrid,
  ChartComposed,
} from "@/components/ui/recharts";

export function PriceHistory() {
  const priceData = [
    { time: "09:00", price: 100, volume: 1000 },
    { time: "10:00", price: 102, volume: 1200 },
    { time: "11:00", price: 101, volume: 800 },
    { time: "12:00", price: 103, volume: 1500 },
    { time: "13:00", price: 102, volume: 1100 },
    { time: "14:00", price: 104, volume: 1300 },
  ];

  const volatilityData = [
    { date: "Mon", value: 2.5 },
    { date: "Tue", value: 3.1 },
    { date: "Wed", value: 2.8 },
    { date: "Thu", value: 3.4 },
    { date: "Fri", value: 2.9 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Price History</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Current Price</p>
            <h4 className="text-2xl font-bold">$104.00</h4>
            <p className="text-sm text-green-500">+4.0% today</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">24h Volume</p>
            <h4 className="text-2xl font-bold">$1.2M</h4>
            <p className="text-sm text-green-500">+15% vs avg</p>
          </div>
        </div>

        <Tabs defaultValue="price" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="price">Price</TabsTrigger>
            <TabsTrigger value="volatility">Volatility</TabsTrigger>
          </TabsList>
          
          <TabsContent value="price">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={priceData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="time" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartArea
                    dataKey="volume"
                    strokeWidth={0}
                    fill="var(--theme-muted)"
                    fillOpacity={0.1}
                  />
                  <ChartLine
                    dataKey="price"
                    strokeWidth={2}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">24h High</span>
                <span className="font-medium">$104.50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">24h Low</span>
                <span className="font-medium">$99.50</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="volatility">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={volatilityData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="date" />
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
                <span className="text-muted-foreground">Average</span>
                <span className="font-medium">2.94%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Peak</span>
                <span className="font-medium">3.4%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
