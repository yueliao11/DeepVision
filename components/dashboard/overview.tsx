"use client";

import { mockVolumeData } from "@/lib/data/mock-data";
import { Card } from "@/components/ui/card";
import { VolumeChart } from "./charts/volume-chart";

export function Overview() {
  return (
    <Card className="col-span-4">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Trading Volume Overview</h3>
        </div>
        <VolumeChart data={mockVolumeData} />
      </div>
    </Card>
  );
}