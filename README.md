# Mummiji - Daily Pooja

A mobile-first static Hindu pooja website for daily family use. It is designed to feel like a premium mobile app while staying simple enough to open directly from `index.html` or host on GitHub Pages.

## Features

- Daily weekday-based deity, offering, mantra and checklist
- Live date and time
- Upcoming festival countdown
- Monthly calendar with today and festival highlighting
- Chalisa, Aarti, Mantra and Stotram reader
- Large-font reading mode, dark mode and bookmarks
- Reminder saved in browser LocalStorage
- Static JSON files for future data updates
- No React, npm, backend or database

## Files

- `index.html` - home dashboard
- `calendar.html` - monthly calendar
- `read.html` - devotional reader
- `festival.html` - festival and vrat guide
- `settings.html` - comfort and preference settings
- `style.css` - shared responsive design system
- `script.js` - shared app behavior
- `data/` - JSON data files
  - `festivals.json` - 2026 and 2027 Hindu festival dates
  - `ekadashi.json` - 2026 Ekadashi dates and tithi timings
- `images/` - local visual assets

## Run

Open `index.html` in any modern browser.

For GitHub Pages, upload the full folder and set Pages to serve from the repository root.

## Future Ready

The structure is prepared for Panchang API data, notifications, bhajans, voice reading, offline support, PWA setup and an AI assistant without changing the core navigation.
