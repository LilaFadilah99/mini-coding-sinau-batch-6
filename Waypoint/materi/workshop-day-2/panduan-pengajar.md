# Panduan Pengajar — Day 2 Workshop Waypoint

> **POV: Pengajar / Trainer**
> **Durasi: 2 jam**
> **Materi: AI Prompting + Build 3 Section Waypoint**

---

## Overview

Day 2 fokus pada **PRAKTIK kerja programmer dengan AI**. Peserta akan mengalami flow lengkap dari **Planning → Setup → Build → Verify**, dengan AI sebagai partner di setiap fase.

Tujuan utama: peserta paham bahwa coding dengan AI itu **terstruktur**, bukan random "minta AI bikin website lengkap".

---

## Outcome yang Diharapkan

Selesai 2 jam, setiap peserta akan punya:

- File `PROJECT_BRIEF.md` hasil prompting AI (rangkuman planning)
- Struktur project siap pakai (`index.html` + `css/style.css`)
- 3 section Waypoint sudah jadi: **navbar, hero, popular destination**
- Pemahaman flow 4-step: **Plan → Setup → Build → Verify**
- Skill prompting iteratif (refining hasil AI)
- Skill bertanya ke AI saat stuck

---

## Persiapan Sebelum Sesi

### Checklist 1 Jam Sebelum Mulai

- [ ] Laptop trainer ready: Antigravity / Claude Code, browser, internet
- [ ] Layar/proyektor jalan (untuk demo prompting live)
- [ ] Screenshot Waypoint per section sudah dipotong:
  - `screenshot-navbar.png`
  - `screenshot-hero.png`
  - `screenshot-popular-destination.png`
- [ ] Folder `starter/` (dari `materi/day-2/starter/`) sudah di-zip dan siap di-share ke peserta
- [ ] Konfirmasi semua peserta sudah punya AI tools terinstall (kalau belum, sediakan 10 menit ekstra di awal)
- [ ] File `panduan-peserta.md` dibagikan ke peserta (sebagai PDF / link / hardcopy)

### Bahan Pengganti Kalau Peserta Macet

- File template `PROJECT_BRIEF.md` jadi (di `materi/day-2/starter/PROJECT_BRIEF.md`) — siapkan kalau peserta kebingungan saat planning
- Snippet HTML/CSS skeleton (di `materi/day-2/starter/index.html` dan `css/style.css`) — siapkan kalau setup gagal

---

## Jadwal Lengkap 2 Jam

| Slot | Waktu | Aktivitas | File peserta yang muncul/berubah |
|---|---|---|---|
| 0 | 0–10 min | Recap Day 1 + Intro AI Tools | — |
| 1 | 10–25 min | 5 Prinsip Prompting | — |
| 2 | 25–40 min | **PRAKTIK: Planning** → generate brief | + `PROJECT_BRIEF.md` |
| 3 | 40–50 min | **PRAKTIK: Setup** project | + `index.html`, `css/style.css` |
| 4 | 50–65 min | **PRAKTIK: Build Navbar** | `index.html`, `style.css` |
| 5 | 65–95 min | **PRAKTIK: Build Hero** (2 prompt) | `index.html`, `style.css` |
| 6 | 95–115 min | **PRAKTIK: Build Popular Destination** | `index.html`, `style.css` |
| 7 | 115–120 min | Wrap-up + Preview Day 3 | — |

**Pesan flow ke peserta sejak awal:** "Setiap step kita prompt AI, AI generate, kita cek di browser, kita refine kalau perlu. Ulangi pola ini untuk setiap section."

---

## SLOT 0 — Recap Day 1 + Intro AI Tools (0–10 min)

### Tujuan
Bridge dari Day 1 (planning teori) ke Day 2 (praktik dengan AI).

### Yang Trainer Lakukan
1. **Recap singkat (2 min):** "Kemarin kita planning Waypoint di kertas. Hari ini kita praktik bareng AI bikin section pertama."
2. **Pesan kunci (1 min):** "Coding dengan AI itu 4 fase — Plan, Setup, Build, Verify. Kita akan praktik SEMUANYA hari ini."
3. **Demo singkat (5 min):** trainer prompt AI bikin button sederhana → AI generate → tampil di browser. "Ini bukan magic, ini tools yang harus kita kuasai."
4. **Cek kesiapan tools (2 min):** semua peserta sudah bisa buka AI tools? Kalau ada yang belum, bantu cepat.

### Talking Points (yang harus disampaikan)
- AI = **asisten**, bukan pengganti kamu paham coding
- Hari ini target realistis: **3 section** — bukan Waypoint full
- Goal bukan sempurna, goal adalah **paham caranya**

