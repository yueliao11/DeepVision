"use client";

import { Grid } from "@/components/ui/grid";
import { GovernanceVoting } from "../metrics/governance/governance-voting";
import { StakingMetrics } from "../metrics/governance/staking-metrics";
import { MarketMakerIncentives } from "../metrics/governance/market-maker-incentives";

export function GovernanceMetrics() {
  return (
    <div className="space-y-4">
      <Grid className="gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <GovernanceVoting />
        <StakingMetrics />
        <MarketMakerIncentives />
      </Grid>
    </div>
  );
}