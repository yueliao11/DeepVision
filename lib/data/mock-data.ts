import { Transaction, Trader, VolumeData } from "../types/dashboard";

export const mockTransactions: Transaction[] = [
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
];

export const mockTraders: Trader[] = [
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

export const mockVolumeData: VolumeData[] = Array.from({ length: 12 }, (_, i) => ({
  name: new Date(2024, i).toLocaleString('default', { month: 'short' }),
  total: Math.floor(Math.random() * 5000) + 1000,
}));