"use client";

import { Grid } from "@/components/ui/grid";
import { TradingVolume } from "../metrics/trading/trading-volume";
import { LiquidityProviders } from "../metrics/trading/liquidity-providers";
import { TraderActivity } from "../metrics/trading/trader-activity";
import { RecentTransactions } from "../recent-transactions";

export function TradingMetrics() {
  return (
    <div className="space-y-4">
      <Grid className="gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TradingVolume />
        <LiquidityProviders />
        <TraderActivity />
      </Grid>
      <RecentTransactions />
    </div>
  );
}