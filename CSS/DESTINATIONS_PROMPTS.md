# 📝 Kumpulan Prompt: Section Popular Destination

**Untuk Peserta:** File ini berisi semua prompt yang digunakan untuk membuat section "Popular Destination". Copy-paste secara berurutan untuk hasil terbaik!

---

## 🎯 PROMPT 0: Master Context (WAJIB!)

**Kirim prompt ini terlebih dahulu ke AI:**

```
Kamu adalah Senior Web Developer. Saya ingin membangun section "Popular Destination"
untuk projek Waypoint - portal travel dengan AI.

Design Guidelines Waypoint:
1. Warna aksen: Hijau Lime (#8bff66)
2. Font: 'Plus Jakarta Sans'
3. Spacing konsisten: 8px, 16px, 24px, 32px
4. Border radius: 16px untuk card
5. Style modern, minimalis, clean

Teknologi:
- HTML5 semantic
- CSS murni (no framework)
- Class naming: kebab-case (section-title, destination-card)

Konfirmasi jika kamu sudah memahami guidelines Waypoint ini!
```

✅ **Tunggu konfirmasi AI sebelum lanjut!**

---

## 📝 PROMPT 1: Generate HTML Structure

```
Buatkan struktur HTML untuk section "Popular Destination" dengan ketentuan:

1. SECTION HEADER:
   - Gunakan <h2> untuk judul "Popular destination"
   - Gunakan <p> untuk subtitle "Discover the most loved destinations by travelers worldwide"

2. CARD CONTAINER:
   - Buat container untuk menampung 4 kartu destinasi
   - Beri class "destinations-grid"

3. DESTINATION CARD (buat 4 card):

   Card 1 - Bali:
   - Badge "🌴 Tropical"
   - Gambar dari Unsplash (Bali temple)
   - Location: "Your City → Bali"
   - Destination: "Bali, Indonesia"
   - CTA: "Explore with AI Planner"
   - Price: "From AI Trip"

   Card 2 - Tokyo:
   - Badge "🏙 Urban"
   - Gambar dari Unsplash (Tokyo street)
   - Location: "Your City → Tokyo"
   - Destination: "Tokyo, Japan"
   - CTA: "Explore with AI Planner"
   - Price: "From AI Trip"

   Card 3 - Paris:
   - Badge "🗼 Romantic"
   - Gambar dari Unsplash (Eiffel Tower)
   - Location: "Your City → Paris"
   - Destination: "Paris, France"
   - CTA: "Explore with AI Planner"
   - Price: "From AI Trip"

   Card 4 - Iceland:
   - Badge "⛰ Adventure"
   - Gambar dari Unsplash (Iceland landscape)
   - Location: "Your City → Iceland"
   - Destination: "Iceland"
   - CTA: "Explore with AI Planner"
   - Price: "From AI Trip"

STRUKTUR CLASS:
- Section pembungkus: class "destinations-section"
- Header: class "section-header"
- Grid container: class "destinations-grid"
- Setiap card: class "destination-card"
- Card wrapper: class "card-image-wrapper" (untuk position relative gambar + badge)
- Badge: class "destination-badge"
- Gambar: class "destination-image"
- Info section: class "destination-info"
- Location text: class "destination-location"
- Nama destinasi: class "destination-name"
- CTA text: class "destination-cta"
- Price: class "destination-price"

Berikan HANYA kode HTML, tanpa CSS dulu.
```

---

## 🎨 PROMPT 2: CSS Variables Setup

```
Buatkan CSS variables untuk projek Waypoint dengan ketentuan:

1. COLORS:
   - Primary (aksen): #8bff66
   - Background: #ffffff
   - Text primary: #1e293b
   - Text secondary: #64748b
   - Border: #e2e8f0
   - Shadow: rgba(0, 0, 0, 0.08)

2. SPACING:
   - xs: 8px
   - sm: 16px
   - md: 24px
   - lg: 32px
   - xl: 48px
   - xxl: 80px

3. TYPOGRAPHY:
   - Font family: 'Plus Jakarta Sans', sans-serif
   - Font size small: 14px
   - Font size base: 16px
   - Font size large: 18px
   - Font size heading: 36px

4. BORDER:
   - Radius card: 16px
   - Radius badge: 20px

5. TRANSITION:
   - Duration: 0.3s
   - Easing: ease

Gunakan CSS Variables di :root dan berikan komentar penjelasan untuk setiap kategori.
Jangan lupa import Google Font 'Plus Jakarta Sans'.
```

---

## 📍 PROMPT 3: Styling Section Header

```
Buatkan CSS untuk section header "Popular Destination" dengan ketentuan:

TARGET SELECTOR:
- .destinations-section:
  * padding atas-bawah 80px (gunakan variable --spacing-xxl)
  * background: white

- .section-header:
  * text-align: center
  * max-width: 600px
  * margin: 0 auto
  * margin-bottom: 48px (gunakan variable --spacing-xl)

- .section-header h2:
  * font-size: 36px (gunakan variable --font-heading)
  * font-weight: 700
  * color: var(--color-text-primary)
  * margin-bottom: 12px
  * line-height: 1.2

- .section-header p:
  * font-size: 18px (gunakan variable --font-large)
  * color: var(--color-text-secondary)
  * line-height: 1.6
  * margin: 0

Gunakan CSS variables yang sudah dibuat dan berikan komentar.
```

---

## 📦 PROMPT 4: Flexbox Container Styling

