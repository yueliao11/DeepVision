"use client";

import { Avatar } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const traders = [
  {
    id: "1",
    address: "0x1234...5678",
    volume: "5,234,567",
    trades: 145,
    profitLoss: "+12.45%",
  },
  {
    id: "2",
    address: "0x2345...6789",
    volume: "4,123,456",
    trades: 123,
    profitLoss: "+8.32%",
  },
  {
    id: "3",
    address: "0x3456...7890",
    volume: "3,234,567",
    trades: 98,
    profitLoss: "-2.14%",
  },
];

export function TopTraders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Trader</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Trades</TableHead>
          <TableHead>P/L</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {traders.map((trader) => (
          <TableRow key={trader.id}>
            <TableCell className="font-mono">{trader.address}</TableCell>
            <TableCell>${trader.volume}</TableCell>
            <TableCell>{trader.trades}</TableCell>
            <TableCell className={
              trader.profitLoss.startsWith("+") ? "text-green-600" : "text-red-600"
            }>
              {trader.profitLoss}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}