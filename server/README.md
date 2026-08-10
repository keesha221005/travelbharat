# TravelBharat — Backend API

Node.js + Express + Sequelize + MySQL backend for the TravelBharat travel guide platform.

## Tech Stack
- **Runtime:** Node.js + Express
- **Database:** MySQL (via Sequelize ORM)
- **Auth:** JWT (admin routes only)
- **Image storage:** Cloudinary
- **Validation:** express-validator

## 1. Prerequisites
- Node.js 18+
- MySQL 8+ running locally or remotely
- A free [Cloudinary](https://cloudinary.com) account (for image uploads)

## 2. Setup

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env` and fill in:
- `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT` — your MySQL credentials
- `JWT_SECRET` — any long random string
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — from your Cloudinary dashboard

Create the database (Sequelize won't create the database itself, only tables):

```sql
CREATE DATABASE travelbharat CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 3. Run migrations & seeders

```bash
npm run migrate   # creates all tables
npm run seed       # seeds categories + a default super admin
```

Default super admin (change the password immediately after first login):
- **Email:** admin@travelbharat.com
- **Password:** ChangeMe123!

## 4. Start the server

```bash
npm run dev    # development, with nodemon + auto model sync
npm start      # production
```

API will be running at `http://localhost:5000`. Health check: `GET /api/health`.

## 5. API Overview

### Public routes
| Method | Route | Description |
|---|---|---|
| GET | `/api/states` | List all states |
| GET | `/api/states/:slug` | State details + its cities |
| GET | `/api/cities?state=slug` | List cities, optionally filtered by state |
| GET | `/api/cities/:slug` | City details + published places |
| GET | `/api/categories` | List categories |
| GET | `/api/places?state=&city=&category=&search=&page=&limit=` | Search/filter published places |
| GET | `/api/places/:slug` | Full place detail (images, nearby attractions) |

### Admin routes (require `Authorization: Bearer <token>`)
| Method | Route | Description |
|---|---|---|
| POST | `/api/admin/auth/login` | Login, returns JWT |
| GET | `/api/admin/auth/me` | Current admin profile |
| POST/PUT/DELETE | `/api/admin/states(/:id)` | Manage states |
| POST/PUT/DELETE | `/api/admin/cities(/:id)` | Manage cities |
| POST/PUT/DELETE | `/api/admin/categories(/:id)` | Manage categories |
| POST/PUT/DELETE | `/api/admin/places(/:id)` | Manage places (created as `draft`) |
| PATCH | `/api/admin/places/:id/verify` | Publish a place (super_admin only) |
| POST | `/api/admin/places/:id/images` | Upload images (multipart field: `images`, up to 10) |
| DELETE | `/api/admin/places/:placeId/images/:imageId` | Remove an image |
| POST | `/api/admin/places/:id/nearby` | Link a nearby attraction |

## 6. Notes on design decisions

- **Slugs** are auto-generated and guaranteed unique for states, cities, categories, and places — this locks in clean SEO-friendly URLs from day one.
- **Places have a `status` field** (`draft` → `published` → `archived`), with `created_by` / `verified_by` / `verified_at` tracked — this is the content moderation workflow from the PRD.
- **Latitude/longitude are stored on every place** even though the map UI isn't built yet, so no schema migration is needed later when you add it.
- **Role-based access:** `editor` admins can create/edit places, but only `super_admin` can verify (publish) them — a lightweight two-step moderation flow.
- In development, `server.js` calls `sequelize.sync({ alter: true })` for convenience. **Always use migrations in production** — remove/guard that line before deploying.

## 7. Next steps
- Scaffold the React/Next.js frontend (public site + admin panel)
- Add a `translations` table if multilingual support becomes a priority
- Add rate limiting (`express-rate-limit`) before deploying publicly
