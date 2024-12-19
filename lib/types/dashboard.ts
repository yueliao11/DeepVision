export interface Transaction {
  id: string;
  time: string;
  type: "Buy" | "Sell";
  amount: string;
  price: string;
  from: string;
  to: string;
}

export interface Trader {
  id: string;
  address: string;
  volume: string;
  trades: number;
  profitLoss: string;
}

export interface VolumeData {
  name: string;
  total: number;
}