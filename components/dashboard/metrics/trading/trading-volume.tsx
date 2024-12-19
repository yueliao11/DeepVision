"use client";

import { Card } from "@/components/ui/card";
import { VolumeChart } from "../../charts/volume-chart";
import { mockVolumeData } from "@/lib/data/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TradingVolume() {
  return (
    <Card className="col-span-1">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Trading Volume</h3>
        <Tabs defaultValue="24h" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="24h">24h</TabsTrigger>
            <TabsTrigger value="7d">7d</TabsTrigger>
            <TabsTrigger value="30d">30d</TabsTrigger>
          </TabsList>
          <TabsContent value="24h">
            <VolumeChart data={mockVolumeData.slice(-24)} />
          </TabsContent>
          <TabsContent value="7d">
            <VolumeChart data={mockVolumeData.slice(-7)} />
          </TabsContent>
          <TabsContent value="30d">
            <VolumeChart data={mockVolumeData} />
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}