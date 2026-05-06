# Panduan Pengajar — Day 3 Workshop Waypoint

> **POV: Pengajar / Trainer**
> **Durasi: 2 jam**
> **Materi: JavaScript untuk Section yang Sudah Dibangun di Day 2**

---

## Overview

Day 3 adalah hari **interaktivitas**. Day 2 sudah bikin tampilan navbar, hero, dan popular destination — tapi semua masih DIAM. Hari ini kasih NYAWA ke 3 section itu pakai JavaScript.

**Filosofi Day 3:**
- Praktik fokus ke **JavaScript untuk komponen Day 2** — biar peserta lihat hasil interaktivitas yang KONKRET dari section yang sudah mereka bikin sendiri
- **Section sisa, modal, backend AI, deploy** → jadi PR / dilanjut Day 4
- Skill baru: **prompting JavaScript** (deskripsi behavior, bukan visual)

**Mengapa scope ini lebih baik untuk pemula:**
- Peserta tidak overwhelm dengan banyak konsep baru sekaligus (visual + JS + backend dalam 1 sesi terlalu banyak)
- Setiap interaktivitas yang dibikin **langsung kelihatan hasilnya** di section yang familiar
- PR jelas dan terstruktur (5 tier) → peserta tahu apa yang harus dikerjakan di rumah

---

## Outcome yang Diharapkan

Selesai 2 jam, setiap peserta akan punya `js/app.js` yang berisi:

**Navbar:**
- Mobile menu toggle (klik hamburger → menu muncul/hilang)
- Auto-close menu saat klik link atau klik di luar

**Hero Form Planner:**
- Filter pills click → fill destination + active state pill
- Form submit handler (untuk hari ini: `console.log` + alert demo)
- Loading state button (simulasi 2 detik)

**Popular Destination:**
- Render cards dari array data (bukan hardcode HTML)
- Card click → fill destination + scroll ke hero form

Skill baru:
- Prompting JavaScript dengan **deskripsi behavior** (bukan visual)
- Verifikasi **interaktivitas** (klik tombol → terjadi sesuatu) bukan tampilan
- Memahami pemisahan: **data (array) vs render (function)** untuk Popular Destination

---

## Persiapan Sebelum Sesi

### Checklist 1 Jam Sebelum Mulai

- [ ] Laptop trainer ready: AI tools, browser, VS Code
- [ ] Layar/proyektor jalan
- [ ] Trainer sudah test seluruh flow Day 3 di laptop sendiri (pakai panduan-peserta dari awal sampai akhir)
- [ ] File `panduan-peserta.md` Day 3 dibagikan ke peserta

### Bahan Pengganti Kalau Peserta Macet

- File template `js/app.js` versi lengkap (boleh ambil dari project Waypoint reference) — siap di-share kalau peserta total stuck
- Pastikan template-nya udah dipotong jadi per-step (tidak kasih sekaligus, biar peserta tetap belajar prompting)

---

## Jadwal Lengkap 2 Jam

| Slot | Waktu | Aktivitas | Output |
|---|---|---|---|
| 0 | 0–10 min | Recap Day 2 + intro JS prompting + Setup file | + `js/app.js` linked di HTML |
| 1 | 10–25 min | **JS untuk Navbar** (Mobile menu) | Mobile menu functional |
| 2 | 25–65 min | **JS untuk Hero Form** (3 sub-prompt) | Filter pills + Submit + Loading state |
| 3 | 65–105 min | **JS untuk Popular Destination** (2 sub-prompt) | Render dari data + Card click |
| 4 | 105–115 min | Test end-to-end + refining | Semua interaksi jalan |
| 5 | 115–120 min | Wrap-up + PR list + Preview Day 4 | — |

**Pesan flow ke peserta sejak awal:** "Hari ini fokus prompting JavaScript untuk 3 section yang kemarin kalian bikin. Section lain dan AI integration jadi PR — ada 5 tier yang bisa kalian kerjain pelan-pelan di rumah."

