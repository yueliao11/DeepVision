"use client";

import { Card } from "@/components/ui/card";
import { mockTransactions } from "@/lib/data/mock-data";
import { formatCurrency, formatAddress } from "@/lib/utils/format";
import { DataTable } from "./tables/data-table";
import { Transaction } from "@/lib/types/dashboard";

const columns = [
  { header: "Time", accessor: "time" as const },
  { 
    header: "Type", 
    accessor: "type" as const,
    cell: (value: string) => (
      <span className={value === "Buy" ? "text-green-600" : "text-red-600"}>
        {value}
      </span>
    )
  },
  { 
    header: "Amount", 
    accessor: "amount" as const,
    cell: (value: string) => formatCurrency(value)
  },
  { 
    header: "Price", 
    accessor: "price" as const,
    cell: (value: string) => formatCurrency(value)
  },
  { 
    header: "From", 
    accessor: "from" as const,
    cell: (value: string) => (
      <span className="font-mono">{formatAddress(value)}</span>
    )
  },
  { 
    header: "To", 
    accessor: "to" as const,
    cell: (value: string) => (
      <span className="font-mono">{formatAddress(value)}</span>
    )
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
        <DataTable<Transaction> 
          data={mockTransactions} 
          columns={columns} 
        />
      </div>
    </Card>
  );
}