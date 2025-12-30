<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<h1 align="center">💹 FinPulse</h1>

<p align="center">
  <strong>A Premium Financial News Aggregator</strong><br/>
  Real-time market data, curated news from top Indian financial sources
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## ✨ Features

🔴 **Breaking News Alerts** — Stay updated with real-time breaking financial news with visual prominence

📊 **Live Market Ticker** — Track SENSEX, NIFTY, Bank NIFTY, USD/INR, Gold, Crude Oil, Bitcoin & Ethereum

📰 **Multi-Source Aggregation** — News from Financial Express, LiveMint, Business Today, Economic Times, Moneycontrol, Bloomberg Quint & more

🎯 **Smart Categories** — Filter by Markets, Economy, Stocks, Crypto, Personal Finance, Industry, Global & Opinion

🔍 **Instant Search** — Find articles by title, content, source, or category with debounced search

📱 **Slide-out Article Reader** — Read full articles in an elegant drawer without leaving the main feed

🌙 **Dark Mode Design** — Premium glassmorphism aesthetics with smooth animations

📧 **Newsletter Subscription** — Email validation and subscription functionality

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18.3, TypeScript 5 |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Build Tool** | Vite 5 |
| **State** | React Query (TanStack) |
| **Routing** | React Router DOM 6 |
| **Icons** | Lucide React |
| **Fonts** | Inter, Outfit (Google Fonts) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/stranger0407/Financehub.git

# Navigate to project directory
cd Financehub

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8081`

### Build for Production

```bash
npm run build
npm run preview
```

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Homepage with Breaking News
- Live market ticker with real-time data
- Breaking news section with visual urgency indicators
- Featured articles grid

### Article Drawer
- Slide-out panel for reading articles
- Full article content with hero image
- Share and save functionality

### Category Filtering
- Filter news by category
- Search across all articles
- Trending sidebar with top stories

</details>

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── Header.tsx      # Navigation with search
│   ├── MarketTicker.tsx # Live market data ticker
│   ├── CategoryTabs.tsx # Category filter tabs
│   ├── BreakingNews.tsx # Breaking news banner
│   ├── NewsCard.tsx    # Article card component
│   ├── ArticleDrawer.tsx # Slide-out article reader
│   ├── TrendingSidebar.tsx # Trending & newsletter
│   └── Footer.tsx      # Site footer
├── pages/
│   ├── Index.tsx       # Main homepage
│   └── ArticleDetail.tsx # Article detail page
├── data/
│   └── newsData.ts     # Mock data & types
├── hooks/
│   └── use-debounce.ts # Custom debounce hook
├── lib/
│   ├── security.ts     # Input validation utilities
│   └── utils.ts        # Helper functions
└── App.tsx             # Root component with routing
```

## 🎨 Design Features

- **Glassmorphism Effects** — Frosted glass cards with subtle borders
- **Smooth Animations** — Fade-in, slide-up, and scale transitions
- **Color-coded Sources** — Each news source has a unique brand color
- **Responsive Grid** — Adapts from 1-3 columns based on screen size
- **Micro-interactions** — Hover effects on cards and buttons

## 🔒 Security

- Input sanitization for search queries
- Email validation for newsletter
- Safe color validation for dynamic styles
- XSS prevention in user-generated content display

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/stranger0407">stranger0407</a>
</p>
