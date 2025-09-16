# Espresso event map

## Project Description
 an illustrated, web-embeddable *Espresso World Map* that highlights past and upcoming Espresso events. This will be used as an interactive feature on the Espresso website and must match the Espresso brand. Use the Figma source here for brand tokens and visual reference: https://www.figma.com/design/p0dZ2mgZBjnxD8OYNBt2P2/

Goals
1. Deliver a high-fidelity *Figma frame* (static + prototype) and a working *MVP web app* (static site or small React app) that can be embedded in a page (iframe/or a component).
2. Map must show *past* vs *upcoming* events clearly and use custom illustrated markers (espresso-cup or pin).
3. Keep the MVP free of paid API keys (use OpenStreetMap tiles or an exported SVG world strip). If Mapbox is used, provide instructions to swap tokens.


## Product Requirements Document
Espresso World Map - Product Requirements Document

**1. Introduction**

*   **Project Name:** Espresso World Map
*   **Document Version:** 1.0
*   **Date:** October 26, 2023
*   **Author:** [Your Name/Team Name]
*   **Project Overview:** The Espresso World Map is an illustrated, web-embeddable interactive feature for the Espresso website. Its primary purpose is to visually showcase past and upcoming Espresso events globally, reinforcing Espresso's brand presence and community engagement. The map must be visually aligned with the Espresso brand, using the provided Figma source for tokens and visual reference.

**2. Goals & Objectives**

*   **Primary Goals:**
    1.  Deliver a high-fidelity Figma frame (static + prototype) and a working MVP web app (static site or small React app) that can be embedded into a page (iframe or component).
    2.  The map must clearly distinguish between past and upcoming events, using custom illustrated markers (espresso-cup or pin).
    3.  Keep the MVP free of paid API keys by utilizing OpenStreetMap tiles or an exported SVG world strip. If Mapbox is used, provide clear instructions for swapping tokens.

*   **User Goals:**
    *   Community members & event attendees want to quickly find upcoming events near them and discover past events for credibility.
    *   Prospective partners & collaborators want to see global event spread as proof of Espresso's traction and momentum.
    *   Press, media & analysts need a clear timeline and locations for coverage and trend analysis.

*   **Business Goals:**
    *   Showcase Espresso's global activity and impact to stakeholders and the community.
    *   Provide a polished, brand-aligned marketing asset for decks and pitches.
    *   Centralize and easily update event information for internal teams.

**3. Target Audience**

*   **Community Members & Event Attendees:** Developers, founders, crypto enthusiasts, and Espresso supporters seeking local or relevant events and wanting to feel part of a global movement.
*   **Prospective Partners & Collaborators:** Investors, protocol teams, integration partners, and sponsors looking for tangible proof of Espresso's real-world traction and visibility.
*   **Press, Media & Analysts:** Journalists, crypto media outlets, and industry analysts requiring quick context on Espresso's event presence, reach, and activity for their coverage.
*   **Espresso's Internal Team:** Event organizers, marketing, and developer relations personnel needing a tool to showcase impact, track outreach, and use in promotional materials.

*   **Problems Solved:**
    *   **Discovery:** Users can instantly see where Espresso has been and where it's going.
    *   **Context:** Places the project in a global narrative, reinforcing its international presence.
    *   **Engagement:** Encourages users to explore event details, register, or follow along.
    *   **Credibility:** A polished, international footprint reassures outsiders of Espresso's legitimacy.

**4. Features & Functionality**

*   **Core Interactions:**
    1.  **Filtering Controls:**
        *   Filter by event type (conference, meetup, hackathon, workshop).
        *   Filter by status (upcoming vs. past).
        *   Filter by region/continent (Americas, Europe, Asia, etc.).
    2.  **Search Functionality:**
        *   Text input for searching by city, country, or event name.
        *   Autocomplete suggestions for faster discovery.
    3.  **Marker Clustering:**
        *   Automatically aggregate nearby events when zoomed out, expanding on zoom.
        *   Ensures map readability with high event density.
    4.  **List View / Map Toggle:**
        *   A companion list of events, sortable by date or location.
        *   Provides an alternative view for users who prefer structured lists.
    5.  **Event Detail Popups:**
        *   Clicking a marker opens a popup card with event name, full date/time, location, description, external link, and optional thumbnail.
    6.  **Favoriting / Save for Later (Optional, Advanced):**
        *   Logged-in users can "star" or "favorite" events for a personal list.
    7.  **Map Controls:**
        *   Standard zoom in/out, pan, and reset to global view.

*   **Typical User Journey (Example: Developer in Seoul):**
    1.  **Initial Load:** Map loads showing global event distribution, with clusters in dense areas.
    2.  **Filter for Upcoming Events:** User selects "Upcoming" filter; past event markers fade, upcoming ones highlight.
    3.  **Search for Location:** User types "Seoul"; map zooms to Korea, centering on the Seoul event marker.
    4.  **View Event Details:** User clicks the Seoul marker; popup displays "Espresso Meetup Seoul, Oct 2025", venue, description, and RSVP link.
    5.  **Explore Related Events:** User notices another upcoming event in Buenos Aires via the companion list view and toggles between map and list to compare details.
    6.  **Optional: Save/Favorite:** User stars the Seoul event, adding it to their "My Espresso Events" list (if implemented).

**5. User Experience (UX) & Visual Design**

*   **Marker Design:**
    *   **Event Status Distinction:**
        *   **Upcoming Events:** Espresso cup or pin in Espresso brand accent color (e.g., warm orange or gold), fully opaque, slightly larger to stand out.
        *   **Past Events:** Same shape in a neutral tone (e.g., light gray or muted brown), lower opacity (60–70%) to de-emphasize.
    *   **Marker States:**
        1.  **Default State:** Static illustrated icon, distinguished by event status.
        2.  **Hover State:** Slight scale up (e.g., 1.1x), subtle glow/outline in brand color, tooltip preview (event name + date).
        3.  **Active/Selected State:** Marker grows larger (e.g., 1.2x), persistent glow/highlight, corresponding popup card anchored to the marker.

*   **Micro-Interactions & Animations:**
    *   **On Marker Hover:** Smooth scale/zoom effect (150ms), tooltip fades in with short text.
    *   **On Marker Click:** Marker animates (e.g., bounce or pulse once), map pans smoothly to center clicked marker, popup card slides/fades in above marker.
    *   **On Filter Application:** Markers fade out/in (rather than abrupt disappearance) with a smooth transition (~300ms), map auto-adjusts to fit visible markers.
    *   **On Search / Region Jump:** Animated pan + zoom to location (duration: ~500ms).

*   **Popups & Tooltips:**
    *   **Tooltip (Hover):** Lightweight, minimal info (Event Name, City + Date short format), appears on hover, disappears on mouse out, dark background with light text.
    *   **Popup (Click):** Rich info card anchored to marker, contains:
        1.  Event Name (headline)
        2.  Full Date/Time (localized)
        3.  City, Country, Venue/Address
        4.  Short Description (1–2 sentences)
        5.  Event Type (tag/pill)
        6.  External Link (button: "Learn More" / "Register" / "Recap")
        7.  Thumbnail (optional)
    *   **Behavior:** Only one popup open at a time; clicking outside or on another marker closes it; animates with fade/slide-up effect (~200–250ms).

*   **User Value (UX):**
    *   **Past vs. Upcoming clarity:** Users instantly know event relevance.
    *   **Marker states:** Encourages exploration with satisfying interactions.
    *   **Micro-animations:** Adds polish and dynamism without distraction.
    *   **Popups/tooltips:** Prioritizes quick scanning (tooltip) vs. deep dive (popup).

**6. Data Management & API**

*   **Desired Data Points for Each Event Marker:**
    *   **ID:** Unique identifier (UUID or incremented ID) for tracking.
    *   **Event Name:** Headline for display.
    *   **Date/Time (full):** ISO format (e.g., 2025-09-14T18:00:00Z) for localization and filtering.
    *   **City:** For quick reference.
    *   **Country:** For display, categorization, and potential flags.
    *   **Precise Location Coordinates:** Latitude & longitude (e.g., 52.5200, 13.4050) for map placement.
    *   **Venue / Address (optional):** Specific location details.
    *   **Description (short):** 1–2 sentences for quick context.
    *   **Event Type / Category:** Enum (conference, hackathon, meetup, workshop) for filters and potential color-coding.
    *   **Status:** Enum (past, upcoming) for visual distinction.
    *   **External Link:** Registration page, blog recap, or social media link.
    *   **Media / Thumbnail (optional):** Event logo or photo for richer info card.

