# TravelBharat — Frontend

Next.js 14 (App Router) + Tailwind CSS frontend for the TravelBharat travel guide.

## Design concept

A **digital gazetteer** — India's old cartographic survey volumes, reimagined for the web.
States are browsed alphabetically (like a real gazetteer index), not as an arbitrary carousel.
Palette, type, and structural choices are documented in `tailwind.config.js`.

- **Palette:** marble paper background, ink navy text, madder red primary accent, turmeric gold + teal for category coding
- **Type:** Fraunces (display serif) + Work Sans (body) + IBM Plex Mono (data labels — fees, timings, coordinates)

## Setup

```bash
cd client
npm install
cp .env.local.example .env.local
```

Make sure `NEXT_PUBLIC_API_URL` in `.env.local` points at your running backend
(default: `http://localhost:5000/api`).

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero + alphabetical state index |
| `/states/[slug]` | State detail — its cities |
| `/cities/[slug]` | City detail — its published places |
| `/places/[slug]` | Place detail — gallery, quick facts, map, nearby attractions |
| `/search` | Filter by search term, category, state |
| `/admin/login` | Admin sign-in (uses backend JWT) |
| `/admin/dashboard` | List places, verify/publish, delete |
| `/admin/places/new` | Create a new place (saved as draft) |

Default admin login (seeded on the backend): `admin@travelbharat.com` / `ChangeMe123!`

## Known limitations / next steps

- The admin dashboard currently lists **published** places only, since it calls the
  public `GET /api/places` endpoint. To manage drafts too, add a
  `GET /api/admin/places` endpoint on the backend that returns all statuses, and
  swap the dashboard's fetch call to use it (with the admin token).
- Image upload isn't wired into the admin UI yet — images can be uploaded via
  `POST /api/admin/places/:id/images` (multipart) using a tool like Postman, or by
  adding a file input + `FormData` submit to the new-place form.
- No pagination controls on `/search` yet — the backend already supports
  `page`/`limit`, just needs "load more" or page buttons added.
- No admin UI yet for creating states/cities (only places) — needed before
  place creation is fully usable end-to-end.
- The admin dashboard only lists **published** places (see note above) — add
  a `GET /api/admin/places` backend route to also surface drafts.

## Map (Leaflet)

`/places/[slug]` renders an interactive map (OpenStreetMap tiles via Leaflet)
whenever a place has `latitude`/`longitude` set. No API key needed. The map
is loaded as a client-only component (`components/PlaceMap.js` →
`PlaceMapClient.js`) since Leaflet requires the browser `window` object,
which isn't available during server-side rendering.
