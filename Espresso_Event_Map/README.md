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
