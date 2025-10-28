# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Environment Variables** (if using EmailJS)
   - Go to Project Settings > Environment Variables
   - Add:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_USER_ID`

4. **Custom Domain** (optional)
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Alternative Deployment Options

### Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `.next`

### AWS Amplify

1. Push code to GitHub
2. AWS Amplify Console
3. Connect repository
4. Amplify will auto-detect Next.js

### Docker (Self-hosted)

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check 3D scene performance
- [ ] Test contact form (if configured)
- [ ] Verify all links work
- [ ] Check resume PDF downloads
- [ ] Test social media links
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

## Continuous Deployment

Once connected to Vercel/Netlify:
- Every push to `main` branch triggers automatic deployment
- Pull requests create preview deployments
- Rollback to previous deployments if needed

## Performance Optimization

After deployment, monitor:
- Page load times
- Core Web Vitals
- Bundle size
- API response times

Use Vercel Analytics or Google Analytics to track performance.

## Troubleshooting

**Build fails:**
- Check Node.js version (requires 18+)
- Verify all dependencies installed
- Check for TypeScript errors

**3D scene not loading:**
- Check browser console for errors
- Verify Three.js dependencies
- Test on different devices

**Contact form not working:**
- Verify EmailJS credentials
- Check environment variables
- Test email delivery

## Support

For issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Three.js Documentation](https://threejs.org/docs)