*   **How Event Data Will Be Provided & Updated:**
    *   **MVP Option (Hackathon):** Manual JSON / Config File. Store data in `public/events.json`, update by editing the file directly. Easiest for initial submission.
    *   **Near-term Upgrade:** Google Sheet + API. Events maintained in a shared Google Sheet, served as JSON via a service (e.g., Sheety) or custom script. Allows non-developers to update.
    *   **Professional Option (Long-term):** Headless CMS (e.g., Strapi, Sanity, Notion-as-DB). Editors update via CMS, React app fetches via API. Scalable and future-proof.

*   **Integration Strategy (MVP-first, scalable later):**
    *   Hackathon MVP will use a static JSON file in the repository.
    *   Near-term plans involve migrating to Google Sheet synchronization.
    *   Long-term strategy aims for a full CMS or API-powered database solution.

**7. Technical Architecture & Development**

*   **Core Technologies:**
    *   **Framework:** React (v18.x) with functional components + hooks.
    *   **Map Library:** Leaflet (v1.9+) or MapLibre GL JS (for vector tiles, smoother zoom).
    *   **Styling:** Tailwind CSS (v3.x) for rapid, brand-aligned styling.
    *   **State Management:** React Context or lightweight libraries like Zustand (Redux only if complexity significantly increases).
    *   **TypeScript:** Strongly preferred (v5.x) for type safety and maintainability.

*   **Tooling & Package Management:**
    *   **Node.js:** v18 LTS.
    *   **Package Manager:** pnpm (preferred for speed and disk efficiency); npm v9+ as fallback.
    *   **Build Tool:** Vite (v5.x) for fast dev server and optimized production builds.
    *   **Linting & Formatting:** ESLint (Airbnb or custom ruleset) + Prettier.
    *   **Testing:** Vitest (preferred) or Jest + React Testing Library.

*   **Map Tile & Geocoding Strategy:**
    *   **MVP Constraint:** Initial implementation must be 100% free of paid API keys. Utilize OpenStreetMap (OSM)-based providers (e.g., Leaflet, MapLibre) and open-source geocoding (e.g., Nominatim).
    *   **Triggers for Migration to Paid Services:**
        1.  **Scale:** Concurrent events exceed 1,000–2,000, causing performance issues with free OSM tile servers.
        2.  **Geocoding Accuracy:** OSM/Nominatim fails to provide precise results for niche locations.
        3.  **Aesthetic Alignment:** Espresso brand requires highly customized basemaps, typography, or animations not supported by OSM.
        4.  **Feature Requirements:** Advanced features (3D buildings, real-time traffic, routing) become necessary.
        5.  **Uptime/SLA Guarantees:** Commercial partner needed for >99.9% uptime.
    *   **Preferred Commercial Providers (Ranked):**
        1.  **Mapbox:** Strong brand alignment, deep customization via Mapbox Studio, excellent performance at scale, flexible pricing.
        2.  **Google Maps Platform:** Unmatched geocoding accuracy, familiar UI, rich features; higher cost at scale, less brand customization.
        3.  **Esri ArcGIS Online:** Enterprise-grade GIS, strong analytics support; overkill for MVP, complex.
    *   **Migration Path:**
        1.  **MVP:** OSM tiles via MapLibre/Leaflet, Nominatim geocoding.
        2.  **Scale Phase (~1,000+ events):** Switch to Mapbox for basemaps + vector tiles.
        3.  **Enterprise Phase (>5,000 events):** Evaluate hybrid (Mapbox for style + Google Maps API for geocoding).
        4.  **Long-term:** Contract with preferred provider for SLA and predictable billing.
    *   **Documentation Note:** Strategy ensures no early lock-in but provides a clear upgrade path.

**8. Deployment & CI/CD**

*   **Deployment Environment & Strategy:**
    *   **Static Hosting (Recommended MVP Path):**
        *   **Primary Options:** Vercel (preferred for React/Next.js ease, preview deployments, serverless functions) or Netlify (strong alternative, good CI/CD).
        *   **Fallback:** GitHub Pages for minimal config demos.
        *   **Why:** Quick setup, free tiers, global CDN for speed.
    *   **Custom/Enterprise Hosting (Longer Term):** AWS S3 + CloudFront for static hosting, or Dockerized build via AWS ECS/Fargate, GCP Cloud Run for containerized deployment.
    *   **CDN Requirement:** All map tiles and assets must be served via CDN for global performance.

*   **CI/CD Requirements:**
    *   **Version Control:** GitHub (primary).
    *   **CI/CD Provider:** GitHub Actions (default, integrates with Vercel/Netlify); GitLab CI/CD as alternative.
    *   **Build Workflow:**
        1.  Lint + type-check (ESLint + TypeScript).
        2.  Run tests (unit + integration).
        3.  Build optimized production bundle (Vite).
        4.  Deploy to preview environment (per PR).
        5.  Auto-deploy to production branch on merge.
    *   **Environment Variables:** Secure storage in Vercel/Netlify dashboard or GitHub Secrets.
    *   **Branching Strategy:** GitHub Flow (feature branches → pull requests → main).

**9. Embedding & Integration**

*   **Embedding Method Options:**
    1.  **React Component (Preferred if Espresso site is React/Next.js):**
        *   Map MVP built as reusable `<EspressoWorldMap />` component, imported directly.
        *   **Advantages:** Seamless styling, shared state, full customization.
        *   **Requirements:** Parent site must be React-based.
    2.  **Iframe Embed (Fallback, Works with Any Site):**
        *   Map MVP deployed as standalone app (`espresso-map.netlify.app`), embedded via `<iframe>` tag.
        *   **Advantages:** Quick, decoupled.
        *   **Drawback:** Limited styling control, less seamless UX.
    3.  **Custom Script Injection (Advanced Option):**
        *   Bundle map as JS module, loaded by parent site's `<script>` tag, mounts into a specific `<div>`.
        *   **Advantages:** Feels native, works with non-React sites.

*   **Communication Between Map & Parent Page:**
    1.  **Passing Event IDs:** Map dispatches event (e.g., `window.postMessage` or custom callback) on marker click (e.g., `{\"eventId\":\"evt-001\",\"action\":\"markerSelected\"}`). Parent uses for side panels or analytics.
    2.  **Updating URL Parameters (Optional):** Map updates query string (e.g., `?event=evt-001`) for deep linking.
    3.  **Triggering Parent Functions (Optional):** If React component, parent passes props/callbacks (e.g., `<EspressoWorldMap onEventSelect={(id) => openEventModal(id)} />`) for tight integration with site flows.

*   **Recommended MVP Approach:**
    *   If Espresso's website is React/Next.js → use **React component integration**.
    *   If Espresso's website is static/non-React → use **iframe embed** for hackathon demo (fastest path).
    *   For future scalability → migrate to **script injection** or React component as appropriate.

*   **User Value (Embedding):** Flexibility in embedding allows the MVP to start lightweight (iframe) and evolve to a native component, aligning with Espresso's evolving tech stack and performance needs.

**10. Performance & Scalability**

*   **Anticipated Event Volume:**
    *   **Initial MVP (0–6 months):** ~50–100 concurrent events.
    *   **Short-term growth (6–12 months):** ~250–500 events.
    *   **Medium-term (1–2 years):** Up to 1,000–2,000 concurrent events.
    *   **Design Assumption:** Clustering and filtering will be essential beyond ~250 markers.

*   **Key Performance Indicators (KPIs):**
    *   **Map Loading Speed:**
        *   Initial render (100 events): < 2 seconds (desktop broadband), < 3 seconds (4G mobile).
        *   With 500–1,000 events: < 4 seconds (using clustering/lazy loading).
        *   Map tiles must be cached via CDN.
    *   **Responsiveness (Panning & Zooming):**
        *   Pan/zoom latency: < 100ms response time.
        *   Smooth transitions without stutter on mid-tier mobile devices.
        *   Marker clustering should dynamically adjust in < 200ms on zoom.
    *   **Filtering & Search Performance:**
        *   Filter application (type/date/region): results update within < 500ms.
        *   Search (city/event name): autocomplete suggestions in < 300ms.
        *   No full map reload required.
    *   **Pop-ups & Tooltips:** Event detail pop-up opens in < 200ms after marker click.
    *   **Mobile Optimization:**
        *   Loading time (4G, ~50 events): < 3s.
        *   Map interaction: 30+ FPS on modern Android/iOS.
        *   Mobile-first layout: easy list view toggle, large touch targets.

*   **UX/Performance Safeguards:**
    *   **Clustering:** Automatically aggregate markers when density exceeds threshold (e.g., 50+ in viewport).
    *   **Progressive Loading:** Load nearest region events first, lazy-load distant ones.
    *   **Caching:** Store event data in browser cache (localStorage or service worker) for repeat visits.
    *   **Fallback Mode:** If >1,500 active events, default to cluster view until user zooms in.

