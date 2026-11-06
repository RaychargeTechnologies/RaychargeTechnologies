# RayCharge Technologies — Frontend Plan

Phase 0 inventory of `stitch_raycharge_technologies_website`. The export is a marketing website for RayCharge Technologies (Abuja), not an admin dashboard. Screens below are the only views that will be built.

Source of visual truth: each screen’s `code.html` (layout, copy, colors, icons). `raycharge_engineering/DESIGN.md` supplies the token system where the HTML uses those tokens. Where DESIGN.md and a frame disagree, the frame wins.

## 1. Screen inventory

| Frame folder | Shell | Role |
| --- | --- | --- |
| `raycharge_technologies_custom_business_systems` | `web_standard` | Desktop homepage |
| `raycharge_mobile_homepage` | `web_standard` (mobile composition) | Mobile homepage of the same story |
| `raycharge_technologies_custom_systems_for_farms_schools_solar_mobile` | `mobile_tab` | Separate mobile field shell with bottom tabs |
| `about_raycharge_technologies` | `web_standard` | About |
| `services_raycharge_technologies` | `web_standard` | Services |
| `products_raycharge_technologies` | `web_standard` | Products (AgroPulse, WealthTrack, InsightPlus) |
| `agropulse_by_raycharge_farm_poultry_operations_prototype` | `web_standard` | AgroPulse prototype |
| `contact_raycharge_technologies` | `web_standard` | Contact and discovery inquiry |
| `screenshotray.png/screen.png` | asset | InsightPlus dashboard image (1600×909), not a page |
| `*/screen.png` | reference | Frame previews. Several are narrow strips, so HTML is the layout source |
| `raycharge_engineering/DESIGN.md` | tokens | Color, type, spacing, elevation, component rules |

### Desktop homepage sections

1. Hero — “Your business shouldn't depend on exercise books, chats and memory.”
2. “If this sounds like your business” — four problem cards
3. “Built for Nigeria's high-stakes sectors” — agriculture, schools, solar
4. “Tools you can start with today” — AgroPulse, WealthTrack, InsightPlus
5. Navy band — “You won't be starting from a blank page.”
6. “What happens when you reach out” — four steps
7. Closing gradient CTA — discovery call and WhatsApp

### Mobile homepage sections

Same narrative, single column: hero, four problem cards, three sector cards, horizontal product carousel, navy band, vertical timeline, closing CTA, compact footer.

### Mobile tab shell sections

Bottom nav: Solutions, Tools, Case Studies, Contact.

1. Hero — “Software built for how your business actually runs.”
2. Industry cards — poultry, schools, solar
3. Utility tabs — FarmFeed, SolarROI, FeeFlow
4. “How RayCharge Builds” — three steps
5. Testimonial
6. Consult CTA

### About

Hero, three principles, five people (Muhammad Imran, Olusegun Oguwole James, Hamza Abdulhafeez, Muhammad Ibrahim, Rofiat Folorunso) plus an engineering-cadence card, closing CTA.

### Services

Hero, six capability cards, sector tabs (Farm owners, School owners, Solar and mini-grid), topology image, closing CTA.

### Products

Hero, three alternating product rows (AgroPulse, WealthTrack, InsightPlus), custom-systems CTA.

### AgroPulse

Breadcrumb, hero with KPI dashboard mock, paper-vs-digital comparison, four capability pillars, launch timeline, offline section, walkthrough form with success state.

### Contact

Hero, inquiry form (name, business, phone or email, sector chips, problem), WhatsApp, calendar, phone, email, Abuja office, hubs, three-step “what happens next”.

## 2. Route map

| Screen | Route |
| --- | --- |
| Desktop homepage | `/` at viewport ≥ 1024px |
| Mobile homepage | `/` below 1024px |
| Mobile tab shell | `/solutions` |
| Services | `/services` |
| Products | `/products` |
| AgroPulse prototype | `/products/agropulse` |
| About | `/about` |
| Contact / discovery | `/contact` and `/contact#discovery` |

Shared chrome is inside each frame, not one abstracted shell:

