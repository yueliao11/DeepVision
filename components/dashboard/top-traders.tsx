"use client";

import { Card } from "@/components/ui/card";
import { mockTraders } from "@/lib/data/mock-data";
import { formatCurrency, formatAddress } from "@/lib/utils/format";
import { DataTable } from "./tables/data-table";
import { Trader } from "@/lib/types/dashboard";

const columns = [
  { 
    header: "Trader", 
    accessor: "address" as const,
    cell: (value: string) => (
      <span className="font-mono">{formatAddress(value)}</span>
    )
  },
  { 
    header: "Volume", 
    accessor: "volume" as const,
    cell: (value: string) => formatCurrency(value)
  },
  { header: "Trades", accessor: "trades" as const },
  { 
    header: "P/L", 
    accessor: "profitLoss" as const,
    cell: (value: string) => (
      <span className={value.startsWith("+") ? "text-green-600" : "text-red-600"}>
        {value}
      </span>
    )
  },
];

export function TopTraders() {
  return (
    <Card className="col-span-3">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Top Traders</h3>
        </div>
        <DataTable<Trader> 
          data={mockTraders} 
          columns={columns} 
        />
      </div>
    </Card>
  );
}