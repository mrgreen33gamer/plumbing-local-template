import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/industries/restaurants-hospitality';

export const metadata: Metadata = {
  title: "Restaurant Plumbing Waco TX | Grease Lines & Commercial | ClearFlow",
  description: "Restaurant and hospitality plumbing in Waco TX — grease line cleaning, commercial fixtures, emergency repairs after hours. Licensed Master Plumber.",
  alternates: { canonical: url },
  openGraph: {
    title: "Restaurant Plumbing Waco TX | Grease Lines & Commercial | ClearFlow",
    description: "Restaurant and hospitality plumbing in Waco TX — grease line cleaning, commercial fixtures, emergency repairs after hours. Licensed Master Plumber.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