- Desktop header (About, Contact, Products, Services, AgroPulse, desktop homepage): logo, Services, Products, About, Contact, “Book a discovery call”, hamburger under `md`.
- Two footer variants are preserved per frame (corporate footer vs operations footer vs services/products footer vs mobile footer).
- Mobile tab shell uses its own top bar and fixed bottom nav.

### Link decisions

- `data-path` home, services, products, about, contact map to the routes above.
- `book-a-discovery-call` and `book-discovery-call` map to `/contact#discovery`.
- Links whose label is AgroPulse or Agri-Suite map to `/products/agropulse` so the exported prototype screen is reachable. The frames left those `href`s as `#` or the discovery path.
- WealthTrack and InsightPlus labels map to `/products#wealthtrack` and `/products#insightplus`. Those products have rows on the products screen and no separate frames.
- WhatsApp and `tel:` links stay external, with the number each frame already shows.
- Careers, Case Studies, Privacy Policy, Terms of Service, and Security Brief have no frames. They stay visible and do not open invented pages.

## 3. Design tokens

Extracted from the Tailwind config embedded in the frames, plus hardcoded hex the frames use on top of those tokens. Full machine copy lives in `src/styles/tokens.css` and `tailwind.config.ts`.

### Color roles in the frames

| Token | Hex | Use in frames |
| --- | --- | --- |
| `background` / `surface` / `surface-bright` | `#faf9ff` | Page canvas |
| `surface-container-lowest` | `#ffffff` | Cards, header surfaces |
| `surface-container-low` | `#f1f3ff` | Bands |
| `surface-container` | `#e9edff` | Chips, tracks |
| `surface-container-high` | `#e1e8ff` | Active nav pill |
| `surface-container-highest` | `#d8e2ff` | Success feedback |
| `on-surface` / `on-background` | `#0f1b33` | Body text |
| `on-surface-variant` | `#424752` | Secondary copy |
| `outline` | `#727784` | Placeholders, muted labels |
| `outline-variant` | `#c2c6d5` | Input borders |
| `primary` | `#004b9b` | Hover on primary buttons, some text |
| `primary-container` | `#0b63c5` | Primary buttons, links |
| `on-primary` | `#ffffff` | Text on primary buttons |
| `tertiary` | `#005468` | Accent text |
| `tertiary-container` | `#006e88` | Eyebrow labels |
| `tertiary-fixed` | `#b7eaff` | Text on dark heroes |
| `tertiary-fixed-dim` | `#52d5fe` | Focus-adjacent cyan |
| `error` | `#ba1a1a` | Error role |
| `error-container` | `#ffdad6` | Error surface |
| `on-error-container` | `#93000a` | Error text |

Hardcoded in frames (kept as authored, not remapped):

| Value | Use |
| --- | --- |
| `#0A1A5C` | Navy heroes, headings, footer basement |
| `#0B63C5` | Gradient mid-stop (same hue as `primary-container`) |
| `#19B4DB` | Gradient end, cyan icons |
| `#F5F8FC` | Some section bands |
| `#EAF3FC` | Icon badges, in-progress chips |
| `#EAF8F1` / `#107C41` | Operational chips |
| `#FAF8F2` | Paper-ledger mock |
| `#25D366` / `#20ba59` | WhatsApp buttons |
| `#D6DFEB` | Documented input border in DESIGN.md; frames mostly use `outline-variant` |

Signature gradient: `linear-gradient(135deg, #0A1A5C 0%, #0B63C5 50%, #19B4DB 100%)`, authored as `bg-gradient-to-br from-[#0A1A5C] via-[#0B63C5] to-[#19B4DB]`.

### Typography

Loaded from Google Fonts (the families named in the export; no substitution):

- Plus Jakarta Sans 600, 700, 800 — headlines and `title-md`
- Inter 400, 500, 600, 700 — body and labels
- Material Symbols Outlined — every icon in the export (ligature names, not separate SVG files)