### Yang Harus Diwanti-wanti
- **Jangan over-promise** — peserta TIDAK akan punya Waypoint full hari ini
- **Jangan terkesan "AI ajaib"** — tekankan: "AI butuh prompt yang bagus"

---

## SLOT 1 — 5 Prinsip Prompting (10–25 min)

### Tujuan
Peserta paham 5 prinsip yang akan dipakai sepanjang sesi.

### Yang Trainer Lakukan
1. **Tampilkan tabel "buruk vs baik"** untuk tiap prinsip (15 menit total, ~3 menit per prinsip):
   - **Konteks** → "Kasih AI tahu kamu lagi ngapain"
   - **Spesifik** → "Pakai angka, hex code, layout konkret"
   - **Referensi** → "Lampirkan screenshot/file referensi"
   - **Iterasi** → "Refine bertahap, jangan satu prompt mega-besar"
   - **Verifikasi** → "Selalu cek di browser, jangan asal trust"

2. **Jangan ceramahi** — tunjukkan contoh konkret di layar.

### Talking Points
- "5 prinsip ini akan kalian pakai TERUS hari ini. Hafalkan."
- "Kalau peserta lain lihat prompt kalian, dia harus bisa tebak: ini prompt baik atau buruk."

### Materi Lengkap
Lihat `materi/day-2/01-tips-ai-prompting.md` (sudah ada).

---

## SLOT 2 — PRAKTIK: Planning (25–40 min)

### Tujuan
Peserta menghasilkan `PROJECT_BRIEF.md` mereka sendiri lewat prompting AI.

### Flow Slot

**Menit 0–3: Trainer demo**
- Buka AI tools di layar
- Tampilkan prompt planning (di `panduan-peserta.md` Step 1)
- Jelaskan: "Lihat gimana prompt ini pakai 5 prinsip — ada konteks, ada spec spesifik (warna, stack), ada constraint, dan minta output yang verifiable."
- Jangan eksekusi prompt-nya — biarkan peserta yang eksekusi sendiri.

**Menit 3–10: Peserta prompt**
- Peserta copy prompt dari panduan-peserta → tempel ke AI mereka → submit
- AI akan generate brief panjang (markdown)
- Trainer keliling cek hasil

**Menit 10–13: Save sebagai file**
- Peserta save hasil sebagai `PROJECT_BRIEF.md` di **root folder project**
- Cara save di Antigravity: bilang ke AI *"save jawabanmu di atas ke file PROJECT_BRIEF.md di root"*
- Cara save manual: copy hasil → buka VS Code → file baru → paste → save

**Menit 13–15: Verifikasi**
- Buka file `PROJECT_BRIEF.md` di editor
- Cek section yang harus ada: Visi, User, Fitur, Tech Stack, Design System, Wireframe, Aturan AI, Roadmap

### Yang Harus Diantisipasi

**Pitfall 1: Hasil AI berbeda-beda.**
- Solusi: peserta saling beda hasilnya itu OK. Yang penting **strukturnya** sama (8 section), warna `#8bff66` ada, tech stack sesuai constraint.
- Kalau ada peserta yang AI-nya berhasil generate sangat berbeda (misal: pakai React padahal udah dilarang), minta peserta refine: "Kamu pakai React di output. Aku bilang TANPA framework. Tolong revisi."

**Pitfall 2: Peserta bingung simpan file di mana.**
- Solusi: trainer tunjukkan struktur folder di proyektor. Root folder = folder paling luar project.

**Pitfall 3: AI generate brief yang terlalu pendek/dangkal.**
- Solusi: minta peserta refine: "Brief ini terlalu singkat. Tolong perpanjang section Design System dengan tabel hex code, dan section Wireframe dengan ASCII art."

**Pitfall 4: Waktu mepet, peserta belum selesai planning.**
- Backup: kasih peserta `PROJECT_BRIEF.md` template (di `materi/day-2/starter/`) → mereka pakai itu sebagai brief mereka. Skip prompting planning untuk yang mepet, lanjut ke Slot 3.

### Talking Points
- "File ini akan jadi 'kitab suci' kita di setiap prompt selanjutnya."
- "Lihat — AI tidak cuma bantu nulis kode. Dia bisa bantu MIKIR juga."

---

## SLOT 3 — PRAKTIK: Setup Project (40–50 min)

### Tujuan
Peserta punya struktur folder + skeleton file siap di-build.

### Flow Slot

**Menit 0–2: Trainer kasih tahu struktur target**
```
my-waypoint/
├── PROJECT_BRIEF.md   (sudah ada dari Slot 2)
├── index.html         (akan dibuat)
└── css/
    └── style.css      (akan dibuat)
```

**Menit 2–7: Peserta prompt setup**
- Copy prompt dari `panduan-peserta.md` Step 2
- AI generate 2 code block (HTML & CSS)
- Peserta save ke file masing-masing

