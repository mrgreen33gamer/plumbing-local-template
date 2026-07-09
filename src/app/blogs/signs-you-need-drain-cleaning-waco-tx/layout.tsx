import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/blogs/signs-you-need-drain-cleaning-waco-tx';

export const metadata: Metadata = {
  title: "7 Signs You Need Professional Drain Cleaning in Waco, TX",
  description: "Slow sinks, gurgling toilets, and recurring clogs are early warnings. Learn when DIY is enough — and when Central Texas homeowners should call a plumber.",
  alternates: { canonical: url },
  openGraph: {
    title: "7 Signs You Need Professional Drain Cleaning in Waco, TX",
    description: "Slow sinks, gurgling toilets, and recurring clogs are early warnings. Learn when DIY is enough — and when Central Texas homeowners should call a plumber.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
