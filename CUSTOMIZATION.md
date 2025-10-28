# Customization Guide

This guide will help you personalize your portfolio with your own information.

## 📝 Step-by-Step Customization

### 1. Personal Information

**File: `src/lib/constants.ts`**

Update these values:
```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
};
```

### 2. Hero Section

**File: `src/components/Hero/HeroOverlay.tsx`**

Update line 21-22:
```typescript
Hi, I'm <span className="text-accent glow-text">Your Name</span>
```

Update lines 31-32 (your tagline):
```typescript
Your Title • Your Skills • Your Passion
```

### 3. About Page Bio

**File: `src/app/about/page.tsx`**

Update line 58:
```typescript
<h2 className="text-3xl font-bold">Hi, I'm Your Name</h2>
```

Update lines 60-74 with your personal story and bio.

### 4. Projects Data

**File: `src/data/projects.json`**

Replace the placeholder projects with your actual projects:

```json
[
  {
    "id": "unique-project-id",
    "title": "Project Title",
    "description": "Short description (1-2 lines)",
    "longDescription": "Detailed description (optional)",
    "thumbnail": "/images/projects/project-name.jpg",
    "tech": ["React", "Node.js", "MongoDB"],
    "demo": "https://your-demo.com",
    "github": "https://github.com/you/project",
    "category": "Web Development",
    "featured": true
  }
]
```

**Add project images:**
- Create images (1200x630px recommended)
- Save in `public/images/projects/`
- Update `thumbnail` path in JSON

### 5. Experience Data

**File: `src/data/experience.json`**

Replace with your work experience:

```json
[
  {
    "id": "exp-1",
    "role": "Your Role",
    "company": "Company Name",
    "companyUrl": "https://company.com",
    "location": "City, Country or Remote",
    "startDate": "2023-01",
    "endDate": "2024-12",
    "current": false,
    "description": [
      "Key achievement or responsibility 1",
      "Key achievement or responsibility 2",
      "Key achievement or responsibility 3"
    ],
    "technologies": ["Tech1", "Tech2", "Tech3"]
  }
]
```

**Date Format:** `YYYY-MM`
**Current Role:** Set `"current": true` and `"endDate": ""` for your current position

### 6. Skills Data

**File: `src/data/skills.json`**

Update with your skills:

```json
[
  {
    "id": "skill-1",
    "name": "React",
    "category": "frontend",
    "proficiency": 90
  }
]
```

**Categories:**
- `"frontend"` - Frontend technologies
- `"backend"` - Backend technologies
- `"tools"` - Development tools
- `"other"` - AI/ML, databases, etc.

**Proficiency:** 0-100 (percentage for progress bar)

### 7. Resume/CV

Replace `public/resume.pdf` with your own resume:
```bash
# Delete the placeholder
rm public/resume.pdf

# Add your resume (must be named resume.pdf)
cp /path/to/your/resume.pdf public/resume.pdf
```

### 8. Metadata & SEO

**File: `src/app/layout.tsx`**

Update lines 7-8:
```typescript
title: 'Your Name — Your Title',
description: 'Portfolio of Your Name — Your specializations and skills',
```

Update keywords on line 9 with relevant terms for your work.

### 9. Social Media Links

Already updated in `constants.ts` (see step 1).

Footer and contact page will automatically use these values.

### 10. Color Theme (Optional)

If you want to change colors:

**File: `src/app/globals.css`** (lines 4-9):
```css
:root {
  --bg-primary: #0D0D0D;
  --bg-secondary: #1A1A1A;
  --accent: #00ADB5;        /* Change this for different accent color */
  --text-primary: #EEEEEE;
  --text-secondary: #B0B0B0;
}
```

**File: `tailwind.config.js`** (lines 10-15):
Update the same colors to match.

### 11. Favicon

Replace `public/favicon.svg` with your own icon or logo.

Recommended: Use [realfavicongenerator.net](https://realfavicongenerator.net/) to generate all favicon formats.

## 🎨 Advanced Customization

### Modify 3D Scene

**File: `src/components/Hero/Scene.tsx`**

- Change the 3D object (line 24-26)
- Adjust colors, lighting, particle count
- Modify rotation speed and camera position

### Custom Animations

**Framer Motion** is used throughout. You can adjust:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing
- `whileHover` - Hover effects

Example in any component:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Add New Pages

1. Create `src/app/newpage/page.tsx`
2. Add to navigation in `src/lib/constants.ts`:
   ```typescript
   { label: 'New Page', href: '/newpage' }
   ```

## 🖼️ Images & Assets

### Project Thumbnails
- **Size:** 1200x630px (16:9 ratio)
- **Format:** JPG or PNG
- **Location:** `public/images/projects/`
- **Optimization:** Use [tinypng.com](https://tinypng.com/) to compress

### Profile Picture (Optional)
If you want to add a photo to About page:
1. Add image to `public/images/profile.jpg`
2. Update `src/app/about/page.tsx` line 44-51 to use Next.js Image:
   ```typescript
   <Image
     src="/images/profile.jpg"
     alt="Your Name"
     width={400}
     height={400}
     className="rounded-full"
   />
   ```

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All personal information updated
- [ ] Real projects and experience added
- [ ] Resume PDF uploaded
- [ ] All social media links correct
- [ ] Images optimized and added
- [ ] Contact email working
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Check for console errors
- [ ] Lighthouse score 90+

## 🆘 Need Help?

- Check existing examples in the data files
- Refer to component comments
- Test locally after each change: `npm run dev`
- Check browser console for errors

## 📊 Content Tips

**Projects:**
- Add 4-8 projects
- Mark best ones as `"featured": true`
- Include diverse project types
- Add live demos when possible

**Experience:**
- Use action verbs in descriptions
- Quantify achievements when possible
- List relevant technologies used
- Keep most recent/relevant experiences

**Skills:**
- Group by category
- List 10-20 key skills
- Be honest with proficiency levels
- Include in-demand technologies

---

**Remember:** This is YOUR portfolio. Make it reflect your personality and style!
