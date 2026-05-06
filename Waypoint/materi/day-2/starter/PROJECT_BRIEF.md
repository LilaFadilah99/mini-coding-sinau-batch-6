# Waypoint — Project Brief

> File ini adalah **rangkuman hasil fase Planning** (Day 1).
> Berisi semua keputusan tentang Waypoint: visi, user, fitur, design system, dan aturan kerja dengan AI.
>
> **Setiap kali kamu prompt AI untuk Waypoint, lampirkan file ini sebagai konteks utama.**
> AI yang baca file ini akan paham bayangan keseluruhan project sebelum mulai nulis kode.

---

## 1. Visi & Tujuan

**Waypoint** adalah travel planner berbasis AI yang membantu traveler pemula merencanakan perjalanan secara otomatis dalam hitungan detik.

**Tujuan utama:** memangkas waktu riset itinerary dari berjam-jam (manual) jadi kurang dari 1 menit (AI generated).

---

## 2. Target User

**Persona utama:** Solo traveler pemula yang baru pertama kali ke luar negeri.

- **Pain point:** ribet riset destinasi, hotel, dan aktivitas dari nol
- **Motivasi:** dapat itinerary lengkap dan realistis tanpa harus jadi expert
- **Behavior:** akses dari laptop & HP, prefer interface yang clean & tidak ribet

---

## 3. Fitur MVP (Minimum Viable Product)

### Must-Have (versi pertama)

- [ ] Form quick planner (destinasi, days, budget, interests)
- [ ] AI generate itinerary (Google Gemini API)
- [ ] Save trip ke `localStorage`
- [ ] Browse popular destinations (grid 4 cards)
- [ ] Modal AI Planner (detail mode)
- [ ] Loading state saat AI generate
- [ ] Responsive (desktop, tablet, mobile)

### Nice-to-Have (versi berikutnya, BUKAN sekarang)

- Sharing trip ke social media
- Upload foto trip
- Peta interaktif
- User authentication & cloud sync
- Multi-bahasa

---

## 4. Tech Stack

| Layer | Teknologi | Alasan |
|---|---|---|
| Frontend | HTML5 + CSS3 + JavaScript ES6+ (vanilla, tanpa framework) | Fundamental, tanpa build step, ringan |
| Backend | Vercel Serverless Functions (Node.js) | Deploy gratis, scaling otomatis |
| AI | Google Gemini API (`gemini-2.5-flash`) | Free tier, output cepat |
| Storage | Browser `localStorage` | Tidak butuh database untuk MVP |
| Fonts | Plus Jakarta Sans (Google Fonts) | Modern, friendly, support karakter Indonesia |
| Deploy | Vercel | Setup <30 menit, integrasi GitHub |

---

## 5. Design System

> **PENTING:** Pakai semua nilai di bagian ini sebagai **single source of truth**.
> Saat prompt AI, larang dia mengarang warna atau spacing di luar daftar ini.

### Warna

| Token | Hex | Pemakaian |
|---|---|---|
| `--color-accent` | `#8bff66` | Tombol primer, highlight (neon green khas Waypoint) |
| `--color-accent-hover` | `#7ae356` | Hover state tombol primer |
| `--color-accent-light` | `#f0fdf4` | Background halus saat focus input |
| `--color-text` | `#1e293b` | Teks utama |
| `--color-text-secondary` | `#64748b` | Subtitle, deskripsi |
| `--color-text-muted` | `#94a3b8` | Caption, placeholder |
| `--color-bg` | `#ffffff` | Background utama |
| `--color-bg-secondary` | `#f8fafc` | Section alternatif |
| `--color-bg-tertiary` | `#f1f5f9` | Highlight halus, tombol outline |
| `--color-border` | `#e2e8f0` | Border default |
| `--color-border-light` | `#f1f5f9` | Border tipis |

### Typography

- **Font family:** `"Plus Jakarta Sans", -apple-system, sans-serif`
- **Weights yang dipakai:** 400, 500, 600, 700, 800

### Border Radius

| Token | Value | Pemakaian |
|---|---|---|
| `--border-radius` | `16px` | Cards, modal, hero card |
| `--border-radius-sm` | `10px` | Input di modal, tombol generate |
| `--border-radius-xs` | `6px` | Itinerary section block |
| `--border-radius-full` | `9999px` | Pill, capsule (input hero, navbar pill, filter pill) |

### Shadows

| Level | Value | Pemakaian |
|---|---|---|
| Subtle | `0 1px 3px rgba(0,0,0,0.1)` | Pill navbar, tag destination card |
| Medium | `0 4px 20px rgba(0,0,0,0.08)` | Card hover state |
| Large | `0 10px 40px rgba(0,0,0,0.12)` | Destination card hover |
| XL | `0 20px 60px rgba(0,0,0,0.15)` | Floating hero card |

### Container & Spacing

- Max-width container: `1200px`
- Padding standar section: `24px`
- Gap grid: `16–24px`
- Padding section vertikal: `60–80px`

### Transition

- Fast: `0.15s ease` (hover micro-interaction)
- Normal: `0.3s ease` (card hover, modal, transformasi)

