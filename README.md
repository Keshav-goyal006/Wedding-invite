# Wedding Invitation Website

A polished, single-page wedding invitation experience built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The site is designed to feel elegant and intimate, with animated sections for the invite reveal, countdown, event schedule, and gallery-style visuals.

## Overview

This project presents a digital wedding invitation for Manvi & Saujanay with a warm, romantic aesthetic. It highlights the celebration through:

- an animated invitation reveal
- a live countdown to the wedding date
- separate morning and evening event sections
- a decorative gallery experience
- a soft, premium visual design

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure

```text
src/
  App.tsx
  animations.ts
  index.css
  main.tsx
  components/
    Countdown.tsx
    FloatingNav.tsx
    Gallery.tsx
    Hero.tsx
    MusicToggle.tsx
    RsvpForm.tsx
    Timeline.tsx
  data/
    invitation.ts
```

## Features

- Elegant hero experience with an envelope-style opening animation
- Countdown timer to the event date
- Structured timeline for wedding events
- Responsive, card-based layout with rich motion effects
- Centralized content for easy updates

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Content Configuration

Wedding details and copy are stored in [src/data/invitation.ts](src/data/invitation.ts), making it easy to update the event name, date, quote, and schedule details.

## Notes

The project is already buildable and currently compiles successfully. Some enhancements can still be made, such as integrating the music toggle with real audio, expanding RSVP functionality, and improving accessibility.

## License

This project is for personal / demo use and is not currently licensed.
