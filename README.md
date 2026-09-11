# Aradhya Yadav — AI & Machine Learning Engineer Portfolio

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, optimized for recruiters and technical hiring managers.

Featuring production AI case studies, live demo links, AWS certifications, and one-click resume downloads.

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Navigate to the project directory
cd "C:\Users\HP\.gemini\antigravity\scratch\portfolio"

# 2. Run local development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

To build for production:
```bash
npm run build
```

---

## 🚀 Free Deployment to Vercel

You can deploy this portfolio completely **FREE** on Vercel using either of the following two options:

### Option 1: GitHub + Vercel (Recommended — Automatic Updates)

1. Create a new repository on your GitHub account ([github.com/new](https://github.com/new)) named `portfolio` or `ai-ml-portfolio`.
2. Push this local repository to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Aradhya291/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
4. Click **"Add New..."** -> **"Project"**.
5. Select your `portfolio` repository from the list.
6. Framework Preset will automatically detect **Vite**. Keep defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **"Deploy"**.
8. In ~20 seconds, your site will be live at `https://your-project-name.vercel.app`! Every time you `git push`, Vercel will rebuild and update automatically.

---

### Option 2: Direct CLI Deployment via Vercel CLI

Run the following command in this directory:
```bash
npx vercel
```
- It will prompt you to log in to Vercel (free account).
- Select default options by pressing Enter.
- In seconds, it will give you a live production URL!

---

## 📄 Included Assets & Features

- **Resume PDF Integration**: Pre-bundled at `/Aradhya_Yadav_Resume_Genai.pdf` and `/resume.pdf` for instant 1-click recruiter downloads.
- **Production Projects**:
  1. *Multi-Agent Mixture-of-Experts (MoE) Policy Forecasting Engine* with live Streamlit dashboard link.
  2. *AI-Based Early Anomaly Detection System (IoT & Server Infrastructure)* (<2s latency, 94% accuracy).
  3. *Teaching Taste to AI using Deep Learning* (ANN & RDKit, 88% validation accuracy).
- **Credentials**: 5 AWS & AI certifications, education milestones, and chess championship honors.
- **Recruiter Contact**: 1-click email copy with feedback state, mailto composer, and direct LinkedIn & GitHub links.
