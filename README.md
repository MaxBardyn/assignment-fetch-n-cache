# Fetch 'n' Cache

A Rick and Morty character search app with smart caching built with React 19, TypeScript, and TanStack React Query v5.

🔗 **Live demo:** [maxbardyn.github.io/assignment-fetch-n-cache](https://maxbardyn.github.io/assignment-fetch-n-cache/)

## Features

- Search characters by numeric ID
- Instant display from cache — no network request if character was fetched before
- Cached characters list on the right with scroll support
- Click a cached character to display it immediately
- Remove individual characters from cache via the ✕ button
- Clear entire cache with **Clear All**
- Cache persists across page reloads (localStorage)
- Automatic cache invalidation after 1 minute

## Tech Stack

- React 19 + TypeScript
- Vite
- MUI v9
- TanStack React Query v5

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Enter a numeric character ID into the search field
2. Click **Search** or press **Enter**
3. The character details and image will appear on the left
4. The character thumbnail is added to the cache list on the right
5. Click any cached thumbnail to display that character instantly
6. Hover a thumbnail and click **✕** to remove it from the cache
7. Click **Clear All** to remove all cached characters

## Caching Details

- Cache is stored in `localStorage` under keys prefixed with `tanstack-query`
- Data is considered fresh for **1 minute** — within this window no network request is made
- After 1 minute data is refetched transparently in the background
- History list (the right-side thumbnails) is stored separately under `character-search-history`
- So small 1 minute cache was set for easier testing
