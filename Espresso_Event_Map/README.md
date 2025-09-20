## Getting Started

### Prerequisites
- Node.js 18+

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
App will open on `http://localhost:3000`.

### Build
```bash
npm run build
npm run preview
```
Preview runs a static server to inspect the production build.

## Project Structure (key files)
- `src/App.jsx`: Main layout composing header, map, events, footer
- `src/components/Header.jsx`: Top navigation with social links
- `src/components/Map.jsx`: Placeholder map and markers
- `src/components/EventCard.jsx`: Reusable card for events
- `src/components/Footer.jsx`: Footer with links
- `src/data/events.js`: Hardcoded dataset
- `tailwind.config.js`: Extended espresso palette
- `src/index.css`: Tailwind base/components/utilities and CSS variables

 Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari 15+, Chrome on Android 11+
- **Progressive Enhancement**: Graceful degradation for older browsers

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **High Contrast**: WCAG 2.1 AA compliant color ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` system setting
- **Focus Management**: Clear visual focus indicators throughout

## Performance

- **Initial Load**: <3s on 4G mobile, <2s on desktop broadband
- **Interactions**: Sub-100ms response times for map operations
- **Bundle Optimization**: Code splitting and tree shaking
- **Image Optimization**: WebP support with fallbacks

## Scaling Beyond MVP

The current implementation uses static JSON for event data. To scale:

1. **Google Sheets Integration**: Connect to live spreadsheet
2. **Headless CMS**: Implement Strapi, Sanity, or similar
3. **Custom API**: Build dedicated event management backend
4. **Mapbox Migration**: Upgrade to Mapbox for advanced styling

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

For questions or issues:
- Create a GitHub issue
- Email: developers@espresso.systems
- Documentation: [Full technical docs](docs/)

---

**Built with ❤️ by the Espresso Systems team**
