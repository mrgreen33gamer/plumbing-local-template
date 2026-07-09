import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Insights | ClearFlow Plumbing Blog',
  description:
    'Plumbing safety tips, panel upgrade guides, and EV charger advice for Waco and Central Texas homeowners from ClearFlow Plumbing.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Plumbing Tips & Insights | ClearFlow Plumbing Blog',
    description: 'Practical plumbing guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'ClearFlow Plumbing',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