---

## SLOT 0 — Recap + Intro JS Prompting + Setup (0–10 min)

### Tujuan
Bridge dari "tampilan saja" Day 2 ke "tampilan + interaktivitas" Day 3.

### Yang Trainer Lakukan

**Menit 0–3: Recap & Pesan kunci**
- "Kemarin kalian bikin TAMPILAN. Tapi semua masih DIAM. Klik tombol AI Planner gak terjadi apa-apa. Klik card destinasi gak ada respon."
- "Hari ini kita kasih NYAWA pakai JavaScript."

**Menit 3–6: Konsep prompting JavaScript**
- Tunjukkan beda di layar:
  - **Visual prompt (Day 2):** "Bikin tombol warna hijau, sudut bulat" → AI generate HTML/CSS
  - **Behavior prompt (Day 3):** "Saat tombol di-klik, terjadi X" → AI generate JavaScript
- Tegaskan: "Kalian gak perlu paham `addEventListener`, `classList`, `forEach`. Cukup deskripsikan APA YANG TERJADI saat user klik."

**Menit 6–10: Setup file**
- Peserta bikin folder `js/` + file `app.js` kosong
- Tambah `<script src="js/app.js"></script>` sebelum `</body>` di HTML
- Bisa pakai prompt AI atau manual

### Talking Points
- "Hari ini fokus ke 3 section Day 2: navbar, hero, popular destination. Yang lain (5 section + modal + backend) jadi PR."
- "PR-nya kita bahas akhir sesi — ada 5 tier."

---

## SLOT 1 — JS untuk Navbar / Mobile Menu (10–25 min, 15 menit)

### Tujuan
Mobile menu hamburger berfungsi — buka, tutup auto saat klik link, tutup auto saat klik di luar.

### Yang Trainer Lakukan

**Menit 0–2: Demo prompt (2 min)**
- Tampilkan prompt Step 2 di layar
- Highlight: "Lihat — kita pakai bahasa natural ('saat klik X, terjadi Y'). Tidak ada `addEventListener` di prompt."

**Menit 2–10: Peserta praktik (8 min)**
- Copy prompt → submit ke AI → AI generate kode
- Save ke `js/app.js`

**Menit 10–15: Test & refining (5 min)**
- Resize browser ke mobile, test 3 skenario:
  1. Klik hamburger → menu muncul
  2. Klik link → menu tertutup
  3. Klik di luar → menu tertutup
- Yang stuck: bantu refining

### Pitfall

**Hamburger gak muncul di mobile:**
- Itu CSS (sudah dihandle Day 2). Suruh peserta cek class `.mobile-menu-btn` di style.css → harus `display: none` di desktop, `display: flex` di mobile.

**Menu muncul tapi tidak tertutup:**
- ID/class element salah di JS. Refining: "Pastikan element selector di JS sama dengan di HTML."

**`event.stopPropagation()` lupa:**
- Klik hamburger memicu "klik di luar menu" handler → menu langsung tertutup lagi
- Refining: "Klik hamburger, jangan trigger handler 'klik di luar'."

### Talking Points
- "Mobile menu itu klasik — semua website pakai pola yang sama. Sekarang kalian bisa bikin sendiri."

---

## SLOT 2 — JS untuk Hero Form Planner (25–65 min, 40 menit)

Bagian terbesar slot. Pisah jadi 3 sub-prompt.

### Sub-Slot 2A: Filter Pills (25–40 min, 15 menit)

**Yang Diharapkan:**
- Klik pill (Bali/Tokyo/dll) → input destination otomatis terisi
- Pill yang aktif highlighted, yang lain hilang highlighted
- Cursor pindah ke input Days

**Yang Trainer Lakukan:**
- Demo prompt 3A (1 min)
- Peserta praktik (10 min)
- Test (4 min):
  - Klik Bali → input = "Bali", pill highlighted
  - Klik Tokyo → input = "Tokyo", "Tokyo" highlighted, "Bali" tidak