*   **Success Metrics (User Experience):**
    *   95% of users see map load in under 3 seconds.
    *   Interactions (panning/zooming/filtering) maintain sub-second responses.
    *   On mobile, users can view an event and return to map within 2 taps.
    *   Bounce rate < 20% after landing on map page.

**11. Accessibility & Browser Compatibility**

*   **Accessibility Standards:**
    *   **Target Standard:** WCAG 2.1 AA compliance (minimum).
    *   **Key Requirements for Map UI:**
        *   **Keyboard Navigation:** All interactive elements (markers, filters, search bar, list view toggle) accessible via keyboard (Tab, Enter, Arrow keys).
        *   **Screen Reader Support:** ARIA labels for markers and popups (e.g., "Espresso Event – Berlin, Past Event, June 2023").
        *   **Color Contrast:** All UI elements meet WCAG 2.1 AA color contrast ratio (min 4.5:1 for text).
        *   **Non-Color Distinction:** Past vs. upcoming events distinguished by shape, pattern, or label, not color alone.
        *   **Zoom & Scaling:** Support text scaling up to 200% without layout breakage.
        *   **Motion Sensitivity:** Animations/transitions must be subtle and respect "prefers-reduced-motion".
        *   **Tooltips/Popups:** Accessible for screen readers, dismissible via keyboard.

*   **Browser Compatibility Matrix:**
    *   **Desktop Browsers (Minimum Support):** Google Chrome, Mozilla Firefox, Safari (macOS), Microsoft Edge (Chromium) – last 2 versions for each.
    *   **Mobile Browsers (Minimum Support):** iOS Safari (iOS 15+), Chrome on Android (Android 11+, last 2 versions), Samsung Internet (last 2 versions).

*   **Progressive Enhancement / Fallbacks:**
    *   If WebGL-based maps (e.g., MapLibre GL JS) are used, fallback to raster tiles (Leaflet) for older browsers without WebGL.
    *   Graceful degradation: basic map with clickable markers must function even if clustering or animations fail.

*   **Performance & Accessibility Testing:**
    *   **Testing Tools:** Lighthouse (performance + accessibility), axe-core (automated accessibility), BrowserStack (cross-browser/device).
    *   **Manual Testing:** Keyboard-only navigation, screen reader testing (NVDA, VoiceOver), high contrast mode, prefers-reduced-motion validation.

**12. MVP Timeline & Future Enhancements**

*   **MVP Delivery Timeline:**
    *   **Planning & Design:** 1 week (Figma mockups, event schema, specs, stakeholder review).
    *   **Development Setup:** 2–3 days (React project init, dependencies, sample data).
    *   **Core MVP Development:** 2–3 weeks (interactive map, markers, filtering, search, clustering, popups, brand alignment).
    *   **Internal QA & Review:** 3–4 days (desktop/mobile testing, accessibility, cross-browser, responsiveness, internal demo).
    *   **Deployment & Demo Prep:** 2 days (Deploy to Netlify/Vercel, finalize README/docs).
    *   **Total MVP Duration:** ~4–5 weeks.

*   **Next-Phase Features / Enhancements:**
    1.  **User Accounts & Favorites:** Save events, "My Events" lists. *Architecture Impact:* authentication, persistent storage, user-specific state.
    2.  **Real-Time Event Updates:** Events auto-refresh. *Architecture Impact:* API-driven data, WebSockets/polling, caching.
    3.  **Advanced Analytics & Heatmaps:** Track interactions, visual density maps. *Architecture Impact:* modular map component, overlay analytics layers.
    4.  **Multi-Language / Localization Support:** UI and event data translation. *Architecture Impact:* i18n libraries, content localization.
    5.  **Enhanced Filtering & Sorting:** Multiple criteria, date range, region/type combinations. *Architecture Impact:* performant client-side/server-side filtering.
    6.  **Integration with External Calendars / Registration Links:** Export to Google Calendar, registration buttons. *Architecture Impact:* modular event model for external links/calendar metadata.

*   **Architecture Implications (for future growth):**
    *   **Modularity:** MVP should be component-based for easy feature additions.
    *   **API-Ready:** Code structured to easily switch from static JSON to API/CMS.
    *   **Responsive & Mobile-First:** Ensures future enhancements work seamlessly on mobile.
    *   **Performance:** MVP implements clustering, lazy loading, efficient state management anticipating larger datasets.

## Technology Stack
TECHSTACK

This document outlines the recommended technology stack for the "Espresso event map" project. The selection prioritizes modern, efficient, scalable, and maintainable tools and frameworks, while adhering to the project's goals, particularly the MVP constraint of being free of paid API keys initially and aligning with the Espresso brand.

1.  Frontend Core Technologies

    *   **Framework:** React (v18.x) with functional components and hooks
        *   **Justification:** React is a widely adopted, performant library ideal for building interactive user interfaces. Its component-based architecture facilitates modularity, reusability, and maintainability, which are crucial for the map's complex interactions and future enhancements. Functional components and hooks ensure a modern, efficient approach to state management and side effects.
    *   **Language:** TypeScript (v5.x)
        *   **Justification:** TypeScript is strongly preferred for type safety, which enhances code quality, reduces bugs, and improves developer experience, especially in larger, collaborative projects. It offers better tooling, refactoring capabilities, and overall maintainability.

2.  Mapping Libraries & Services

    *   **Primary Map Library (MVP):** MapLibre GL JS
        *   **Justification:** Chosen for its support of vector tiles, enabling smoother zoom and performance, and its open-source, community-driven nature. It's a fork of Mapbox GL JS, providing similar capabilities without proprietary licensing concerns, aligning with the "free of paid API keys" MVP goal.
    *   **Alternative/Fallback Map Library (MVP):** Leaflet (v1.9+)
        *   **Justification:** A robust, lightweight, and widely used open-source JavaScript library for interactive maps. It's excellent for raster tiles and offers a strong plugin ecosystem. It serves as a reliable alternative or fallback, especially for older browsers that may not fully support WebGL required by MapLibre GL JS.
    *   **Map Tiles (MVP):** OpenStreetMap (OSM) based providers
        *   **Justification:** Directly supports the requirement for a solution entirely free of paid API keys. OSM offers comprehensive global map data and a variety of free tile servers, making it ideal for the MVP.
    *   **Geocoding (MVP):** Nominatim (OpenStreetMap-based geocoding service)
        *   **Justification:** An open-source solution that works seamlessly with OSM data. It allows for converting city/country names to precise latitude/longitude coordinates for marker placement without incurring costs.
    *   **Future Commercial Providers (Upgrade Path):
        *   Mapbox (Preferred)
            *   **Justification:** Offers deep customization capabilities (Mapbox Studio for brand visuals), excellent performance at scale (vector tiles, clustering), and flexible pricing. It provides strong aesthetic alignment with modern web design and could be used when the project scales beyond free-tier limitations or requires advanced styling.
        *   Google Maps Platform
            *   **Justification:** Provides unmatched geocoding accuracy and a rich feature set. Considered for scenarios where precise location data, advanced POI information, or ubiquitous familiarity is paramount, despite higher costs at scale.

3.  Styling & UI

    *   **Styling Framework:** Tailwind CSS (v3.x)
        *   **Justification:** A utility-first CSS framework enabling rapid UI development and ensuring consistent styling that can be meticulously aligned with Espresso brand guidelines derived from the provided Figma source. It minimizes custom CSS, leading to smaller bundle sizes and faster development cycles.

4.  State Management

    *   **Library:** React Context or lightweight libraries like Zustand
        *   **Justification:** For an MVP and short-term growth, React Context provides a built-in, efficient way to manage global state without external dependencies. Zustand offers a lightweight, performant, and unopinionated alternative for more complex local state. Redux will only be considered if state complexity increases significantly, to avoid unnecessary overhead.

5.  Event Data Management

    *   **MVP Data Source:** Manual JSON / Config File (e.g., `public/events.json`)
        *   **Justification:** The quickest and simplest method for MVP delivery, allowing event data to be directly integrated into the repository for easy setup and demonstration.
    *   **Near-term Upgrade:** Google Sheet + API (e.g., Sheety or custom script)
        *   **Justification:** Provides a more user-friendly way for non-developers to manage and update event data without direct code interaction, while still serving data as JSON.
    *   **Long-term Solution:** Headless CMS (e.g., Strapi, Sanity, Notion-as-DB) or CSV Upload / Admin Panel
        *   **Justification:** For scalability and a robust content management workflow, a Headless CMS offers a dedicated interface for editors, version control, and API access. An admin panel for CSV uploads provides another streamlined approach for bulk updates.

