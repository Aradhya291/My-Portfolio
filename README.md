# Aradhya Yadav — AI & Machine Learning Engineer Portfolio

A modern, high-performance full-stack portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and a **Python Flask AI Backend**, optimized for tech recruiters and hiring managers.

Featuring production AI case studies, live interactive Multi-Agent MoE inference simulator, AWS certifications, and 1-click resume downloads.

---

## ⚡ Quick Start (Local Development)

### 1. Run the Frontend:
```bash
cd "C:\Users\HP\.gemini\antigravity\scratch\portfolio"
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. (Optional) Run the Python Flask Backend Locally:
```bash
# In a separate terminal window:
python api/index.py
```
The Flask API runs at [http://localhost:5000](http://localhost:5000).

*(Note: If the Flask API is offline, the interactive frontend playground automatically falls back to an intelligent client-side evaluator, guaranteeing seamless uptime).*

To test building for production:
```bash
npm run build
```

---

## 🚀 Free Deployment to Vercel

Vercel natively supports both Vite frontend assets and Python Serverless functions (`api/index.py`) on its **100% free tier** with zero configuration!

### Option 1: GitHub + Vercel (Recommended — Automatic Continuous Deployment)

1. Create a new repository on your GitHub account ([github.com/new](https://github.com/new)) named `portfolio`.
2. Push your local repository to GitHub:
   ```bash
   cd "C:\Users\HP\.gemini\antigravity\scratch\portfolio"
   git branch -M main
   git remote add origin https://github.com/Aradhya291/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and sign in for free with your GitHub account.
4. Click **"Add New..."** -> **"Project"**.
5. Select your `portfolio` repository from the list.
6. Vercel will automatically detect:
   - Framework: **Vite**
   - Output Directory: `dist`
   - Serverless Functions: **Python (`api/index.py`)** via `vercel.json`
7. Click **"Deploy"**.
8. In ~20 seconds, your site is live with a free custom URL: `https://<your-project>.vercel.app`. Every `git push` automatically rebuilds both the frontend and the Flask serverless backend.

---

### Option 2: Direct CLI Deployment via Vercel CLI

Run:
```bash
cd "C:\Users\HP\.gemini\antigravity\scratch\portfolio"
npx vercel
```
Follow the login prompt and accept the default settings to deploy directly.

---

## 🏗️ Architecture & Features

- **Python Flask Serverless Backend**: Located in `api/index.py` with `requirements.txt`. Provides:
  - `GET /api/health`: Health status, runtime details, and available agents.
  - `POST /api/forecast`: Real-time Multi-Agent policy forecast simulator (Inflation, Labor, GDP, Financial Markets agents).
  - `POST /api/contact`: Form submission handler.
- **Interactive AI Playground**: Interactive UI widget allowing recruiters to test macroeconomic statements against the 6-agent Mixture-of-Experts engine.
- **Resume Asset**: Directly bundles `Aradhya_Yadav_Resume_Genai.pdf` so recruiters can download the PDF with one click.
- **Featured Projects**:
  1. *Multi-Agent Mixture-of-Experts (MoE) Policy Forecasting Engine* with live Streamlit dashboard link.
  2. *AI-Based Early Anomaly Detection System (IoT & Server Infrastructure)* (<2s latency, 94% accuracy).
  3. *Teaching Taste to AI using Deep Learning* (ANN & RDKit, 88% validation accuracy).
- **Credentials & Achievements**: 5 AWS & AI certifications, BCA/MCA degrees, and UIC Chess Championship honors.
