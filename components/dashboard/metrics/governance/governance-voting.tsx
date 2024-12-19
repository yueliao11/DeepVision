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
  ChartComposed,
  ChartPieContainer,
} from "@/components/ui/recharts";
import { ResponsiveContainer } from "recharts";

export function GovernanceVoting() {
  const votingData = [
    { proposal: "Proposal 1", votes: 75 },
    { proposal: "Proposal 2", votes: 60 },
    { proposal: "Proposal 3", votes: 85 },
    { proposal: "Proposal 4", votes: 45 },
  ];

  const participationData = [
    { name: "Technical", value: 40 },
    { name: "Financial", value: 30 },
    { name: "Community", value: 20 },
    { name: "Other", value: 10 },
  ];

  return (
    <Card className="col-span-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Governance Voting</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Active Proposals</p>
            <h4 className="text-2xl font-bold">4</h4>
            <p className="text-sm text-green-500">2 pending vote</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Voter Participation</p>
            <h4 className="text-2xl font-bold">65.8%</h4>
            <p className="text-sm text-green-500">+5.2% vs last month</p>
          </div>
        </div>

        <Tabs defaultValue="proposals" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="proposals">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartComposed data={votingData}>
                  <ChartGrid />
                  <ChartXAxis dataKey="proposal" />
                  <ChartYAxis />
                  <ChartTooltip />
                  <ChartBar
                    dataKey="votes"
                    radius={[4, 4, 0, 0]}
                  />
                </ChartComposed>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Latest Proposal</span>
                <span className="font-medium">Technical Update v2.1</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time Remaining</span>
                <span className="font-medium">2d 14h</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="categories">
            <div className="h-[200px]">
              <ChartContainer width="100%" height="100%">
                <ChartPieContainer>
                  <ChartPie
                    data={participationData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  />
                  <ChartTooltip />
                </ChartPieContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Most Active</span>
                <span className="font-medium">Technical Proposals</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Success Rate</span>
                <span className="font-medium">75%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
