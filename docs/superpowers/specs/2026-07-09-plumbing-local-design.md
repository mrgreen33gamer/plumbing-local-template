# Plumbing Local Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from `plumbing-local-template` and re-skinned. This run forks into `plumbing-local-template` (marketplace slug: `plumbing-local`, listing name: **Plumbing Local**) for plumbing contractors: emergency CTA, service areas, and a before/after project gallery.

Catalog: Coming Soon listing for plumbing contractors with emergency CTA, service areas, before/after gallery.

Reference reskins:
- `electrical-services-template` (no city SEO pages; clean identity sweep)
- `pressure-washing-template` (projects page rebuild pattern)
- `pool-spa-services-template` (trade reskin playbook)

Unlike electrical, **KEEP and REBUILD** `src/app/projects/` plus BeforeAfter / CaseStudyGrid / HighlightedProject / InsuredBadge / ProjectCardGrid / AuthorBio for ClearFlow Plumbing (not Scott Apps agency portfolio).

## Business Identity (locked — use verbatim)

- **Name:** ClearFlow Plumbing
- **Tagline:** Central Texas's Trusted Plumbing Experts — Fast, Licensed, Guaranteed
- **Founded:** 2009 · **Owner:** Marcus Hale
- **HQ:** Waco, TX
- **Cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Phone:** (254) 732-9100 / `tel:+12547329100`
- **Email:** hello@clearflowplumbingtx.com
- **Domain:** clearflowplumbingtx.com
- **Address:** 1401 Franklin Ave, Waco, TX 76701
- **Credentials:** Licensed Master Plumber · TSBPE · Bonded & Insured
- **Guarantee:** 1-Year Workmanship Warranty + Same-Day Emergency Response
- **Social proof:** 4.9★ · 680+ reviews · "8,000+ plumbing jobs completed"
- **Accent:** deep blue `#2563eb` (primary); keep token **NAMES** in `globalVariables.scss`, swap **VALUES**; `$green` aliases point at new primary
- **NO per-city SEO subpages** — delete all `waco-tx` / `temple-tx` / `killeen-tx` under services
- **KEEP and REBUILD projects page** — before/after plumbing jobs are core

## Services (6)

| Old HVAC slug | New slug | Service |
|---|---|---|
| ac-repair | emergency-plumbing | Emergency Plumbing |
| heating | water-heater-repair-install | Water Heater Repair & Install |
| installation | fixture-installation | Fixture Installation |
| duct-cleaning | drain-cleaning | Drain Cleaning |
| indoor-air-quality | leak-detection-repair | Leak Detection & Repair |
| maintenance | sewer-line-repair | Sewer Line Repair |

## Industries (3)

| Old slug | New slug | Industry |
|---|---|---|
| automotive | property-management | Property Management |
| manufacturing | restaurants-hospitality | Restaurants & Hospitality |
| oil-gas | multi-family-housing | Multi-Family Housing |

## Blogs (3, Central Texas)

| Old slug | New slug |
|---|---|
| heat-pump-vs-traditional-hvac-texas | tankless-vs-tank-water-heaters-texas |
| how-often-should-you-replace-hvac-filter | signs-you-need-drain-cleaning-waco-tx |
| signs-ac-needs-replacement-waco-tx | when-to-call-emergency-plumber-waco-tx |

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3), **Projects** (rebuilt). No per-city SEO subpages.

## Non-goals

- No per-city SEO subpages.
- No new component primitives — sibling-clone existing page shapes.
- No marketplace catalog deploy flip.

## Process

1. Brand tokens, Header/Footer, shared components, root layout/infra.
2. Homepage + services ×6 (delete old HVAC dirs + city subpages) + industries ×3.
3. Reviews, blogs ×3, about/contact/service-areas, projects rebuild.
4. Final grep for HVAC/ClearFlow/NATE/Scott Apps identity leaks; `npm run typecheck` must pass.

## Success Criteria

- Zero ClearFlow / HVAC-trade / NATE / old phone / plumbing-local-template identity remaining.
- ClearFlow Plumbing identity consistent site-wide.
- Projects gallery is plumbing before/after jobs, not Scott Apps agency portfolio.
- Typecheck passes.
