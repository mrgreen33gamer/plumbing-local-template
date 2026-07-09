// libs/blog-posts.ts
// ClearFlow Plumbing — blog post index

export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'tankless-vs-tank-water-heaters-texas',
    title:    'Tankless vs. Tank Water Heaters: What Makes Sense for Texas Homes in 2026?',
    excerpt:  'Compare tankless and traditional tank water heaters for Central Texas homes — upfront cost, energy bills, recovery rates, and which option fits your family.',
    category: 'Water Heaters',
    date:     'March 12, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/water-heater.jpg',
    imageAlt: 'Tankless vs tank water heater comparison for Texas homes',
    featured: true,
  },
  {
    slug:     'signs-you-need-drain-cleaning-waco-tx',
    title:    '7 Signs You Need Professional Drain Cleaning in Waco, TX',
    excerpt:  'Slow sinks, gurgling toilets, and recurring clogs are early warnings. Learn when DIY is enough — and when Central Texas homeowners should call a plumber.',
    category: 'Drain Cleaning',
    date:     'February 18, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/drain-cleaning.jpg',
    imageAlt: 'Signs you need professional drain cleaning in Waco TX',
  },
  {
    slug:     'when-to-call-emergency-plumber-waco-tx',
    title:    'When to Call an Emergency Plumber in Waco, TX',
    excerpt:  'Burst pipes, sewage backups, and no hot water at midnight — know which plumbing problems can wait and which need same-day emergency response.',
    category: 'Emergency Plumbing',
    date:     'January 22, 2026',
    readTime: 5,
    imageSrc: '/pages/blogs/emergency-plumbing.jpg',
    imageAlt: 'When to call an emergency plumber in Waco Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }

export default ALL_POSTS;