6.  Development Tooling & Environment

    *   **Node.js:** v18 LTS
        *   **Justification:** Recommended for its long-term stability and active support, providing a reliable environment for development and build processes.
    *   **Package Manager:** pnpm (preferred) or npm v9+
        *   **Justification:** pnpm is preferred for its efficiency in disk space usage and faster installation times due to its unique linking strategy. npm v9+ serves as a robust fallback if team familiarity with pnpm is limited.
    *   **Build Tool:** Vite (v5.x)
        *   **Justification:** Offers an extremely fast development server and optimized production builds, significantly improving developer experience and deployment efficiency compared to traditional bundlers.
    *   **Linting & Formatting:** ESLint (Airbnb or custom ruleset) + Prettier
        *   **Justification:** Essential for enforcing consistent code style, identifying potential issues early, and maintaining high code quality across the team.
    *   **Testing:** Vitest (preferred) or Jest + React Testing Library
        *   **Justification:** Modern testing frameworks for unit and component tests, ensuring robust code and UI functionality. Vitest is favored for its speed and seamless integration with Vite.

7.  Deployment Strategy

    *   **Primary Options (MVP):** Vercel (preferred) or Netlify
        *   **Justification:** Both platforms offer excellent free tiers, rapid deployment, seamless CI/CD integration for React applications, preview deployments for pull requests, and global CDN distribution for fast loading times.
    *   **Fallback (MVP):** GitHub Pages
        *   **Justification:** A simple and effective solution for hosting static sites, ideal for quick MVP demos with minimal configuration.
    *   **Longer Term:** AWS S3 + CloudFront or Dockerized Build (AWS ECS/Fargate, GCP Cloud Run)
        *   **Justification:** For enterprise-grade scalability, custom hosting requirements, and fine-grained control over infrastructure, these options provide robust and highly available deployment solutions. A CDN is a mandatory requirement for global performance of map tiles and assets.

8.  CI/CD Requirements

    *   **Version Control:** GitHub
        *   **Justification:** Industry-standard for version control, facilitating collaborative development and integrating seamlessly with CI/CD tools.
    *   **CI/CD Provider:** GitHub Actions (default) or GitLab CI/CD
        *   **Justification:** GitHub Actions integrates effortlessly with GitHub repositories and deployment platforms like Vercel/Netlify. GitLab CI/CD is an alternative if the organization is standardized on GitLab.
    *   **Build Workflow:** The CI/CD pipeline will include linting, type-checking, running unit/integration tests, building an optimized production bundle (via Vite), deploying to preview environments for each pull request, and auto-deploying to production upon merging into the main branch.
    *   **Environment Variables:** Secure storage via Vercel/Netlify dashboards or GitHub Secrets.
    *   **Branching Strategy:** GitHub Flow (feature branches -> pull requests -> main).

9.  Performance & Scalability Considerations

    *   **Key Strategies:** The chosen stack supports essential performance optimizations: marker clustering (dynamic aggregation of markers), progressive loading (loading events based on viewport), comprehensive caching (browser cache, service worker), and leveraging CDN for all map tiles and assets. These are critical for handling event volumes from 50-100 (MVP) up to 1,000-2,000+ concurrently while maintaining smooth UX.
    *   **KPIs:** The tech stack aims to meet strict performance KPIs, including initial map load times under 2-4 seconds, pan/zoom latency under 100ms, filter application under 500ms, and consistent 30+ FPS on mobile devices.

10. Accessibility & Browser Support

    *   **Accessibility Standard:** WCAG 2.1 AA compliance (minimum).
        *   **Justification:** Ensures the map is usable by a broad audience, including those with disabilities. The React framework, combined with proper semantic HTML and ARIA attributes (e.g., for keyboard navigation, screen reader support on markers/popups), facilitates this.
    *   **Browser Compatibility:** The application will support the last 2 versions of major desktop browsers (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge Chromium) and mobile browsers (iOS Safari 15+, Chrome on Android 11+, Samsung Internet).
        *   **Justification:** Focuses on modern browser support while implementing progressive enhancement and graceful degradation strategies (e.g., raster tile fallback for older browsers without WebGL) to ensure core functionality across a wide range of user agents.

11. Embedding & Integration

    *   **Preferred Method (if parent site is React/Next.js):** React Component
        *   **Justification:** Allows for seamless styling, shared state management, and full customization within the parent site's codebase, providing the most native user experience.
    *   **Fallback/MVP Demo (for any site):** Iframe Embed
        *   **Justification:** The quickest and most decoupled method for embedding the map into any website, regardless of its underlying technology. Ideal for initial hackathon demos.
    *   **Advanced Option:** Custom Script Injection
        *   **Justification:** Bundles the map as a standalone JavaScript module, allowing it to be dynamically loaded and mounted into a specified DOM element, offering a native feel without requiring a React parent site.
    *   **Communication:** `window.postMessage`, URL parameters, or React props/callbacks will be implemented to enable communication between the embedded map and the parent page, allowing for actions like passing event IDs or triggering parent functions.

12. Future Enhancements & Roadmap

    *   The chosen tech stack (React, TypeScript, modular components, API-ready data handling) is inherently designed for extensibility. It lays a solid foundation for future features such as user accounts, real-time event updates, advanced analytics, multi-language support, enhanced filtering, and external calendar integrations, ensuring minimal architectural rework for planned growth.

## Project Structure
PROJECTSTRUCTURE

This document outlines the file and folder structure for the "Espresso Event Map" project, detailing the purpose of each directory and key files. This structure aims for clarity, maintainability, and scalability, leveraging React with TypeScript, Vite, and Tailwind CSS.



```
.
├── public/
│   ├── index.html
│   ├── events.json
│   └── markers/
│       ├── espresso-cup-upcoming.svg
│       └── espresso-cup-past.svg
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   └── illustrations/
│   │       └── ... (other illustrations)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── map/
│   │   │   ├── EventMap.tsx
│   │   │   ├── EventMarker.tsx
│   │   │   ├── MapPopup.tsx
│   │   │   ├── MapControls.tsx
│   │   │   └── ClusterGroup.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── ToggleSwitch.tsx
│   │   ├── filters/
│   │   │   ├── EventFilters.tsx
│   │   │   ├── EventTypeFilter.tsx
│   │   │   ├── EventStatusFilter.tsx
│   │   │   └── RegionFilter.tsx
│   │   ├── search/
│   │   │   └── SearchBar.tsx
│   │   └── listView/
│   │       ├── EventListView.tsx
│   │       └── EventListItem.tsx
│   ├── context/
│   │   ├── MapContext.tsx
│   │   └── EventDataContext.tsx
│   ├── data/
│   │   └── mockEvents.ts
│   ├── hooks/
│   │   ├── useEvents.ts
│   │   ├── useMapInteractions.ts
│   │   ├── useFilteredEvents.ts
│   │   └── useDebounce.ts
│   ├── lib/
│   │   ├── mapUtils.ts
│   │   ├── apiClient.ts
│   │   └── constants.ts
│   ├── styles/
│   │   ├── index.css
│   │   └── brand.css
│   ├── types/
│   │   ├── event.d.ts
│   │   └── map.d.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   └── main.tsx
├── config/
│   └── mapConfig.ts
├── dist/
├── docs/
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── EVENT_SCHEMA.md
│   └── BRAND_GUIDELINES.md
├── tests/
│   ├── components/
│   │   ├── EventMap.test.tsx
│   │   └── SearchBar.test.tsx
│   ├── hooks/
│   │   └── useFilteredEvents.test.ts
│   └── utils/
│       └── mapUtils.test.ts
├── .env
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── prettier.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
└── vite.config.ts
```



### Directory & File Explanations



**Root Level**

*   `.env`: Environment variables, used for storing API keys (e.g., Mapbox token, if used later) or other sensitive configuration.
*   `.eslintrc.cjs`: Configuration for ESLint, ensuring consistent code quality and style.
*   `.gitignore`: Specifies files and directories that Git should ignore.
*   `package.json`: Contains project metadata, script commands, and lists all dependencies (development and production). `pnpm` is the preferred package manager.
*   `pnpm-lock.yaml`: A lock file generated by `pnpm` to ensure deterministic dependency installations.
*   `prettier.config.js`: Configuration for Prettier, an opinionated code formatter.
*   `README.md`: The main project README, providing an overview, setup instructions, and quick start guide.
*   `tailwind.config.js`: Tailwind CSS configuration file, allowing customization of themes, colors (aligned with Espresso brand), and plugins.
*   `tsconfig.json`: TypeScript compiler configuration, defining how TypeScript files are compiled.
*   `vite.config.ts`: Configuration file for Vite, the build tool, covering development server, build process, and plugins.



**`public/`**
Contains static assets that are served directly by the web server.

