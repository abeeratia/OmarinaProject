# Omarina - Red Sea Exploration Platform

A high-performance, modern web application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. This project showcases a premium travel and boat rental experience with a focus on clean architecture, reusable components, and exceptional UI/UX.

## 🚀 Key Features
- **Modern UI/UX**: Premium aesthetic with glassmorphism, smooth animations, and a sleek dark/light theme integration.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop using Tailwind's mobile-first approach.
- **Dynamic Swiper Integration**: Customized testimonial and luxury trip carousels using `Swiper.js`.
- **Search Functionality**: Interactive search interface for trips and boats.
- **Glassmorphism Navbar**: A sophisticated, floating navigation bar with backdrop blur effects.

## 🛠 Tech Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and better developer experience.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with advanced custom tokens and utilities.
- **Slider/Carousel**: [Swiper.js](https://swiperjs.com/)
- **Icons**: Custom SVG icons and Lucide-inspired patterns.

## 🏗 Architectural Highlights (Clean Code & Best Practices)

### 1. Reusable Component Pattern
I followed the **Atomic Design** principles by splitting the UI into small, reusable components:
- `Container`: Centralized layout wrapper to maintain consistent spacing and max-widths.
- `SectionHeading`: Standardized component for headings and subtexts across all sections.
- `CustomSwiper`: A highly flexible wrapper for Swiper.js, allowing easy reuse for different data types.

### 2. Centralized Type Management (TypeScript)
All data structures and interfaces (`Trip`, `Testimonial`, `NavLink`, `Boat`, `Category`) are strictly defined in a single, centralized location: `types/index.ts`. This ensures:
- **Global Type Safety**: Consistent data structure throughout the entire application.
- **Improved Maintainability**: Changes to data models are made in one place and propagate everywhere.
- **Strict Linting**: Preventing runtime errors by enforcing full type coverage on all API-like data and component props.

### 3. Clean CSS & Global Theming
Leveraged **Tailwind CSS 4** variables in `globals.css` for a centralized theme system:
- `shadow-bottom`: Custom shadow tokens for a consistent card lift effect.
- Color palettes defined as variables for easy updates across the whole project.
- Global swiper/css fixes to ensure shadow visibility and smooth transitions.

### 4. Optimized Assets & Data Management
- **Centralized Data**: All static content is managed in `constants/data.ts` for clean separation of concerns.
- **Image Optimization**: Used `next/image` for automatic optimization and prevention of layout shifts.

## 📂 Project Structure
```text
├── app/               # Next.js App Router (Pages, Layouts, Globals)
├── components/        # Reusable UI components
│   ├── home/          # Section-specific components (Hero, LuxuryTrips, etc.)
│   ├── layout/        # Navbar and Footer
│   └── ui/            # Base atomic components (Buttons, Inputs, Containers)
├── constants/         # Centralized static data for easy content management
├── types/             # TypeScript interfaces and types
└── public/            # Static assets (SVGs, Images)
```
