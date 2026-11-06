# RayCharge UI QA checklist

Checked against `stitch_raycharge_technologies_website` and a local run of the Next.js app (desktop layout at 1280px and the mobile homepage in a narrow viewport).

- [x] Every Stitch screen has a corresponding route/view
  - `/` desktop homepage (`raycharge_technologies_custom_business_systems`) at ≥ 1024px
  - `/` mobile homepage (`raycharge_mobile_homepage`) below 1024px
  - `/solutions` mobile tab shell
  - `/services`, `/products`, `/products/agropulse`, `/about`, `/contact`
- [x] Nav matches the design labels and order
  - Desktop header: Services, Products, About, Contact, Book a discovery call
  - Mobile homepage bottom bar: Home, Services, Products, About, Contact
  - Solutions bottom bar: Solutions, Tools, Case Studies, Contact
  - There is no sidebar in the export. Headers and bottom bars are the navigation.
- [x] Colors, spacing, and typography use the tokens extracted from the frames
  - Tailwind theme and `src/styles/tokens.css` come from the embedded Tailwind config plus the hardcoded hex values the frames already use (`#0A1A5C`, `#0B63C5`, `#19B4DB`, `#F5F8FC`, chip colors)
  - Plus Jakarta Sans and Inter are loaded. No font substitution.
- [x] Icons and images from the export are used
  - Icons are Material Symbols Outlined ligatures, which is what the HTML uses. The zip has no separate SVG icon set.
  - Photos are saved under `public/assets/images/`.
  - InsightPlus uses the local `screenshotray.png/screen.png` asset.
  - Abuja map background is saved as `public/assets/images/abuja-map.png`.
  - The circular logo bitmap (`lh3.googleusercontent.com/aida/AEtjO1W1...`) returned HTTP 403. Brand slots now use the full RayCharge wordmark (`raycharge-logo.png`) at its natural ratio, with a white plate on dark backgrounds. Lightning bolts remain only on feature and metric icons.
  - WhatsApp actions share one icon. Email and phone links that had no icon get the same treatment.
- [x] Animations match the frames
  - Hover lift, image scale, press scale, and the status-dot pulse are the classes already in the HTML.
  - Diagonal section edges are static clip paths.
  - Added a short section rise, a slow hero gradient shift, and a gradient fill on primary buttons. Reduced motion still collapses those animations.
- [x] Every async path shows a spinner
  - Route `loading.tsx` on each screen
  - Homepage spinner until the 1024px breakpoint is known
  - Contact and AgroPulse submit buttons
  - Services sector tabs and Solutions utility tabs
  - Download / file actions
- [x] Empty and error states exist and use the same surfaces
  - Empty required fields on Contact show the error banner (`error-container` / “Add the required details before sending.”). Verified in the browser: the banner’s display becomes `flex`, and the success note stays `display: none`.
  - A valid Contact submit is wired to show the frame’s “Inquiry received…” note after the button spinner. A filled submit was not completed in the browser.
  - AgroPulse uses the same error banner and the frame’s “Walkthrough Request Received” success block.
  - These marketing screens have no data tables, so there is no separate empty-table layout.
- [x] No placeholder lorem where the design has real labels
- [x] No horizontal overflow at 1280px
  - Measured `scrollWidth` equal to the viewport on the desktop homepage and the products page.
- [x] Reduced-motion safe
  - `prefers-reduced-motion` collapses transitions and decorative animation.
  - `.stitch-spinner` keeps a slow rotation so loading stays visible.

## Routes with labels but no frame

These footer and nav labels stay visible and do not open invented pages: Careers, Case Studies, Privacy Policy, Terms of Service, Security Brief, Information Security, Compliance & SLA.

## Ambiguities recorded in the plan

- `xs` breakpoint is 400px. The export uses `xs:` and does not define the pixel value.
- Hamburger controls have no panel in the frames. The panel repeats the header links (Services, Products, About, Contact). Verified open on AgroPulse.
- Phone numbers and emails differ by screen and were left as authored.
