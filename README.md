# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Features

- **Interactive 3D Hero Section** with React Three Fiber
- **Responsive Design** - Works perfectly on all devices
- **Dark Theme** with custom color palette
- **Smooth Animations** using Framer Motion
- **SEO Optimized** with proper meta tags
- **Fast Performance** with Next.js 14
- **Contact Form** integration ready
- **Accessible** - WCAG compliant

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** React Three Fiber + Drei
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   - EmailJS credentials (for contact form)
   - Site URL
   - Analytics ID (optional)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── projects/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/            # React components
│   ├── Hero/
│   ├── ui/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── data/                  # JSON data files
│   ├── projects.json
│   ├── experience.json
│   └── skills.json
├── lib/                   # Utilities
│   ├── constants.ts
│   └── helpers.ts
└── types/                 # TypeScript types
    └── index.ts
```

## 🎨 Customization

### Update Personal Information

1. **Data Files**: Edit JSON files in `src/data/`
   - `projects.json` - Your projects
   - `experience.json` - Work experience
   - `skills.json` - Your skills

2. **Constants**: Update `src/lib/constants.ts`
   - Name, email, social links

3. **Resume**: Replace `public/resume.pdf` with your resume

### Color Theme

The color palette is defined in:
- `src/app/globals.css` (CSS variables)
- `tailwind.config.js` (Tailwind colors)

Default colors:
- Primary: `#0D0D0D` (Deep black)
- Secondary: `#1A1A1A` (Card backgrounds)
- Accent: `#00ADB5` (Teal/cyan)
- Text Primary: `#EEEEEE`
- Text Secondary: `#B0B0B0`

## 📧 Contact Form Setup

To enable the contact form:

1. **Create a free EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Get your credentials**:
   - Service ID
   - Template ID
   - User ID (Public Key)

3. **Add to `.env.local`**

4. **Uncomment the EmailJS code** in `src/app/contact/page.tsx`

Alternative: Use a serverless API route with your preferred email service.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Add environment variables** in Vercel dashboard

4. **Deploy** - Your site will be live!

### Other Platforms

The site can also be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any platform supporting Next.js

## ⚡ Performance Tips

- Images are optimized using Next.js Image component
- 3D scene is disabled on mobile devices to save resources
- Code splitting with dynamic imports
- Lazy loading for heavy components

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Semantic HTML
- Color contrast compliance
- Focus indicators

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Prat. - [your.email@example.com](mailto:your.email@example.com)

Portfolio: [https://yourportfolio.vercel.app](https://yourportfolio.vercel.app)

---

**Built with ❤️ using Next.js and Three.js**
