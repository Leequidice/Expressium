# Expressium

A minimalist online showroom that serves as a curated gallery for displaying creative works, community projects, and artworks. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a vibrant Fluent-inspired color palette.

## Features

### Core Functionality
- **Responsive Gallery System** - Grid, masonry, and list layouts with advanced filtering
- **Interactive Lightbox** - Full-screen artwork viewing with metadata and navigation
- **Advanced Search & Filtering** - By category, tags, artist, and keywords
- **Curated Collections** - Thematic exhibitions and artist showcases
- **Artist Profiles** - Dedicated pages for creators and their works
- **Spotlight System** - Community-curated featured works

### Design & User Experience
- **Minimalist Aesthetic** - Clean typography, generous whitespace, gallery-like feel
- **Vibrant Color Palette** - Modern gradients inspired by Fluent Design System
- **Smooth Animations** - Subtle micro-interactions and hover states
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Accessibility** - WCAG compliant with keyboard navigation support

### Technical Architecture
- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom Fluent color configuration
- **Lucide React Icons** for consistent iconography
- **Mock Data System** for development and demo purposes
- **Performance Optimized** with lazy loading and image optimization

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd expressium
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.template .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/app/
├── _components/          # Reusable UI components
│   ├── gallery/         # Gallery-specific components
│   │   ├── ArtworkCard.tsx
│   │   ├── GalleryGrid.tsx
│   │   └── LightboxModal.tsx
│   ├── filters/         # Search and filter components
│   │   └── FilterBar.tsx
│   ├── layout/          # Layout components
│   │   └── Navigation.tsx
│   └── SpotlightSection.tsx
├── _lib/                # Utilities and data
│   ├── mock-data.ts     # Demo data
│   └── utils.ts         # Helper functions
├── _types/              # TypeScript definitions
│   └── index.ts
├── gallery/             # Gallery page
├── collections/         # Collections page
├── artists/             # Artists page
├── about/               # About page
├── contact/             # Contact page
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx            # Homepage
```

## Color Palette

The design uses a vibrant color palette inspired by Fluent Design:

- **Blue**: `#3700FF` - Primary brand color
- **Pink**: `#FF8FDA` - Secondary accent 
- **Spring Green**: `#32FE6B` - Success states
- **Jonquil Yellow**: `#EECD07` - Highlights
- **Cyan**: `#49EDED` - Information
- **Murrey**: `#8B0142` - Dark accent

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Adding New Content

The app uses mock data during development. To add new artworks or artists, edit the files in `src/app/_lib/mock-data.ts`.

### Customizing Design

The color palette and design tokens can be modified in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global styles and CSS variables

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Roadmap

### Phase 1 (Current)
- ✅ Core gallery functionality
- ✅ Responsive design
- ✅ Basic filtering and search
- ✅ Artist and collection pages

### Phase 2 (Planned)
- [ ] User authentication system
- [ ] CMS integration (Sanity.io)
- [ ] Advanced curation tools
- [ ] Social sharing features
- [ ] Performance analytics

### Phase 3 (Future)
- [ ] Mobile app
- [ ] API for third-party integrations
- [ ] Advanced search with AI
- [ ] Community features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by Are.na, Dia Art Foundation, and Frieze
- Color palette based on Fluent Design System
- Typography using Inter font family
- Icons provided by Lucide React