*   `index.html`: The main HTML file and the entry point for the single-page application. The React app is injected into this file.
*   `events.json`: (MVP) A static JSON file containing the event data. This is the primary data source for the initial implementation.
*   `markers/`: Directory for custom marker illustrations.
    *   `espresso-cup-upcoming.svg`: Custom SVG icon for upcoming events (e.g., in Espresso brand accent color).
    *   `espresso-cup-past.svg`: Custom SVG icon for past events (e.g., in a neutral, muted tone).



**`src/`**
Contains all the source code for the React application.

*   `main.tsx`: The main entry point of the React application. It mounts the `App` component into the `index.html`.
*   `App.tsx`: The root component of the application, responsible for setting up context providers, basic layout, and routing (if applicable).



**`src/assets/`**
Stores static assets like images, logos, and general illustrations that are not specific to map markers.

*   `logo.svg`: The Espresso brand logo.
*   `illustrations/`: Subdirectory for other brand-specific illustrations or graphics.



**`src/components/`**
Houses reusable React components, organized by their functionality or context.

*   `layout/`: Components related to the overall application structure and page layout.
    *   `Header.tsx`: The application's header, potentially including the logo, title, and navigation.
    *   `Footer.tsx`: The application's footer.
    *   `MainLayout.tsx`: A wrapper component for consistent page structure (e.g., applying global padding or background).
*   `map/`: Components specifically for the interactive map.
    *   `EventMap.tsx`: The core map component, integrating Leaflet/MapLibre GL JS, handling map instantiation and layers.
    *   `EventMarker.tsx`: A component representing a single interactive event marker on the map, handling its rendering and hover/click states.
    *   `MapPopup.tsx`: The component for the detailed information popup that appears when an event marker is clicked.
    *   `MapControls.tsx`: Components for map interactions like zoom in/out, reset view, etc.
    *   `ClusterGroup.tsx`: Handles the logic and rendering for marker clustering, aggregating multiple markers into a single cluster icon when zoomed out.
*   `ui/`: General-purpose, highly reusable UI components.
    *   `Button.tsx`: A generic button component.
    *   `Input.tsx`: A generic input field component (e.g., for search).
    *   `Dropdown.tsx`: A reusable dropdown component (for filters).
    *   `ToggleSwitch.tsx`: A reusable toggle switch (for list/map view or event status).
*   `filters/`: Components for filtering events.
    *   `EventFilters.tsx`: A container component that aggregates all individual filter controls.
    *   `EventTypeFilter.tsx`: Filter for event categories (e.g., conference, hackathon).
    *   `EventStatusFilter.tsx`: Filter to distinguish "upcoming" vs. "past" events.
    *   `RegionFilter.tsx`: Filter by geographical region or continent.
*   `search/`: Components for searching events.
    *   `SearchBar.tsx`: The search input field, potentially with autocomplete functionality.
*   `listView/`: Components for displaying events in a list format, as an alternative to the map.
    *   `EventListView.tsx`: Displays a scrollable list of events.
    *   `EventListItem.tsx`: Represents a single event entry in the list view.



**`src/context/`**
Houses React Context APIs for global state management, avoiding prop drilling.

*   `MapContext.tsx`: Provides map-related state (e.g., current center, zoom level, visible markers) to descendent components.
*   `EventDataContext.tsx`: Provides event data (raw, filtered, etc.) to components that need it, centralizing data fetching and processing.



**`src/data/`**
Contains initial or mock data used during development or for the MVP.

*   `mockEvents.ts`: A TypeScript file containing sample event data, primarily for local development and testing, mirroring the structure of `public/events.json`.



**`src/hooks/`**
Contains custom React hooks for encapsulating reusable logic and stateful behavior.

*   `useEvents.ts`: Hook for fetching event data (from `events.json` initially, or an API later) and managing its loading state.
*   `useMapInteractions.ts`: Hook to abstract complex map interactions like panning, zooming, and dynamic clustering.
*   `useFilteredEvents.ts`: Hook that applies various filters and search queries to the event data.
*   `useDebounce.ts`: A utility hook to debounce user input, typically used with search bars to prevent excessive re-renders.



**`src/lib/`**
Contains utility functions, external library integrations, and constants.

*   `mapUtils.ts`: Map-specific utility functions, such as coordinate transformations, distance calculations, or custom clustering logic.
*   `apiClient.ts`: (Future) A utility for making HTTP requests to an external API for event data, once the project scales beyond static JSON.
*   `constants.ts`: A file for global constants such as default map coordinates, zoom levels, Mapbox/OSM tile URLs, or API endpoints.



**`src/styles/`**
Manages global and component-specific styling.

*   `index.css`: The main CSS entry point, importing Tailwind CSS directives and any base styles.
*   `brand.css`: Specific CSS overrides or custom styles to precisely match the Espresso brand beyond what `tailwind.config.js` provides.



**`src/types/`**
Contains TypeScript declaration files for defining custom types and interfaces.

*   `event.d.ts`: TypeScript interfaces for the `Event` data structure, ensuring type safety when working with event objects.
*   `map.d.ts`: TypeScript interfaces for map-related objects, properties, or state.



**`src/utils/`**
Houses general-purpose utility functions that are not tied to a specific domain like maps or APIs.

*   `helpers.ts`: Miscellaneous helper functions (e.g., date formatting, string manipulation, array operations).



**`config/`**
Contains project-wide configuration settings that might change based on environment or deployment.

*   `mapConfig.ts`: Configuration specific to the map, such as default view, tile providers, attribution, and other map-related settings.



**`dist/`**
This directory is automatically generated by Vite during the build process and contains the optimized, production-ready output of the application. It is not version-controlled.



**`docs/`**
Contains comprehensive project documentation.

*   `README.md`: Project overview, setup, usage (duplicated from root for consistency).
*   `ARCHITECTURE.md`: Detailed explanation of the application's architecture and design patterns.
*   `DEPLOYMENT.md`: Instructions for deploying the application to various environments (Vercel, Netlify, etc.).
*   `EVENT_SCHEMA.md`: A detailed specification of the event data structure (data points, types).
*   `BRAND_GUIDELINES.md`: Reference or summary of Espresso's brand guidelines, especially for visual elements.



**`tests/`**
Contains all unit and integration tests for the application.

*   `components/`: Tests for React components.
    *   `EventMap.test.tsx`: Tests the functionality and rendering of the `EventMap` component.
    *   `SearchBar.test.tsx`: Tests the search bar component's behavior.
*   `hooks/`: Tests for custom React hooks.
    *   `useFilteredEvents.test.ts`: Tests the `useFilteredEvents` hook's filtering and search logic.
*   `utils/`: Tests for general utility functions.
    *   `mapUtils.test.ts`: Tests functions within `mapUtils.ts`.

## Database Schema Design
SCHEMADESIGN

### 1. Introduction

This document outlines the database schema design for the "Espresso event map" project. The primary goal of this schema is to define the structure for storing and retrieving event data, enabling features such as map marker placement, event filtering, search, and detailed information popups. The design prioritizes clarity, flexibility for future growth, and alignment with the specified event data requirements.

### 2. Core Entity: Event

The central entity in this project is an `Event`. This entity encapsulates all necessary information for displaying an event on the map and in associated UI elements (popups, tooltips, list views).

**Table/Collection Name:** `events`

**Description:** Represents a single Espresso event, past or upcoming, with all its associated metadata.

**Fields:**

*   **`id`**
    *   **Data Type:** `UUID` or `Integer` (auto-increment)
    *   **Constraints:** Primary Key, Not Null, Unique
    *   **Description:** A unique identifier for each event. Essential for tracking, editing, and referencing events within the system.
    *   **Example:** `"a1b2c3d4-e5f6-7890-1234-567890abcdef"`
*   **`name`**
    *   **Data Type:** `String`
    *   **Constraints:** Not Null, Max Length (e.g., 255 characters)
    *   **Description:** The official name of the event, displayed prominently on hover tooltips and detail popups.
    *   **Example:** `"Espresso at ETHDenver 2025"`
*   **`datetime_utc`**
    *   **Data Type:** `ISO 8601 DateTime` (e.g., `TIMESTAMP WITH TIME ZONE`)
    *   **Constraints:** Not Null
    *   **Description:** The precise date and time of the event in UTC. Used for accurate time display (localized), and crucial for filtering "upcoming" vs. "past" events.
    *   **Example:** `"2025-09-14T18:00:00Z"`
*   **`city`**
    *   **Data Type:** `String`
    *   **Constraints:** Not Null, Max Length (e.g., 100 characters)
    *   **Description:** The city where the event takes place. Used for quick reference and search functionality.
    *   **Example:** `"Berlin"`
