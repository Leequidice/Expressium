# Deployment Guide

This guide covers deploying the Espresso Event Map to various hosting platforms.

## Prerequisites

- Node.js 18+ installed locally
- Project built successfully (`npm run build`)
- Environment variables configured (if needed)

## Vercel (Recommended)

### Automatic Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/espresso-event-map.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects the Vite configuration
   - Deploy automatically

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Build and Deploy**:
   ```bash
   npm run build
   vercel --prod
   ```

### Environment Variables

In Vercel dashboard, add environment variables:
- `VITE_MAPBOX_ACCESS_TOKEN` (if using Mapbox)
- `VITE_API_BASE_URL` (for future API integration)

## Netlify

### Drag & Drop Deployment

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Visit [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area
   - Site will be live immediately

### Git Integration

1. **Connect Repository**:
   - New site from Git
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment Variables**:
   - Site settings → Environment variables
   - Add your environment variables

## GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add script to package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

4. **Enable Pages**:
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

## Self-Hosted / VPS

### Using Docker

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t espresso-event-map .
   docker run -p 80:80 espresso-event-map
   ```

### Using Nginx

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Copy files to web server**:
   ```bash
   scp -r dist/* user@server:/var/www/html/
   ```

3. **Nginx configuration**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Enable gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript;
   }
   ```

## AWS S3 + CloudFront

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket**:
   - Enable static website hosting
   - Upload `dist` contents
   - Set bucket policy for public read

3. **Setup CloudFront**:
   - Create distribution pointing to S3 bucket
   - Configure custom error page (404 → index.html)
   - Enable gzip compression

## Performance Optimizations

### Build Optimizations

- **Code splitting**: Automatic with Vite
- **Tree shaking**: Remove unused code
- **Asset optimization**: Minify CSS/JS, optimize images

### Deployment Optimizations

- **CDN**: Use CloudFront, Cloudflare, or similar
- **Compression**: Enable gzip/brotli compression
- **Caching**: Set appropriate cache headers
- **HTTP/2**: Enable on your server

### Monitoring

- **Lighthouse**: Check performance scores
- **Web Vitals**: Monitor Core Web Vitals
- **Error tracking**: Use Sentry or similar
- **Analytics**: Google Analytics or Plausible

## Troubleshooting

### Common Issues

1. **404 on refresh**: Configure server for SPA routing
2. **Environment variables not working**: Ensure `VITE_` prefix
3. **Map tiles not loading**: Check CORS and attribution
4. **Build fails**: Check Node.js version and dependencies

### Debug Commands

```bash
# Check build output
npm run build && npm run preview

# Type checking
npm run type-check

# Lint issues
npm run lint

# Bundle analysis
npx vite-bundle-analyzer dist
```

## Security Considerations

- **API keys**: Never expose in client-side code
- **HTTPS**: Always use HTTPS in production
- **CSP headers**: Implement Content Security Policy
- **Dependency scanning**: Regular security audits

---

For additional help, refer to the hosting platform's specific documentation or create an issue in the project repository.
