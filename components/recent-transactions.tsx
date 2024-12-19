"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "1",
    time: "2024-03-20 14:23:01",
    type: "Buy",
    amount: "1,234.56",
    price: "0.45",
    from: "0x1234...5678",
    to: "0x8765...4321",
  },
  {
    id: "2",
    time: "2024-03-20 14:22:45",
    type: "Sell",
    amount: "2,345.67",
    price: "0.44",
    from: "0x2345...6789",
    to: "0x9876...5432",
  },
  // Add more mock transactions as needed
];

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>{tx.time}</TableCell>
            <TableCell className={tx.type === "Buy" ? "text-green-600" : "text-red-600"}>
              {tx.type}
            </TableCell>
            <TableCell>{tx.amount}</TableCell>
            <TableCell>${tx.price}</TableCell>
            <TableCell className="font-mono">{tx.from}</TableCell>
            <TableCell className="font-mono">{tx.to}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}