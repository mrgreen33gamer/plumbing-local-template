import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = `${BASE_URL}/projects`;

export const metadata: Metadata = {
  title: "Plumbing Projects & Before/After Gallery | ClearFlow Plumbing Waco TX",
  description:
    "See real ClearFlow Plumbing jobs across Central Texas — emergency repairs, water heaters, drain cleaning, leak detection, sewer lines, and fixture installs with before/after results.",
  alternates: { canonical: url },
  openGraph: {
    title: "Plumbing Projects | ClearFlow Plumbing",
    description: "Before/after gallery of real plumbing jobs across Waco and Central Texas.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