**Pitfall:**
- Lupa `data-destination` attribute di HTML → input tidak terisi. Cek HTML pill: `<button class="filter-pill" data-destination="Bali">Bali</button>`
- Active state stuck di banyak pill — refining: "Sebelum kasih active ke pill yg di-klik, hapus dulu active dari semua pill."

### Sub-Slot 2B: Form Submit Handler (40–55 min, 15 menit)

**Yang Diharapkan:**
- Form submit → preventDefault → ambil 4 data → console.log + alert demo

**Yang Trainer Lakukan:**
- Demo prompt 3B (1 min)
- Peserta praktik (10 min)
- Test (4 min):
  - Isi form → klik Generate → alert muncul
  - Halaman TIDAK refresh
  - Console log ada data form

**Pitfall:**
- Halaman ke-refresh saat submit → AI lupa `event.preventDefault()`. Refining: "Cegah default behavior form (jangan refresh halaman)."
- Data ke-undefined → ID input salah. Cek HTML: `id="hero-destination"`, `id="hero-days"`, dll.

**Talking Points:**
- "Hari ini kita cuma demo. Tapi kalian sudah punya FONDASI — Day 4 atau di rumah, tinggal ganti `alert(...)` jadi kirim ke backend AI."

### Sub-Slot 2C: Loading State Button (55–65 min, 10 menit)

**Yang Diharapkan:**
- Klik tombol Generate → tombol jadi state loading (CSS handle visual) → 2 detik kemudian normal

**Yang Trainer Lakukan:**
- Demo prompt 3C (1 min)
- Peserta praktik (5 min)
- Test (4 min):
  - Klik Generate → tombol jadi "Generating...", tidak bisa di-klik
  - 2 detik → tombol normal
  - Alert demo dari Sub-Slot 2B masih muncul

**Pitfall:**
- Class `.loading` tidak ada di CSS Day 2 → AI mungkin perlu tambah CSS-nya juga. Cek: `.btn-generate-hero.loading { ... }` di style.css.

**Talking Points:**
- "`setTimeout(2000)` itu simulasi. Saat backend AI sudah jadi, loading akan auto-hilang saat AI selesai generate."

---

## SLOT 3 — JS untuk Popular Destination (65–105 min, 40 menit)

Bagian paling konsep-baru karena ini pengenalan **dynamic rendering dari data array**.

### Sub-Slot 3A: Render Cards dari Data (65–95 min, 30 menit)

**Konsep yang Diperkenalkan:**
- Pisahkan **DATA** (array) dari **TAMPILAN** (function render)
- Kenapa? Lebih fleksibel — mau tambah/edit destinasi, cukup edit array, tidak perlu copy-paste HTML

**Yang Trainer Lakukan:**

**Menit 0–5: Konsep teori dengan analogi**
- "Bayangkan cards itu kue donat. Hardcode HTML = kalian buat 4 donat satu-satu pakai tangan. Render dari array = kalian punya cetakan donat (function), tinggal masukkan adonan (array data) → cetakan keluarin 4 donat sekaligus."
- "Kalau mau tambah donat ke-5, tinggal tambah adonan di array. Cetakan otomatis bikin donat baru."

**Menit 5–8: Demo prompt 4A**
- Tampilkan prompt di layar
- Highlight: "Step 1 hapus hardcode di HTML. Step 2 buat array + function di JS."

**Menit 8–25: Peserta praktik (17 min)**
- Hapus hardcode HTML
- Submit prompt ke AI
- AI generate array data + function render
- Save → refresh browser

**Menit 25–30: Verifikasi**
- Cards harus muncul SAMA seperti Day 2 (visual identik)
- Buka Console → `console.log(featuredDestinations)` → array 4 item harus muncul

