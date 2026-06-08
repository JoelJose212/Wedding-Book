# WeddingBook

A stunning, modern wedding photography platform homepage called **WeddingBook** — built as a UI-only, highly interactive React + Vite web application.

---

## 🛠️ Tech Stack

This project is built using a modern, lightweight, and high-performance frontend tech stack:

| Layer | Technology | Details / Usage |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Powers the component-driven structure and dynamic state management (e.g. slider pagination, mobile navigation toggle). |
| **Build Tool** | **Vite** | Modern, fast developer environment & bundling engine for production builds. |
| **Styling** | **Vanilla CSS** | Structured with CSS Custom Properties (Design Tokens), flexbox, grid layouts, and custom scrollbars for responsive designs. |
| **Animations** | **CSS Transitions + Intersection Observer** | Triggers slick fade-in and slide animations on scroll, featuring stagger delays between sibling components. |
| **Typography** | **Google Fonts** | `Cormorant Garamond` (elegant headings) & `Inter` (highly legible body text). |
| **Media Assets** | **Local Images & Unsplash** | Blends custom local media assets (`sara_john.jpg`, `alice_bob.jpg`, `meera_arjun.jpg`) with high-resolution curated photography. |

---

## 🌟 Key Features
- 🧭 **Dynamic Navbar**: Fixed header that transitions from transparent to solid white with bottom shadows when scrolled. Collapses into an animated slide-down hamburger menu on mobile devices.
- 🎞️ **Cinematic Hero Slider**: Full-viewport slider with a customized crossfade duration, timeline progress indicator, sliding background name overlays, arrow navigation, and a synced vertical preview strip.
- 📸 **Photographer & Portfolio Credits**: Includes photographer avatar icons, name tags, location trackers, and dedicated call-to-actions.
- ✨ **Micro-Animations**: Intersection Observer-based staggered fade-in animations that make the page feel reactive and polished.
- 🛡️ **WeddingBook Difference Section**: Clean 4x2 interactive card grid showcasing platform features with smooth tilt/lift hover feedback.
- 👣 **Detailed Footer**: Responsive multi-column layout with circular social icons, legal disclosures, and extensive sitemap links.

---

## 🚀 Setup & Running Locally

Follow these instructions to run the project on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JoelJose212/Wedding-Book.git
   cd Wedding-Book
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Compile Production Bundle**:
   ```bash
   npm run build
   ```
