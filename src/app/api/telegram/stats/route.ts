import { NextResponse } from "next/server";
import { siteStats } from "@landing/data/content";

export const revalidate = 300;

function formatCount(value: number) {
  return `${value.toLocaleString()}+`;
}

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({
      members: siteStats.communityMembers,
      formatted: siteStats.communityMembersLabel,
      graduates: siteStats.graduates,
      graduatesFormatted: siteStats.graduatesLabel,
      source: "fallback",
    });
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=${encodeURIComponent(chatId)}`, {
      next: { revalidate },
    });
    const payload = await response.json();

    if (!response.ok || !payload.ok || typeof payload.result !== "number") {
      throw new Error("Telegram member count unavailable");
    }

    return NextResponse.json({
      members: payload.result,
      formatted: formatCount(payload.result),
      graduates: siteStats.graduates,
      graduatesFormatted: siteStats.graduatesLabel,
      source: "telegram",
    });
  } catch {
    return NextResponse.json({
      members: siteStats.communityMembers,
      formatted: siteStats.communityMembersLabel,
      graduates: siteStats.graduates,
      graduatesFormatted: siteStats.graduatesLabel,
      source: "fallback",
    });
  }
}