*   **`country`**
    *   **Data Type:** `String`
    *   **Constraints:** Not Null, Max Length (e.g., 100 characters)
    *   **Description:** The country where the event takes place. Used for categorization and potential flag display.
    *   **Example:** `"Germany"`
*   **`latitude`**
    *   **Data Type:** `Decimal` (e.g., `NUMERIC(9,6)` or `FLOAT`)
    *   **Constraints:** Not Null, Range (-90.0 to 90.0)
    *   **Description:** The geographical latitude coordinate for accurate map marker placement.
    *   **Example:** `52.5200`
*   **`longitude`**
    *   **Data Type:** `Decimal` (e.g., `NUMERIC(9,6)` or `FLOAT`)
    *   **Constraints:** Not Null, Range (-180.0 to 180.0)
    *   **Description:** The geographical longitude coordinate for accurate map marker placement.
    *   **Example:** `13.4050`
*   **`venue_address`**
    *   **Data Type:** `String`
    *   **Constraints:** Nullable, Max Length (e.g., 500 characters)
    *   **Description:** The specific venue name and/or street address. Provides practical information for attendees.
    *   **Example:** `"Berlin Congress Center, Alexanderstra§e 11"`
*   **`description_short`**
    *   **Data Type:** `String`
    *   **Constraints:** Nullable, Max Length (e.g., 500 characters)
    *   **Description:** A brief, 1-2 sentence overview of the event. Used in popups for quick context.
    *   **Example:** `"Espresso hosted a builders' workshop on modular rollups at the main stage."`
*   **`type`**
    *   **Data Type:** `Enum` (`String` with predefined values)
    *   **Constraints:** Not Null, Permitted Values: `conference`, `hackathon`, `meetup`, `workshop`
    *   **Description:** Categorizes the event, enabling filtering and potentially color-coding or distinct marker icons.
    *   **Example:** `"hackathon"`
*   **`status`**
    *   **Data Type:** `Enum` (`String` with predefined values)
    *   **Constraints:** Not Null, Permitted Values: `past`, `upcoming`
    *   **Description:** Indicates the temporal status of the event, primarily for visual distinction (e.g., faded pins for past, glowing for upcoming). While derivable from `datetime_utc`, an explicit status simplifies UI logic.
    *   **Example:** `"upcoming"`
*   **`external_link_url`**
    *   **Data Type:** `URL` (`String`)
    *   **Constraints:** Nullable, Max Length (e.g., 2048 characters)
    *   **Description:** A URL linking to more information, registration, or a recap of the event.
    *   **Example:** `"https://espresso.systems/events/ethdenver-2025"`
*   **`thumbnail_url`**
    *   **Data Type:** `URL` (`String`)
    *   **Constraints:** Nullable, Max Length (e.g., 2048 characters)
    *   **Description:** A URL to an optional image (e.g., event logo, photo) for richer information cards.
    *   **Example:** `"https://espresso.systems/assets/ethdenver-thumbnail.jpg"`

### 3. Relationships

For the MVP, this schema is largely flat, with the `Event` entity being self-contained. There are no explicit foreign key relationships to other tables. The `type` and `status` fields are represented as enums, meaning their valid values are defined within the schema itself rather than referencing a separate lookup table.

### 4. Enums / Lookup Values

*   **`event.type`**:
    *   `conference`
    *   `hackathon`
    *   `meetup`
    *   `workshop`
*   **`event.status`**:
    *   `past`
    *   `upcoming`

### 5. Logical vs. Physical Schema (Data Management)

This schema represents the **logical structure** of event data. For the MVP, the **physical implementation** will primarily involve storing this data in a flat JSON file (e.g., `public/events.json`). This approach is suitable for quick deployment and easy updates.

As the project scales, this logical schema can be seamlessly mapped to more robust physical storage solutions as outlined in the "event_data_management" strategy:

*   **Google Sheet + API:** Each row in the sheet will correspond to an `Event` record, with columns mapping to the fields defined above.
*   **Headless CMS (e.g., Strapi, Sanity):** The CMS will define a content type (e.g., "Event") with fields matching this schema.
*   **Relational Database (e.g., PostgreSQL, MySQL):** A table named `events` would be created with columns corresponding to each field and appropriate data types (e.g., `VARCHAR` for strings, `DECIMAL` for coordinates, `TIMESTAMP WITH TIME ZONE` for dates, and database-specific `ENUM` types).

### 6. Future Schema Evolution

The schema is designed to be extensible to accommodate future enhancements:

*   **User Accounts & Favorites:**
    *   A new `User` table would be introduced.
    *   A `UserEventFavorite` (or similar) table would link `User.id` to `Event.id` (Many-to-Many relationship).
*   **Advanced Analytics:**
    *   Additional fields might be added to `Event` (e.g., `attendee_count_estimate`, `community_impact_score`).
    *   Separate analytics tables might track user interactions (e.g., `EventClickLog`).
*   **Multi-Language Support:**
    *   For event names and descriptions, a `localized_name` and `localized_description_short` field (perhaps a JSONB/Map type, or a separate `EventLocalization` table) would be required.
*   **Richer Media:**
    *   If multiple images or videos are needed per event, a separate `EventMedia` table could be created, linking `Event.id` to multiple media assets (URLs, captions, types).

This foundational `Event` schema provides a clear, robust structure that can evolve with the Espresso event map's functionality and scale.

## User Flow
**USERFLOW**

**Introduction**
The Espresso Event Map is designed to provide an interactive and visually engaging experience for users to discover past and upcoming Espresso events worldwide. The user flows outlined below detail the primary interactions and journeys users will undertake, emphasizing a seamless and intuitive experience aligned with the Espresso brand. Each flow integrates visual cues, micro-interactions, and detailed information presentation.

---

**1. Primary User Journey: Discovering Upcoming Events**

This flow focuses on a user (e.g., a community member, developer) looking for relevant, current information about Espresso's presence in their region.

**1.1. Initial Map Load (Global Overview)**
*   **User Action:** Navigates to the Espresso World Map section of the website.
*   **System Response:**
    *   Map loads, displaying a global overview of all Espresso events (Initial render with 100 events: <2 seconds on desktop, <3 seconds on 4G mobile).
    *   **Marker Rendering:**
        *   **Upcoming Events:** Displayed with custom illustrated Espresso cup/pin icons in the **Espresso brand accent color** (e.g., warm orange or gold), fully opaque, and slightly larger than past events to attract immediate attention.
        *   **Past Events:** Displayed with the same custom illustrated Espresso cup/pin icons but in a **neutral tone** (e.g., light gray or muted brown) and with lower opacity (60–70%) to visually de-emphasize them.
    *   **Marker Clustering:** Densely populated areas will show **marker clusters** (e.g., a circle with a number indicating clustered events) to maintain map readability.
    *   Map controls (zoom in/out, reset view to global) are visible and functional.
    *   Filtering and Search UI elements (e.g., "Event Type", "Status", "Search by location/name") are present, typically positioned at the top or side of the map container.
*   **Wireframe Description:** Full-width interactive map component. Clusters appear as branded circles with event counts. Filters and search bar are clearly identifiable in the surrounding UI.

**1.2. Filtering for "Upcoming Events"**
*   **User Action:** Clicks the "Status" filter dropdown/button and selects "Upcoming".
*   **System Response:**
    *   **Micro-Interaction:** Markers corresponding to "Past Events" smoothly fade out (transition ~300ms) rather than disappearing abruptly. "Upcoming Events" markers remain highlighted.
    *   **Map Adjustment:** The map auto-adjusts (zoom/pan) to fit the newly visible markers if the event distribution significantly changes (e.g., fewer events, different geographic spread).
    *   The companion list view (if visible) updates to show only upcoming events.
    *   Filtering results update within <500ms.
*   **Wireframe Description:** Filter UI updates to show "Upcoming" as the active selection. Map visually de-clutters to show only future events.

**1.3. Searching for a Specific Location (e.g., "Seoul")**
*   **User Action:** Types "Seoul" into the search bar.
*   **System Response:**
    *   **Micro-Interaction:** As the user types, autocomplete suggestions appear below the search bar (suggestions in <300ms).
    *   User selects "Seoul" from the suggestions or presses Enter.
    *   **Micro-Interaction:** The map animates a smooth pan and zoom (\~500ms duration) to center on the selected location (Seoul).
    *   If multiple events exist in Seoul at the current zoom level, they will be displayed as individual markers or a local cluster.
*   **Wireframe Description:** Search bar dynamically displays suggestions. Map view transitions smoothly to the searched location.

