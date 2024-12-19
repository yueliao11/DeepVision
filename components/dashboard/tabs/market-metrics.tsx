"use client";

import { Grid } from "@/components/ui/grid";
import { MarketCapitalization } from "../metrics/market/market-capitalization";
import { PriceHistory } from "../metrics/market/price-history";
import { MarketDepth } from "../metrics/market/market-depth";

export function MarketMetrics() {
  return (
    <div className="space-y-4">
      <Grid className="gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MarketCapitalization />
        <PriceHistory />
        <MarketDepth />
      </Grid>
    </div>
  );
}