```
Buatkan CSS untuk container kartu destinasi dengan Flexbox:

TARGET SELECTOR:
- .destinations-grid:
  * display: flex (aktifkan Flexbox mode)
  * justify-content: center (posisi tengah horizontal)
  * align-items: stretch (kartu sama tinggi)
  * gap: 24px (jarak antar kartu, gunakan variable --spacing-md)
  * flex-wrap: wrap (kartu turun ke bawah jika layar kecil)
  * max-width: 1200px (lebar maksimal container)
  * margin: 0 auto (center container)
  * padding: 0 20px (spacing kiri-kanan untuk mobile)

Berikan komentar penjelasan untuk setiap property Flexbox.
```

---

## 🎴 PROMPT 5: Individual Card Styling

```
Buatkan CSS untuk styling individual destination card dengan ketentuan:

TARGET SELECTOR:
- .destination-card:
  * width: 280px (lebar fixed)
  * background: white
  * border-radius: var(--border-radius-card)
  * overflow: hidden (agar gambar tidak keluar dari border radius)
  * box-shadow: 0 4px 12px var(--color-shadow)
  * transition: all var(--transition-duration) var(--transition-easing)
  * cursor: pointer
  * display: flex
  * flex-direction: column

- .destination-card:hover:
  * transform: translateY(-8px) (naik sedikit saat hover)
  * box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) (bayangan lebih tebal)

- .card-image-wrapper:
  * position: relative (untuk badge positioning)
  * width: 100%
  * height: 200px
  * overflow: hidden

- .destination-image:
  * width: 100%
  * height: 100%
  * object-fit: cover (gambar proporsional, tidak terdistorsi)
  * display: block

- .destination-badge:
  * position: absolute
  * top: 16px
  * left: 16px
  * background: white
  * padding: 8px 16px (gunakan variables)
  * border-radius: var(--border-radius-badge)
  * font-size: var(--font-small)
  * font-weight: 600
  * box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
  * color: var(--color-text-primary)
  * z-index: 10

- .destination-info:
  * padding: 20px
  * display: flex
  * flex-direction: column
  * gap: 8px

- .destination-location:
  * font-size: var(--font-small)
  * color: var(--color-text-secondary)
  * margin: 0

- .destination-name:
  * font-size: 20px
  * font-weight: 700
  * color: var(--color-text-primary)
  * margin: 0

- .destination-cta:
  * font-size: var(--font-small)
  * color: var(--color-text-secondary)
  * margin: 0

- .destination-price:
  * font-size: var(--font-base)
  * font-weight: 700
  * color: var(--color-text-primary)
  * margin: 0

Berikan komentar untuk setiap section CSS dan gunakan CSS variables.
```

---

## 📱 PROMPT 6: Responsive Design (BONUS)

```
Buatkan media queries untuk membuat section "Popular Destination" responsive:

BREAKPOINTS:
1. Tablet (max-width: 768px):
   - .destinations-grid: gap jadi 16px
   - .destination-card: width 100%, max-width 400px

2. Mobile (max-width: 480px):
   - .destinations-section: padding 40px 0
   - .section-header h2: font-size 28px
   - .section-header p: font-size 16px
   - .destination-card: width 100%

Berikan komentar dan gunakan mobile-first approach jika memungkinkan.
```

---

## 🎯 PROMPT DEBUGGING (Jika Ada Masalah)

### Jika card tidak horizontal:

```
Saya punya masalah: 4 destination card saya masih vertikal (stack), tidak horizontal.
Berikut adalah CSS untuk .destinations-grid saya:

[paste CSS kamu]

Tolong identifikasi masalahnya dan perbaiki.
```

### Jika gambar terdistorsi:

```
Gambar di destination card saya terdistorsi (stretched).
Berikut CSS untuk .destination-image saya:

[paste CSS kamu]

Tolong perbaiki agar gambar proporsional tanpa distorsi.
```

### Jika hover tidak smooth:

```
Hover effect di card saya patah-patah, tidak smooth.
Berikut CSS untuk .destination-card saya:

[paste CSS kamu]

Tolong tambahkan transition yang tepat.
```

---

## 💡 TIPS PROMPTING

### ✅ DO (Lakukan):

1. **Selalu kirim Master Context dulu** - AI jadi paham projek kita
2. **Mention CSS variables** - agar kode konsisten
3. **Specific di ukuran** - jangan bilang "besar", tapi "36px"
4. **Minta komentar** - biar mudah belajar dari kode AI

### ❌ DON'T (Jangan):

1. **Jangan skip Master Context** - hasil akan generic
2. **Jangan prompt terlalu panjang sekaligus** - AI bisa kewalahan
3. **Jangan terima begitu saja** - always review & test!

---

## 🔄 Urutan Prompt yang Benar:

```
1. Master Context (WAJIB!)
   ↓
2. HTML Structure
   ↓
3. CSS Variables
   ↓
4. Section Header Styling
   ↓
5. Flexbox Container
   ↓
6. Individual Cards
   ↓
7. Responsive (Optional)
```

**Jangan skip atau acak urutan!**

---

## 📝 Checklist Setelah Semua Prompt:

- [ ] 4 kartu muncul horizontal
- [ ] Hover effect bekerja (naik + shadow)
- [ ] Responsive (kartu turun saat layar kecil)
- [ ] Gambar tidak distorsi
- [ ] Spacing konsisten
- [ ] Badge muncul di atas gambar
- [ ] Warna sesuai (hijau lime untuk aksen)

---

**Selamat mencoba! Jika stuck, gunakan Prompt Debugging di atas.** 🚀