| Token | Family | Size / line / weight / tracking |
| --- | --- | --- |
| `display-hero` | Plus Jakarta Sans | 56 / 64 / 700 / -0.03em |
| `display-hero-mobile` | Plus Jakarta Sans | 36 / 44 / 700 / -0.02em |
| `headline-lg` | Plus Jakarta Sans | 40 / 48 / 700 / -0.02em |
| `headline-lg-mobile` | Plus Jakarta Sans | 28 / 36 / 700 / -0.01em |
| `headline-md` | Plus Jakarta Sans | 28 / 36 / 600 / -0.01em |
| `headline-sm` | Plus Jakarta Sans | 22 / 30 / 600 / -0.005em |
| `title-md` | Plus Jakarta Sans | 18 / 26 / 600 |
| `body-lg` | Inter | 18 / 30 / 400 |
| `body-md` | Inter | 16 / 26 / 400 |
| `body-sm` | Inter | 14 / 22 / 400 |
| `label-lg` | Inter | 15 / 20 / 600 / 0.01em |
| `label-md` | Inter | 13 / 18 / 500 / 0.02em |
| `label-sm` | Inter | 11 / 16 / 600 / 0.04em |

### Spacing

8px grid as named in the frames:

| Token | Value |
| --- | --- |
| `space-xs` | 0.25rem |
| `space-sm` | 0.5rem |
| `space-md` | 1rem |
| `space-lg` | 1.5rem |
| `space-xl` | 2.5rem |
| `gutter` | 1.5rem |
| `gutter-mobile` | 1rem |
| `margin` | 2rem |
| `margin-mobile` | 1.25rem |

Content width: `max-w-[1280px]` or `max-w-7xl`, centered.

Breakpoints used by the frames: default Tailwind `sm` 640, `md` 768, `lg` 1024, plus an `xs` screen. The export uses `xs:` and does not define the pixel value. This build uses **400px** for `xs`.

Homepage swap matches DESIGN.md desktop start: **1024px**.

### Radius, elevation, motion

Frames use default Tailwind radii (`rounded-lg` 0.5rem, `rounded-xl` 0.75rem, `rounded-2xl` 1rem, `rounded-full` pills). DESIGN.md lists a larger radius scale (`lg` = 1rem). The frame classes are what get rendered.

Elevation, copied from shadows already on the frames and from DESIGN.md levels used by those shadows:

- Header: `0 1px 8px rgba(10, 26, 92, 0.04)`
- Card level 1: `0 4px 16px -2px rgba(10, 26, 92, 0.04), 0 2px 6px -1px rgba(10, 26, 92, 0.02)` plus `1px solid rgba(15, 27, 51, 0.06)` where the frame draws a border
- Level 2 hover: `0 12px 32px -4px rgba(10, 26, 92, 0.08)`
- Focus ring: 3px `#19B4DB`, and input glow `0 0 0 3px rgba(11, 99, 197, 0.15)` where the frame specifies it

Z-index: sticky header and mobile bottom nav are `z-50`. No modal layer exists in the export.

Motion present in the frames (implement only these):

- Hover: `-translate-y-0.5` / `translateY(-1px)`, color and shadow `duration-200`
- Image hover: `scale-105` over `duration-500`
- Press: `active:scale-95` and `active:scale-98`
- Status dot: `animate-pulse`
- Sector and utility tabs: opacity / class swap
- Diagonal section edges are static `clip-path`, not animated
- `prefers-reduced-motion` disables these transitions. The loading spinner keeps a slow rotation so loading stays visible.

## 4. Asset pipeline

No standalone SVG icon pack shipped with the export. Icons are Material Symbols Outlined ligatures. Photographs and the logo are remote `lh3.googleusercontent.com` URLs inside the HTML, plus local `screenshotray.png/screen.png`.

| Kind | Destination | Naming |
| --- | --- | --- |
| Remote photos and logo | `public/assets/images/` | `{short-hash}.{ext}` from the URL, mapped in `src/design/asset-map.json` |
| InsightPlus shot | `public/assets/images/insightplus-dashboard.png` | Local `screenshotray.png/screen.png` when the alt text is the InsightPlus dashboard |
| Frame previews | left in the Stitch folder | Not shipped as UI |
| Icons | font ligatures | Original names and `text-*` colors kept |

