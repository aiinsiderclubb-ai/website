"use client";

import { useEffect, useState } from "react";
import { siteStats } from "@landing/data/content";

export interface TelegramStats {
  members: number;
  formatted: string;
  graduates: number;
  graduatesFormatted: string;
  source: "telegram" | "fallback";
}

const fallbackStats: TelegramStats = {
  members: siteStats.communityMembers,
  formatted: siteStats.communityMembersLabel,
  graduates: siteStats.graduates,
  graduatesFormatted: siteStats.graduatesLabel,
  source: "fallback",
};

export function useTelegramStats() {
  const [stats, setStats] = useState<TelegramStats>(fallbackStats);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/telegram/stats")
      .then((res) => (res.ok ? res.json() : fallbackStats))
      .then((data: TelegramStats) => {
        if (!cancelled) setStats({ ...fallbackStats, ...data });
      })
      .catch(() => {
        if (!cancelled) setStats(fallbackStats);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
}