**Menit 7–10: Cek file**
- Buka `index.html` di browser → harus tampil halaman kosong putih (tidak error)
- Kalau error 404 atau halaman blank dengan "cannot load CSS", berarti link CSS salah

### Pitfall

**File CSS tidak ke-load:**
- Cek path di `<link>` tag — harus `css/style.css` (bukan `style.css`)
- Cek capitalization (Mac sensitive)

**Peserta nge-double folder (folder dalam folder).**
- Trainer keliling cek struktur folder lewat sidebar VS Code

### Talking Points
- "Setup ini sebenarnya cuma sekali per project. Setelah ini, kita BUILD."
- "Skeleton ini sengaja kosong — biar AI yang isi pelan-pelan."

---

## SLOT 4 — PRAKTIK: Build Navbar (50–65 min)

### Tujuan
Navbar 3-bagian (logo / menu / tombol) tampil di browser.

### Flow Slot

**Menit 0–2: Trainer demo prompt**
- Tampilkan prompt navbar di layar
- Highlight: "Lihat — kita LAMPIRKAN PROJECT_BRIEF.md dan screenshot navbar. AI tinggal ikuti panduan brief."
- Jelaskan: "Prompt ini lebih PENDEK dari kalau tidak ada brief. Itu manfaatnya."

**Menit 2–10: Peserta prompt**
- Peserta lampirkan PROJECT_BRIEF.md + screenshot-navbar.png
- Copy prompt dari panduan
- Submit ke AI
- AI generate HTML + CSS untuk navbar
- Peserta save ke file masing-masing

**Menit 10–15: Verifikasi & refining**
- Refresh browser → cek navbar tampil
- Bandingkan dengan screenshot
- Kalau ada yang beda → pakai prompt refining (di panduan)
- Iterasi sampai mirip

### Checkpoint Sukses
Sebelum lanjut ke Slot 5, navbar harus:
- 3 pill terpisah tampil
- Logo "Waypoint Travel" di kiri, menu tengah, tombol kanan
- Tombol AI Planner warna hijau neon (`#8bff66`)
- Posisi fixed di top, background transparan

### Pitfall

**Navbar jadi 1 bar putih full-width:**
- Penyebab: AI kasih background putih ke `.navbar` keseluruhan
- Refining prompt: "Background `.navbar` harusnya transparent. Yang putih cuma `.nav-brand`, `.nav-menu`, dan `.btn-ai-planner` (tiap pill)."

**Tombol warnanya beda:**
- Refining prompt: "Pakai `--color-accent` (`#8bff66`) sesuai design system di brief, jangan tebak warna."

**Peserta cepat selesai:**
- Tantangan ekstra: "Tambahkan transisi smooth di hover, atau coba ubah ukuran logo, atau ganti label menu."

---

## SLOT 5 — PRAKTIK: Build Hero (65–95 min, 30 menit)

### Tujuan
Hero section dengan background image + form floating card tampil.

### Strategi: Pisah Jadi 2 Prompt

Jangan minta AI bikin sekaligus. Pisah jadi:
- **Prompt 5A:** Background + judul + subtitle (tanpa form)
- **Prompt 5B:** Floating card dengan form

### Flow Slot

**Menit 0–10: Prompt 5A (Background + Konten Tengah)**
- Trainer demo prompt 5A (1 menit)
- Peserta copy + submit (5 menit)
- Verifikasi: hero kosong dengan background pantai + judul putih

**Menit 10–25: Prompt 5B (Floating Card + Form)**
- Trainer demo prompt 5B
- Peserta copy + submit
- AI tambah floating card berisi 4 input + filter pills + tombol
- Verifikasi browser

**Menit 25–30: Refining**
- Kemungkinan masalah: form responsive belum jalan, tombol warna salah, dll
- Pakai prompt refining bertahap

### Checkpoint Sukses
- Background pantai full-width tampil
- Judul "Explore the World, One Journey at a Time." putih, line-break setelah "One"
- Subtitle muncul
- Floating card kelihatan "melayang" dengan shadow besar
- 4 input + 6 filter pill + tombol Generate Itinerary muncul

### Pitfall

**Background image-nya tidak muncul:**
- URL salah / `<img>` tag-nya tidak ada → minta AI cek

**Floating card tertimpa overlay:**
- `.hero-card` butuh `position: relative; z-index: 10`
- `.hero-background` butuh `z-index: -1`

**Form 4 kolom pecah saat layar kecil:**
- Lupa media query → minta AI tambah responsive

**Peserta paniaki karena prompt 5B panjang:**
- Tenangkan: "Panjang itu karena spesifik. Tinggal copy, AI yang kerja."

---

## SLOT 6 — PRAKTIK: Build Popular Destination (95–115 min, 20 menit)

