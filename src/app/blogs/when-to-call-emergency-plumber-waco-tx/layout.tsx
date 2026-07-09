import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/blogs/when-to-call-emergency-plumber-waco-tx';

export const metadata: Metadata = {
  title: "When to Call an Emergency Plumber in Waco, TX",
  description: "Burst pipes, sewage backups, and no hot water at midnight — know which plumbing problems can wait and which need same-day emergency response.",
  alternates: { canonical: url },
  openGraph: {
    title: "When to Call an Emergency Plumber in Waco, TX",
    description: "Burst pipes, sewage backups, and no hot water at midnight — know which plumbing problems can wait and which need same-day emergency response.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