**1.4. Interacting with an Event Marker (Hover & Click)**
*   **User Action: Hover over an "Upcoming" marker (e.g., "Espresso Meetup Seoul").**
*   **System Response:**
    *   **Micro-Interaction:** The marker subtly scales up (e.g., 1.1x its size) with a subtle glow or outline in brand color (transition ~150ms).
    *   **Tooltip Preview:** A lightweight tooltip fades in (within <200ms), displaying minimal, essential information:
        *   Event Name (e.g., "Espresso Meetup Seoul")
        *   City + Date (short format, e.g., "Seoul, Oct 2025")
    *   The tooltip disappears on mouse out.
*   **User Action: Click the "Upcoming" marker.**
*   **System Response:**
    *   **Micro-Interaction:** The clicked marker animates (e.g., a bounce or pulse once).
    *   **Micro-Interaction:** The map pans smoothly to center the clicked marker.
    *   **Active/Selected State:** The marker grows larger (e.g., 1.2x) with a persistent glow or highlight, indicating its active state.
    *   **Event Detail Popup:** A rich info card slides/fades in above the marker (transition ~200-250ms), anchored to it. Only one popup can be open at a time.
        *   **Content:** Event Name (headline), Full Date/Time (localized), City, Country, Venue/Address, Short Description (1–2 sentences), Event Type (tag/pill), External Link (button: “Learn More” / “Register”), Thumbnail (optional).
*   **Wireframe Description:** Tooltip appears on hover. Popup card is anchored above the clicked marker, containing structured event details and a clear CTA button.

**1.5. Closing Popups & Navigating**
*   **User Action:** Reads the event details in the popup. Clicks the "Register" button.
*   **System Response:** Opens the external registration link (e.g., event registration page) in a new browser tab.
*   **User Action:** Clicks outside the popup, presses ESC, or clicks another marker.
*   **System Response:**
    *   The currently open popup closes smoothly (fade/slide-down effect).
    *   The previously selected marker returns to its default (or hover) state.
    *   Clicking another marker immediately closes the current popup and opens a new one for the newly clicked marker.

**1.6. Toggling to List View (Optional)**
*   **User Action:** Clicks a "List View" toggle button (e.g., in the header or next to map controls).
*   **System Response:**
    *   The map view may minimize or be replaced by a scrollable list of events, offering an alternative display for all currently filtered events.
    *   The list displays events with basic details (name, date, location), sortable by **date** or **location**.
    *   Clicking an event in the list should either:
        *   Highlight and center the corresponding marker on the map (if the map is still visible).
        *   Open the full event detail popup within the list view itself.
*   **Wireframe Description:** A toggle button (e.g., "Map" / "List"). List view displays event cards with sorting options.

---

**2. Secondary User Journey: Reviewing Past Global Events**

This flow caters to users (e.g., prospective partners, press, media) interested in Espresso's historical presence and global reach to understand traction and credibility.

**2.1. Initial Map Load (Same as 1.1)**
*   **User Action:** Navigates to the map.
*   **System Response:** Global map loads, showing both upcoming and past events. Past events appear visually muted/faded by default.

**2.2. Filtering for "Past Events"**
*   **User Action:** Clicks the "Status" filter dropdown/button and selects "Past".
*   **System Response:**
    *   **Micro-Interaction:** Markers for "Upcoming Events" smoothly fade out. "Past Events" markers become the primary visible markers (still muted in their default style, but not faded out as a filtered set).
    *   Map may auto-adjust to focus on the historical distribution.
    *   List view updates to show only past events.
*   **Wireframe Description:** Similar to 1.2, but "Past" is the active filter, and map displays the historical footprint.

**2.3. Exploring Geographically & Interacting with Past Markers**
*   **User Action:** Pans and zooms across different continents to explore historical event locations.
*   **System Response:**
    *   **Micro-Interaction:** Map pans and zooms smoothly (latency <100ms), even on mid-tier mobile devices.
    *   **Marker Clustering:** Clusters dynamically adjust (in <200ms), expanding into individual past event markers as the user zooms in on a specific region.
    *   **Micro-Interaction:** Hovering over a past event marker triggers the same scale-up and tooltip preview as for upcoming events.
    *   **Micro-Interaction:** Clicking a past event marker triggers the same bounce/pulse and centers the map.
    *   **Event Detail Popup:** A popup slides in, displaying event details. The external link button for past events would likely be "Recap" or "Read Blog Post" rather than "Register".
*   **Wireframe Description:** Map interaction with responsive clustering. Popups for past events will feature a "Recap" CTA.

---

**3. Advanced Exploration & Dynamic Filtering**

This flow highlights the flexibility of the map for users with specific discovery needs or for broader data analysis.

**3.1. Combining Multiple Filters (e.g., "Upcoming" + "Hackathon" + "Europe")**
*   **User Action:**
    1.  Selects "Upcoming" from "Status" filter.
    2.  Selects "Hackathon" from "Event Type" filter.
    3.  Selects "Europe" from "Region" filter.
*   **System Response:**
    *   Each filter application triggers a smooth fade out/in of markers that no longer match the criteria (transition ~300ms).
    *   The map auto-adjusts (pan/zoom duration ~300ms) to focus on the currently visible events (e.g., only upcoming hackathons in Europe).
    *   The list view dynamically updates with each filter application. Filtering performance is kept within <500ms.
*   **Wireframe Description:** Multiple active filter selections are clearly indicated. Map dynamically updates its displayed markers and view to reflect the refined criteria.

**3.2. Using Search to Jump to a Region or Find Specific Event Types**
*   **User Action:** User types a broader term like "Germany" or an event type like "Workshop" in the search bar.
*   **System Response:**
    *   Autocomplete suggests relevant locations or event names. User selects from suggestions.
    *   Map animates a pan and zoom to the center of the searched area (e.g., Germany), displaying all events within that country that match current filters.
    *   If no events match the search and current filters, a clear "No events found" message will appear in the search results area and/or list view.
*   **Wireframe Description:** Search input and map reaction to both specific and broad search terms.

**3.3. Interacting with Marker Clusters During Zoom**
*   **User Action:** User sees a cluster (e.g., "5 Events") in a high-density area (e.g., North America). Zooms in using the map controls or scroll wheel.
*   **System Response:**
    *   **Micro-Interaction:** The cluster smoothly expands, dissolving into individual event markers as the zoom level crosses a predefined density threshold. This dynamic adjustment happens rapidly (in <200ms).
    *   If zooming out, individual markers will coalesce back into clusters to maintain map clarity and performance.
    *   Pan/zoom latency remains under 100ms, ensuring a fluid user experience.
*   **Wireframe Description:** Clusters are rendered as circles with event counts. Smooth transitions reveal individual markers upon zooming, and vice-versa.

---

**4. User Value Realization through Flow Design**

These user flows are crafted to directly address the primary user goals:

*   **Community Members:** Flows 1 and 3 allow quick discovery of relevant upcoming events, fostering engagement and a sense of global connection ("Can I join an event near me?").
*   **Prospective Partners & Collaborators:** Flow 2 provides concrete, visual proof of Espresso's global traction and momentum, enabling them to assess seriousness and reach ("Is Espresso actually active globally?").
*   **Press, Media & Analysts:** Flow 2 offers a clear visual timeline and geographic context for coverage, enhancing credibility and providing verifiable data for stories ("Where can I source info for coverage?").
*   **Espresso's Internal Team:** All flows contribute to a robust, brand-aligned tool for showcasing impact and tracking outreach, useful for presentations, pitches, and internal strategy ("Can we showcase our global presence beautifully?").

The interactive nature, clear visual distinctions (past vs. upcoming), engaging micro-interactions, and rich detail popups ensure that users can quickly find, understand, and act upon event information, enhancing their overall experience and perception of Espresso's dynamic global activity.

## Styling Guidelines
STYLING

This section outlines the styling guidelines and UI/UX principles for the "Espresso event map" project. The goal is to create an interactive map that is visually appealing, highly usable, and seamlessly integrated with the existing Espresso brand identity, as defined in the provided Figma source. All visual elements, interactions, and user flows must prioritize clarity, engagement, and adherence to Espresso's design system.

## 1. Brand Alignment & Design System Principles

**Core Principle:** The Espresso event map must be an extension of the Espresso brand. All design decisions will refer to the official Espresso brand guidelines and the Figma source (`https://www.figma.com/design/p0dZ2mgZBjnxD8OYNBt2P2/`) for definitive brand tokens, colors, typography, and component styles.

**Key Principles:**
*   **Consistency:** Maintain a unified visual language across all map elements and interactions.
*   **Clarity:** Information should be presented clearly and concisely, with visual hierarchies guiding the user's attention.
*   **User-Centric:** Design decisions are driven by user needs and accessibility standards, ensuring an intuitive and satisfying experience.
*   **Performance:** Visuals and animations should enhance, not hinder, the map's performance and responsiveness.