---

## 6. Struktur Halaman (Wireframe)

Single page, scroll dari atas ke bawah:

```
┌──────────────────────────────────────────────┐
│ NAVBAR  [logo] [menu] [tombol AI Planner]    │ ← fixed, background transparan
├──────────────────────────────────────────────┤
│                                              │
│ HERO                                         │
│  - Background image (pantai tropis)          │
│  - Overlay gradient (atas gelap, bawah putih)│
│  - Judul besar + subtitle                    │
│  - Floating card: form quick planner         │
│    (4 input + filter pills + tombol)         │
│                                              │
├──────────────────────────────────────────────┤
│ POPULAR DESTINATION                          │
│  - Header: judul + subtitle                  │
│  - Grid 4 cards (Bali, Tokyo, Paris, Iceland)│
├──────────────────────────────────────────────┤
│ STATS SECTION                                │
│  - 4 stat cards (234M, 768K, 5.0★, $8.8B)    │
├──────────────────────────────────────────────┤
│ EVENTS SECTION                               │
│  - Grid 3 event cards dengan harga           │
├──────────────────────────────────────────────┤
│ REVIEWS SECTION                              │
│  - Testimonial card + image                  │
├──────────────────────────────────────────────┤
│ CTA HERO                                     │
│  - Background image + judul + tombol         │
├──────────────────────────────────────────────┤
│ FOOTER                                       │
│  - Brand + tagline                           │
└──────────────────────────────────────────────┘

[Modal AI Planner — overlay, tersembunyi by default]
[Loading overlay — fixed, tersembunyi, muncul saat AI generate]
```

---

## 7. Aturan Kerja dengan AI

### Saat Build (Day 2+)

1. **Pisah per section** — JANGAN minta AI build seluruh page sekaligus
2. **Lampirkan file ini** sebagai konteks di setiap prompt awal section
3. **Lampirkan screenshot section** sebagai referensi visual
4. **Pakai design system di Bagian 5** — JANGAN izinkan AI mengarang warna/spacing di luar daftar
5. **Setelah AI generate kode**: baca → cek di browser → refine kalau perlu
6. **Refining bertahap**, bukan ulang dari nol

### Saat Refining

- Sebut bagian spesifik yang masih beda: "Tombol AI Planner harusnya `#8bff66`, bukan biru"
- Kasih spec angka konkret: "padding seharusnya `14px 32px`, bukan `12px 24px`"
- Boleh tolak hasil AI: "Hasil ini terlalu rumit, sederhanakan saja"

### Yang TIDAK Boleh

- Minta AI bikin semua section dalam 1 prompt
- Pakai deskripsi samar ("warna hijau yang bagus")
- Skip cek di browser dan langsung lanjut prompt berikutnya
- Trust hasil AI tanpa baca kode-nya

---

## 8. Roadmap 4 Hari Workshop

| Day | Fase | Output |
|---|---|---|
| **Day 1** | Understand + Plan | File brief ini lahir, wireframe sketch, peserta paham 5 prinsip prompting |
| **Day 2** | Setup + Build (start) | Navbar, Hero+form, Popular Destination |
| **Day 3** | Build (continue) | Stats, Events, Reviews, CTA, Footer, Modal AI Planner |
| **Day 4** | Polish + Deploy + Personalize | Responsive testing, debugging, deploy ke Vercel, peserta personalisasi (warna/destinasi sendiri) |

---

## 9. Struktur File Project

```
waypoint/
├── PROJECT_BRIEF.md        ← FILE INI (rangkuman planning)
├── index.html              ← Halaman utama
├── css/
│   └── style.css           ← Stylesheet
├── js/
│   └── app.js              ← Logic frontend
├── api/
│   └── generate-itinerary.js  ← Backend serverless (Day 3+)
├── package.json            ← Dependencies (Vercel CLI)
└── .env                    ← API key Gemini (Day 3+, RAHASIA)
```

---

## 10. Cara Pakai File Ini saat Prompt AI

### Versi Lengkap (saat baru mulai section)

```
[Lampirkan: PROJECT_BRIEF.md + screenshot-navbar.png]

Aku lanjut build Waypoint. Sesuai PROJECT_BRIEF.md (terutama Bagian 5
Design System dan Bagian 6 Struktur Halaman), build NAVBAR.

Spec spesifik navbar:
- 3 pill terpisah (logo kiri, menu tengah, tombol kanan)
- ...

Pakai semua warna & spacing dari design system di brief.
Referensi visual di screenshot terlampir.
```

### Versi Refining (saat sudah ada kode)

```
[Lampirkan: PROJECT_BRIEF.md]

Hasilnya sudah mirip, tapi tombol AI Planner pakai warna hijau yang
salah. Pakai --color-accent (#8bff66) sesuai design system di brief.
```

### Insight

Setelah brief ini ada, **prompt-prompt selanjutnya jadi LEBIH PENDEK** karena AI sudah punya konteks. Inilah benefit bikin brief di Day 1.

---

**Last updated:** [tanggal Day 1 selesai]
**Project owner:** [nama peserta]