**Pitfall:**
- Hardcode tidak benar-benar dihapus → cards "double" saat refresh. Cek HTML: `<div id="destinations-grid">` harus kosong (cuma ada komentar).
- Function render tidak dipanggil → grid tetap kosong. Refining: "Pastikan renderDestinations() dipanggil setelah DOM ready (DOMContentLoaded)."
- Cards muncul tapi tampilan rusak → struktur HTML di function tidak match dengan Day 2 CSS. Refining: "Class harus persis sama: .destination-card, .destination-image-container, .destination-tag, .destination-info, dll."

**Talking Points:**
- "Lihat — sekarang kalau mau tambah Yogyakarta, cukup tambah 1 item di array. Bandingin sama hardcode HTML — harus copy-paste 17 baris."
- "Ini pola yang kalian akan pakai di project lain juga: data + render function."

### Sub-Slot 3B: Card Click Handler (95–105 min, 10 menit)

**Yang Diharapkan:**
- Klik card → ambil nama kota → fill input destination → scroll smooth ke hero form

**Yang Trainer Lakukan:**
- Demo prompt 4B (1 min)
- Peserta praktik (6 min)
- Test (3 min):
  - Klik card Bali → halaman scroll ke hero, input = "Bali"
  - Klik card Tokyo → input ganti jadi "Tokyo"
  - Console log: "🎯 Destinasi terpilih: ..."

**Pitfall:**
- Click listener tidak terpasang di card baru → AI lupa pasang listener saat render. Refining: "Event listener click harus dipasang di setiap card yang di-render, di dalam loop renderDestinations."
- Scroll target salah → tidak smooth ke hero. Refining: "Pakai scrollIntoView({behavior: 'smooth'}) ke section .hero atau id='hero'."

---

## SLOT 4 — Test End-to-End + Refining (105–115 min, 10 menit)

### Yang Trainer Lakukan
Keliling cek satu per satu. Test 3 skenario di tiap laptop peserta:

1. **Skenario Klik Card:**
   - Klik card Tokyo → scroll ke form, input = "Tokyo"
   - Isi form → klik Generate → loading 2 detik → alert muncul

2. **Skenario Filter Pills:**
   - Klik pill Paris → input = "Paris", pill highlighted
   - Klik pill Bali → ganti, "Bali" highlighted

3. **Skenario Mobile Menu:**
   - Resize ke mobile → hamburger muncul
   - Klik → menu muncul → klik link → menu tutup

### Quick Debug Reference

| Symptom | Penyebab Umum | Refining Prompt |
|---|---|---|
| Filter pill gak ngisi input | `data-destination` tidak ada di HTML | Cek HTML, refining ke AI |
| Form refresh halaman saat submit | Lupa `preventDefault()` | "Cegah default behavior form" |
| Cards "double" muncul | Hardcode HTML belum dihapus | Hapus 4 cards di HTML |
| Cards tidak muncul | `renderDestinations()` tidak dipanggil | "Panggil saat DOMContentLoaded" |
| Card click gak respon | Listener tidak terpasang di tiap card | "Pasang event listener di loop render" |
| Mobile menu stuck | Lupa `stopPropagation` | "Tambah event.stopPropagation()" |

---

## SLOT 5 — Wrap-up + PR + Preview Day 4 (115–120 min, 5 menit)

### Yang Trainer Sampaikan

**Menit 0–2: Recap pencapaian**
- "Hari ini kalian bikin 6 fitur interaktif: mobile menu, filter pills, form submit, loading state, render dari data, card click."
- "Itu skill JavaScript dasar yang dipakai di SEMUA website modern."

**Menit 2–4: Bahas PR (5 Tier)**

Tampilkan list PR di layar:

| Tier | Yang Dikerjain | Kompleksitas |
|---|---|---|
| 1 | Build 5 section sisa (Stats, Events, Reviews, CTA, Footer) | Mudah (pola Day 2) |
| 2 | Modal AI Planner + Loading overlay (visual + open/close JS) | Sedang |
| 3 | **Backend AI Integration** (Vercel + Gemini API) | Sulit |
| 4 | Save Trip ke localStorage | Sedang |
| 5 | View Switching (Destinations/My Trips) | Mudah-sedang |

