# ClearFlow Plumbing — Implementation Plan

**Goal:** Re-skin the forked `plumbing-local-template` codebase (now `plumbing-local-template`) into a complete ClearFlow Plumbing marketing site. Identity, services, industries, and page list are locked in `docs/superpowers/specs/2026-07-09-plumbing-local-design.md`.

**Method:** Sibling-reference pattern. Clone electrical-services-template / pressure-washing-template structures; only copy, data, and slugs change.

## Slug maps

**Services:** ac-repair→emergency-plumbing · heating→water-heater-repair-install · installation→fixture-installation · duct-cleaning→drain-cleaning · indoor-air-quality→leak-detection-repair · maintenance→sewer-line-repair. Delete city subpages.

**Industries:** automotive→property-management · manufacturing→restaurants-hospitality · oil-gas→multi-family-housing.

**Blogs:** heat-pump-vs-traditional-hvac-texas→tankless-vs-tank-water-heaters-texas · how-often-should-you-replace-hvac-filter→signs-you-need-drain-cleaning-waco-tx · signs-ac-needs-replacement-waco-tx→when-to-call-emergency-plumber-waco-tx.

## Tasks

1. Spec + plan docs (this file + design spec).
2. Brand tokens `globalVariables.scss` + hardcoded hex (themeColor, NextTopLoader, PulseLoader) → `#2563eb`.
3. Header / Footer / CookieBanner rebrand.
4. Root layout metadata + JSON-LD + robots / sitemap / llms / not-found / privacy / admin strings.
5. Shared PageComponents hardcoded HVAC (TrustBar, CTABanner, ProcessTimeline, FAQ, BlogPreviewGrid, forms, ServiceCardComponent, TechStack, etc.).
6. Homepage hero WelcomePage + homepage body `page.tsx`.
7. Service pages ×6 + services index; delete old HVAC dirs + city subpages.
8. Industries ×3 + index.
9. `reviews.ts` + `blog-posts.ts` + 3 blog routes; delete old HVAC blogs.
10. About / Contact / Service Areas.
11. Rebuild projects + BeforeAfter / CaseStudyGrid / HighlightedProject / InsuredBadge / ProjectCardGrid / AuthorBio for ClearFlow.
12. Final grep + `npm run typecheck`.

Commits: `brand:`, `content:`, `feat:`, `chore:`, `fix:` prefixes. Specific paths only.