Images use `<img>` with the frame’s `alt`, `object-cover` / `object-contain`, and explicit width/height classes so logos are not stretched.

## 5. Component hierarchy

Frames are rendered from their HTML so spacing and structure stay intact. React wraps behavior, tokens, and states.

### Atoms (`src/components/ui`)

- `Spinner` — brand-colored circular spinner
- `Button` — pill button matching primary / secondary rules, with a loading slot
- `Input` — 48px field, 8px radius, focus glow from the contact frame
- `Badge` — operational, progress, and alert chips from DESIGN.md
- `Card` — white surface, 16px radius intent where a React card is needed (error/empty panels)
- These primitives are used for loading, error, and empty UI. Marketing sections stay in frame HTML.

### Molecules / organisms

- `StitchView` — mounts a frame, rewrites in-page behavior
- `HomePage` — chooses desktop or mobile homepage at 1024px
- `MobileMenu` — panel for the hamburger. The frames include the button and do not include a panel. The panel lists the same header links on the header surface.
- `SiteFooter` is not a shared component. Each frame keeps its own footer markup.

### Pages (`src/app`)

One route per row in the route map, plus `loading.tsx` on each route.

## 6. State plan

No frame shows skeletons. Loading is always a spinner.

| Surface | Loading | Empty | Error | Success |
| --- | --- | --- | --- | --- |
| Route change | Centered spinner on `#faf9ff` via `loading.tsx` | — | `not-found` uses the same canvas and type, only for unknown URLs | Page frame |
| Homepage breakpoint | Spinner until the viewport is known, so the wrong frame does not flash | — | — | Desktop or mobile frame |
| Contact form | Spinner inside the submit button, button disabled | Required fields block submit | Banner on `error-container` / `on-error-container` | Existing `#form-feedback` copy |
| AgroPulse walkthrough | Spinner inside “Schedule Prototype Walkthrough”, button disabled | Required fields block submit | Same error banner pattern | Existing “Walkthrough Request Received” block |
| Utility tabs (FarmFeed, SolarROI, FeeFlow) | Spinner in the tab content while the module swaps | — | — | Module figures from the frame script |
| Services sector tabs | Brief spinner over the panel while the sector swaps | — | — | Farm, school, or solar panel from the frame |
| Download / file icons | Spinner inside the control, then navigation to the mapped product route | — | — | Destination screen |
| Footer links with no frame | — | — | No navigation, no new page | — |

Sector chips on the contact form keep their inline toggle (selected = `primary-container`).

## 7. Build order

1. Tokens, global CSS, fonts, Tailwind theme
2. Download images into `public/assets/images` and point frame `src`s at them
3. Mount frame HTML (headers, footers, bottom nav included)
4. Primitives: Spinner, Button, Input, Badge, Card
5. Pages in flow order: Home → Services → Products → AgroPulse → About → Contact → Solutions mobile shell
6. Form, tab, menu, and download loading / empty / error behavior
7. Homepage switches at 1024px. Other frames keep the responsive classes already in their HTML.
8. `docs/UI_QA_CHECKLIST.md`

## 8. Risks and ambiguities

- The task text says “admin dashboard”. The zip does not contain one. Building a dashboard would be a new product, so it is out of scope.
- DESIGN.md canvas `#F5F8FC` and token surface `#faf9ff` both appear. Both are kept where each frame used them.
- DESIGN.md radii are larger than the utility classes in the HTML. Utility classes win.
- Phone numbers and email addresses differ by frame. They are not normalized.
- `xs` is used and not defined. Chosen value: 400px.
- Hamburger menus have no designed panel. The panel only repeats header links.
- Careers, case studies, privacy, terms, and security have labels and no screens.
- Several `screen.png` previews are only ~100–700px wide, so they cannot be a pixel ruler. Fidelity is checked against `code.html`.
- Remote images may fail to download. Fallback is the `alt` text and, for InsightPlus, the local screenshot.
- Material Symbols and the two webfonts load from Google Fonts. They are the families the export names.