**Pesan ke peserta:**
- "Kerjakan dari Tier 1. Kalau buntu, lompat. Tier 3 yang paling besar — boleh dilanjut bareng di Day 4."
- "Boleh kerjain bareng teman, atau kasih chat ke trainer kalau buntu."

**Menit 4–5: Preview Day 4**
- "Day 4 (besok) sesi terakhir. Kita review PR + selesaikan Backend AI Integration bareng + DEPLOY ke internet."

### Indikator Sukses Day 3

Cek sebelum kelas berakhir:
- [ ] **80% peserta** mobile menu jalan
- [ ] **80% peserta** filter pills + form submit + loading state jalan
- [ ] **70% peserta** popular destination render dari array + card click jalan
- [ ] **100% peserta** paham konsep "deskripsi behavior" untuk prompt JS

Kalau **3 dari 4 indikator** tercapai = Day 3 berhasil.

---

## Strategi Umum Pengajaran Day 3

### Pendekatan "Behavior > Visual"

Setiap kali peserta mau prompt JS, ingatkan:
- "Bukan 'tombol harus warna apa', tapi 'saat tombol di-klik, terjadi apa'"
- Verifikasi-nya juga beda: bukan refresh-cek-tampilan, tapi klik-cek-aksi.

### Pendekatan "Pisahkan Data dan Tampilan"

Sub-Slot 3A (render cards dari array) adalah **konsep baru paling penting**. Pakai analogi (cetakan donat) biar pemula paham KONSEP-nya, bukan cuma kode.

Setelah Sub-Slot 3A, peserta paham: 
- **Data** = informasi (array of destinasi)
- **Tampilan** = function yang render data jadi HTML
- Pisah keduanya = lebih fleksibel & maintainable

### Manajemen PR

PR dibagi 5 tier dengan kompleksitas berbeda — ini sengaja:
- Tier 1 (mudah) → memberikan momentum / kesuksesan kecil ke peserta
- Tier 2-5 (lebih kompleks) → tantangan progresif
- Tier 3 (Backend AI) sengaja dikasih **paling besar** karena ini yang akan kita kerjain bareng di Day 4

Tegaskan: "Tidak ada peserta yang HARUS selesaikan semua 5 tier sebelum Day 4. Yang penting nyoba."

### Backup Plan Detail

**Kalau Slot 3 (Render dari Data) terlalu sulit:**
- Skip dulu render dari array. Biarkan hardcode HTML tetap di Day 2 form.
- Cuma kerjakan Card Click Handler (Sub-Slot 3B) — pakai `querySelectorAll('.destination-card')` di JS.
- Kasih tahu peserta: "Render dari data versi advanced, kita lanjut Day 4."

**Kalau peserta total stuck di prompting:**
- Trainer kasih kode template per-step (sudah disiapkan sebelum sesi)
- Tapi tetap minta peserta BACA & PAHAMI sebelum copy

---

## Catatan Akhir

Day 3 adalah hari ketika peserta **pertama kali lihat website mereka berinteraksi**. Manfaatkan momen ini.

Kalau ada peserta yang berhasil mobile menu / filter pills / card click jalan dengan baik, **rayakan kecil-kecilan**:
- "Lihat layar [nama peserta] — mobile menu-nya udah jalan!"
- Biarkan peserta lain lihat

Ini akan memotivasi yang masih stuck dan menciptakan momentum.

**Indikator paling penting bukan kode yang sempurna** — tapi apakah peserta paham bahwa **prompting JavaScript = deskripsikan behavior**, bukan teknis. Kalau mereka pulang Day 3 dengan keyakinan itu, sesi ini sudah sukses.

Day 4 nanti, peserta yang sudah ngerjain PR Tier 1-2 akan punya momentum lebih dari yang belum. Tapi yang belum juga tidak ketinggalan — kita akan review bareng di awal Day 4.
