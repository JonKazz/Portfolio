# Quick Deployment Guide

## 🚀 Get Your Portfolio Online in 5 Minutes

### Option 1: GitHub Pages (Recommended for Students)

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up with your KU email

2. **Create New Repository**
   - Click "New repository"
   - Name it: `portfolio`
   - Make it Public
   - Don't initialize with README (we already have one)

3. **Upload Your Files**
   ```bash
   # In your Portfolio folder, run these commands:
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"

5. **Your portfolio is live at:**
   `https://YOUR_USERNAME.github.io/portfolio`

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag your entire Portfolio folder to the deploy area
4. Your site is live instantly!

### Option 3: Vercel (One Click)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"

## 🔧 Test Locally First

Before deploying, test your portfolio locally:

1. **Double-click `index.html`** - Opens in your browser
2. **Or use Python server:**
   ```bash
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

## 📝 Customize Before Deploying

1. **Update `index.html`:**
   - Change "Project Name 1" to your actual project names
   - Update project descriptions
   - Add your real GitHub links
   - Update contact information

2. **Update `styles.css` (optional):**
   - Change colors if you want
   - Adjust fonts
   - Modify spacing

## 🌐 After Deployment

1. **Share your portfolio URL** on:
   - LinkedIn
   - Resume
   - Job applications
   - Social media

2. **Keep it updated** with new projects

3. **Add analytics** (optional):
   - Google Analytics
   - GitHub Pages analytics

## 🆘 Need Help?

- **GitHub Pages Issues:** Check [GitHub Pages documentation](https://pages.github.com/)
- **Netlify Issues:** Check [Netlify docs](https://docs.netlify.com/)
- **Vercel Issues:** Check [Vercel docs](https://vercel.com/docs)

---

**Your portfolio will be live in minutes! 🎉** 