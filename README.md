# 🧠 AI Test Paper Generator  
**Generate BISE-compliant, print-ready exam papers in seconds — not hours.**

A full-stack AI system built for schools, academies, and education startups in Pakistan.  
Create professional **question papers, OMR sheets, and answer keys** — all instantly, beautifully formatted, and ready to print.  

---

## ✨ Features

- ⚡ **17-Second Paper Generation** — Upload syllabus PDFs, pick chapters, and get full exam sets instantly.  
- 🧾 **Complete Exam Package** — Auto-generated DOCX paper, OMR sheet, and answer key in a single ZIP.  
- 🔒 **Secure & Verifiable** — Access-controlled generation with audit logs and no leak window.  
- 🎓 **Curriculum-Aligned** — Designed for **BISE Lahore / PTB 2025** pattern with Urdu + English support.  
- 🖥️ **Lightweight Front-End** — Built with React + Tailwind for seamless, step-by-step creation.  
- ⚙️ **Powerful Backend** — FastAPI + AI inference with caching, validation, and document packaging.  
- ☁️ **Cloud & Offline Modes** — Works online or offline; heavy AI runs on our GPUs for instant results.

---

## 🧩 Architecture Overview

```text
User → Frontend (React)
          ↓
   Backend (FastAPI)
          ↓
    Gemini-powered AI
          ↓
    PDFs + OMR Outputs