## 2. Color Palette

The color palette will be derived directly from the Espresso brand guidelines, with specific applications for map elements:

*   **Primary Brand Accent Color:** A "warm orange or gold" will be used to highlight key interactive elements, such as upcoming event markers, hover states, and active selections.
*   **Neutral Tones:** Light grays, muted browns, or off-whites will be used for past event markers, backgrounds, and de-emphasized UI elements.
*   **Semantic Colors:**
    *   **Success/Highlight:** Used sparingly for positive feedback or successful actions.
    *   **Warning/Error:** Used for critical feedback (e.g., data loading issues).
*   **Text Colors:** A dark, high-contrast color for primary text, with lighter shades for secondary information. Tooltips will use dark backgrounds with light text for readability.
*   **Backgrounds:** Clean, minimal backgrounds to allow map data and markers to stand out.

**Reference:** Exact hex codes and usage definitions are available in the Figma source.

## 3. Typography

Typography will be consistent with the Espresso brand, ensuring readability and visual hierarchy.

*   **Font Family:** (To be specified based on Figma source, e.g., Inter, Open Sans, or a custom brand font).
*   **Headlines (Event Names):** Larger, bolder weights for prominent display in popups and list view.
    *   H1 (Map Title): (e.g., 28px/bold)
    *   H2 (Event Name in Popup): (e.g., 20px/semibold)
*   **Body Text:** Standard font size and weight for descriptions and general information (e.g., 16px/regular).
*   **UI Elements:** Slightly smaller sizes for filters, labels, and metadata (e.g., 14px/medium).
*   **Line Height & Letter Spacing:** Optimized for readability across various screen sizes.

**Implementation:** Typography styles will be implemented using Tailwind CSS utility classes, pre-configured with Espresso's brand tokens.

## 4. Iconography & Imagery

### 4.1. Marker Design
Custom illustrated markers are central to the map's visual identity.

*   **Shape:** An "espresso cup or pin" icon will be used.
*   **Event Status Distinction:**
    *   **Upcoming Events:**
        *   **Marker:** Espresso cup or pin in **Espresso brand accent color** (e.g., warm orange or gold).
        *   **Style:** Fully opaque, slightly larger than past events.
        *   **Purpose:** Stand out, attract attention, and indicate immediate relevance.
    *   **Past Events:**
        *   **Marker:** Same shape (espresso cup or pin) in a **neutral tone** (e.g., light gray or muted brown).
        *   **Style:** Lower opacity (60–70%) to visually fade into the background, ensuring visibility without overwhelming current events.
        *   **Purpose:** Still visible for credibility but de-emphasized.

### 4.2. Marker States

1.  **Default State:** Static illustrated icon, distinguished by event status (upcoming vs. past) and color/opacity as described above.
2.  **Hover State:**
    *   **Animation:** Subtle scale up (e.g., 1.1x) with a smooth transition (150ms).
    *   **Visual:** Subtle glow or outline in the primary brand accent color.
    *   **Information:** Tooltip preview showing event name and short date/city.
3.  **Active/Selected State:**
    *   **Animation:** Marker grows larger (e.g., 1.2x) with a persistent glow/highlight.
    *   **Visual:** Persistent glow or highlight in the primary brand accent color.
    *   **Information:** A corresponding popup card is anchored to the marker.

### 4.3. UI Icons
Standard icon sets (e.g., heroicons, lucide-react) will be used for filters, search, zoom controls, and other UI elements, ensuring consistency and quick recognition. Icons will be styled to match the Espresso brand's color palette.

### 4.4. Event Thumbnails (Optional)
Popups can display an optional thumbnail image (event logo, group photo) if media data is available, adding visual richness to the event details.

## 5. UI Components & Interaction Design

### 5.1. Map Basemap

*   **Style:** The map basemap will be clean and minimalistic, using muted colors to ensure that custom event markers are the primary visual focus. Water bodies, landmasses, and major country borders should be clearly discernible without being distracting.
*   **Source:** For the MVP, OpenStreetMap-based tiles will be used. If migrating to Mapbox, a custom basemap style will be designed in Mapbox Studio to perfectly match Espresso's brand aesthetics.

### 5.2. Popups & Tooltips

#### Tooltip (Hover State)
*   **Content:** Lightweight, minimal information (Event Name, City + Date in short format).
*   **Appearance:** Appears on marker hover, disappears on mouse out.
*   **Style:** Dark background with light text for optimal readability against various map tiles.
*   **Animation:** Fades in smoothly with short text (150ms).

#### Popup (Click State)
*   **Content:** Rich info card anchored to the clicked marker.
    1.  **Event Name** (headline)
    2.  **Full Date/Time** (localized)
    3.  **City, Country, Venue/Address**
    4.  **Short Description** (1–2 sentences)
    5.  **Event Type** (tag/pill styling)
    6.  **External Link** (button: “Learn More” / “Register” / “Recap”)
    7.  **Thumbnail (optional)** if media available
*   **Behavior:**
    *   Only one popup can be open at a time.
    *   Clicking outside the popup or on another marker closes the current popup and opens the new one.
*   **Animation:** Slides/fades in above the marker (approx. 200–250ms).

### 5.3. Filtering & Search Controls

*   **Appearance:** Filter buttons and search input will be styled cleanly, using brand-aligned colors for active states and clear labels.
*   **Dropdowns:** Consistent dropdown styling for filter options.
*   **Search Autocomplete:** Suggestions will appear in a clean, scrollable list below the search input.

### 5.4. List View

*   A companion list view will be available, either alongside or below the map.
*   **Styling:** Events in the list will follow a clear card-like structure, using Espresso's typography and color palette.
*   **Sorting:** Clear visual indicators for sorting options (e.g., by date, location).
*   **Synchronization:** Selecting an event in the list should highlight its marker on the map and vice-versa.

## 6. Micro-Interactions & Animations

Animations are subtle and purposeful, enhancing user feedback without distraction.

*   **On Marker Hover:**
    *   Smooth scale/zoom effect (1.1x, 150ms duration).
    *   Tooltip fades in (150ms).
*   **On Marker Click:**
    *   Marker animates (e.g., bounce or pulse once).
    *   Map pans smoothly to center the clicked marker.
    *   Popup card slides/fades in above marker (200-250ms).
*   **On Filter Application:**
    *   Markers fade out/in rather than disappearing abruptly (approx. 300ms transition).
    *   Map auto-adjusts (zoom/pan) smoothly to fit visible markers.
*   **On Search / Region Jump:**
    *   Animated pan + zoom to the location (approx. 500ms duration for smoothness).
*   **Clustering:** Dynamic adjustment of clusters on zoom/pan (within 200ms).

## 7. Layout & Responsiveness

The map will be designed with a mobile-first approach, ensuring optimal experience across all devices.

*   **Breakpoints:** Standard breakpoints will be used (e.g., mobile, tablet, desktop).
*   **Flexible Layout:** Map will dynamically adjust to available screen space.
*   **Mobile-Specific Enhancements:**
    *   Larger touch targets for markers and UI controls.
    *   Condensed layout for filters and search.
    *   List view toggle prominently placed for easy switching on smaller screens.
*   **Technology:** Tailwind CSS will be used for rapid development of responsive styles.

## 8. Accessibility & Usability (WCAG 2.1 AA Compliance)

Accessibility is paramount to ensure the map is usable by all individuals.

*   **Keyboard Navigation:** All interactive elements (markers, filters, search bar, list view toggle, popups) must be fully navigable and operable via keyboard (Tab, Enter, Arrow keys).
*   **Screen Reader Support:**
    *   Comprehensive ARIA labels for markers, popups, filters, and other interactive elements (e.g., “Espresso Event – Berlin, Past Event, June 2023, Click for details”).
    *   Semantic HTML will be used for structure.
*   **Color Contrast:** All UI elements, especially text and interactive components, must meet WCAG 2.1 AA contrast ratio requirements (minimum 4.5:1 for normal text).
*   **Non-Color Distinction:** The distinction between "Past" and "Upcoming" events will not rely solely on color. Differences in opacity, size, and ARIA labels will also convey status.
*   **Zoom & Scaling:** The interface must support text scaling up to 200% without layout breakage or loss of functionality.
*   **Motion Sensitivity:** Animations and transitions will be subtle and will respect the user's "prefers-reduced-motion" system setting, offering a reduced animation experience when enabled.
*   **Focus Management:** Clear visual focus indicators will be provided for keyboard users.
*   **Tooltips/Popups:** Must be dismissible via keyboard (e.g., Esc key) and remain accessible for screen readers.

This styling guide, combined with the Espresso brand guidelines, will ensure a cohesive, accessible, and high-quality user experience for the Espresso event map.