### Tujuan
Grid 4 cards destinasi (Bali, Tokyo, Paris, Iceland) tampil dengan hover effect.

### Flow Slot

**Menit 0–2: Trainer demo prompt**

**Menit 2–12: Peserta prompt**
- Lampirkan PROJECT_BRIEF.md + screenshot-popular-destination.png
- Copy prompt (paling panjang dari ketiganya — wajar karena ada 4 data destinasi)
- Submit ke AI
- AI generate section + 4 cards

**Menit 12–20: Verifikasi & refining**
- Hover di card → harus naik + image zoom
- Kalau image keluar dari rounded corner → refining: "container image perlu `overflow: hidden`"
- Cek responsive

### Checkpoint Sukses
- Header "Popular destination" + subtitle muncul
- 4 cards tampil dalam grid (4 kolom)
- Tag emoji di pojok kiri atas tiap image
- Hover bekerja: card naik + image zoom

### Pitfall

**Image keluar dari border-radius card (sudut tajam):**
- Container image (`.destination-image-container`) WAJIB `overflow: hidden`
- Card juga `overflow: hidden`

**Tag emoji kelihatan tipis/transparan:**
- Background tag harus PUTIH SOLID, plus shadow tipis

**Hover effect tidak smooth:**
- Tambah `transition: 0.3s ease` di selector card-nya, bukan di hover state

---

## SLOT 7 — Wrap-up + Preview Day 3 (115–120 min)

### Yang Trainer Sampaikan

1. **Recap pencapaian (2 min):**
   - "Hari ini kalian praktik 4-step workflow programmer dengan AI"
   - "Kalian sudah punya: brief, struktur project, navbar, hero, popular destination"
   - "Itu LUAR BIASA untuk hari pertama prompting"

2. **Insight kunci (2 min):**
   - Prompt yang baik = struktur yang baik
   - PROJECT_BRIEF.md jadi panduan = prompt selanjutnya jadi pendek
   - Iterasi itu normal, bukan tanda kamu salah

3. **Preview Day 3 (1 min):**
   - Lanjutkan section sisa: stats, events, reviews, CTA, footer, modal
   - Day 4: polish + deploy + personalisasi

### Indikator Sukses Day 2

Sebelum kelas berakhir, cek:
- [ ] Minimal **80% peserta** punya navbar + hero tampil di browser
- [ ] Minimal **60% peserta** punya popular destination juga jadi
- [ ] Saat ditanya "apa 5 prinsip prompting?", **3 dari 5 peserta acak** bisa sebut minimal 3 prinsip
- [ ] Saat ditanya "apa beda prompt baik vs buruk?", peserta bisa kasih contoh

Kalau 3 dari 4 indikator di atas tercapai = Day 2 berhasil.

---

## Strategi Umum yang Berguna

### Kalau Peserta Cepat Selesai
Kasih tantangan ekstra:
- "Coba ubah warna accent ke biru, lihat efeknya"
- "Coba ganti destinasi: tambah Yogyakarta, hapus Iceland"
- "Coba bikin tombol baru di navbar"

### Kalau Peserta Lambat
- **Slot 2 (Planning)** — kalau mepet, kasih `PROJECT_BRIEF.md` template, lanjut ke Slot 3
- **Slot 5 (Hero)** — paling rawan stuck. Kalau mepet, peserta bisa pakai prompt 5A saja (skip floating card), lanjut ke Slot 6
- **Slot 6 (Popular Destination)** — bisa ditunda ke Day 3 kalau benar-benar tidak cukup waktu

### Tone Pengajaran
- **Tegas tapi tidak menggurui** — peserta pemula gampang minder
- **Rayakan progress kecil** — "Wah navbar-nya tampil! Itu keren!"
- **Jangan koreksi semua kesalahan** — pilih yang paling impactful saja

### Prinsip "Trust the Brief"
Sepanjang sesi, kalau peserta nanya "warna apa yang harus aku pakai?", jawab balik: **"Cek brief-mu di section Design System."** Ini melatih kebiasaan referensi dokumen, bukan tanya trainer terus.

---

## Catatan Akhir

Materi Day 2 ini **padat tapi feasible** kalau peserta sudah:
- Setup tools dengan baik (Day 1 / pre-workshop)
- Paham fundamental HTML/CSS basic (Day 1)
- Punya laptop yang lancar

Kalau ada yang mengganggu di luar 3 hal di atas (laptop lemot, internet lemot, peserta yang absent), siapkan adjustment.

**Indikator paling penting bukan hasil visual** — tapi apakah peserta paham **alur kerjanya**. Kalau navbar mereka jelek tapi mereka paham "saya prompt, lalu cek browser, lalu refine kalau belum pas" — itu sudah sukses.
