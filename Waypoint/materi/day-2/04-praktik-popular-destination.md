# Praktik 3: Popular Destination

**Estimasi: 15 menit**

## Target Visual

Section ini punya:
- **Header**: Judul "Popular destination" + subtitle "Discover the most loved destinations by travelers worldwide"
- **Grid 4 cards** destinasi: Bali, Tokyo, Paris, Iceland

Setiap card berisi:
- Foto destinasi (height 180px)
- Tag kategori di pojok kiri atas image (Tropical, Urban, Romantic, Adventure)
- Route "Your City → [nama]"
- Nama destinasi
- "Explore with AI Planner"
- Footer "From AI Trip"

Hover: card naik (translateY) + image zoom (scale).

> **Lampirkan ke AI:** `screenshot-popular-destination.png`

## Spesifikasi Detail

### Header Section
| Elemen | Spec |
|---|---|
| Title text | "Popular destination" |
| Title font-size | `32px`, weight `700` |
| Subtitle | "Discover the most loved destinations by travelers worldwide" |
| Subtitle color | `#64748b` |
| Subtitle font-size | `16px` |
| Margin bottom | `40px` setelah header |

### Grid Layout
| Elemen | Spec |
|---|---|
| Display | `grid` |
| Columns desktop | `repeat(4, 1fr)` |
| Columns tablet (< 1024px) | `repeat(2, 1fr)` |
| Columns mobile (< 768px) | `1fr` |
| Gap | `24px` |

### Single Card
| Elemen | Spec |
|---|---|
| Background | white |
| Border | `1px solid #f1f5f9` |
| Border-radius | `16px` |
| Overflow | `hidden` (penting biar image tidak keluar dari rounded corner) |
| Cursor | `pointer` |
| Transition | `0.3s ease` |
| Image height | `180px`, `object-fit: cover` |
| Image container | `position: relative`, `overflow: hidden` |
| Tag position | `position: absolute`, `top: 12px`, `left: 12px` |
| Tag background | white |
| Tag padding | `6px 12px` |
| Tag border-radius | `9999px` (full rounded) |
| Tag font-size | `12px`, weight `600` |
| Tag shadow | tipis: `0 1px 3px rgba(0,0,0,0.1)` |
| Info padding | `20px` |
| Route text | font `13px`, color `#94a3b8` |
| Name text | font `18px`, weight `600` |
| Description | font `13px`, color `#64748b` |
| Hover effect card | `translateY(-8px)` + shadow besar `0 10px 40px rgba(0,0,0,0.12)` |
| Hover effect image | `scale(1.08)` |

### Data 4 Cards

| Card | Image URL | Tag | Name |
|---|---|---|---|
| 1 | `https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80` | 🏝️ Tropical | Bali, Indonesia |
| 2 | `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80` | 🏙️ Urban | Tokyo, Japan |
| 3 | `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80` | 🗼 Romantic | Paris, France |
| 4 | `https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80` | ❄️ Adventure | Iceland |

---

## Contoh Prompt — Tahap 1 (Awal)

```
[Lampirkan screenshot-popular-destination.png]

Aku lanjut Waypoint. Sekarang aku mau bikin section "Popular Destination"
yang tampilannya seperti screenshot terlampir.

Section ini punya 2 bagian:

1. HEADER section:
   - Judul "Popular destination" (font-size 32px, weight 700)
   - Subtitle "Discover the most loved destinations by travelers worldwide"
     (color #64748b, font-size 16px)
   - Margin bottom 40px setelah header

2. GRID 4 card destinasi:
   - Display grid, grid-template-columns repeat(4, 1fr), gap 24px

   Setiap CARD berisi:
   - Image di bagian atas (height 180px, object-fit cover)
   - Tag kategori di pojok kiri atas image
     (position absolute, top 12px, left 12px)
     Background putih, padding 6px 12px, border-radius 9999px (full rounded)
     Shadow tipis 0 1px 3px rgba(0,0,0,0.1)
     Font 12px, weight 600
   - Bagian info di bawah image (padding 20px) berisi:
     * Route "Your City → [nama_kota]" (font 13px, color #94a3b8)
     * Nama destinasi (font 18px, weight 600)
     * "Explore with AI Planner" (font 13px, color #64748b)
     * Footer baris: "From" (small grey) + "AI Trip" (font 18px, weight 700)

   Card style umum:
   - Background putih
   - Border 1px solid #f1f5f9
   - Border-radius 16px
   - overflow hidden (PENTING — biar image tidak keluar dari rounded corner)
   - Cursor pointer
   - Transition 0.3s ease

   HOVER effect:
   - Card naik: transform translateY(-8px)
   - Card dapat shadow lebih besar: 0 10px 40px rgba(0,0,0,0.12)
   - Image di dalam scale jadi 1.08 (efek zoom halus)
   - Pakai transition 0.3s ease biar transisinya halus

Data 4 destinasi:
1. Bali, Indonesia
   Tag: "🏝️ Tropical"
   Image: https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80

2. Tokyo, Japan
   Tag: "🏙️ Urban"
   Image: https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80

3. Paris, France
   Tag: "🗼 Romantic"
   Image: https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80

4. Iceland
   Tag: "❄️ Adventure"
   Image: https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80

Section ini taruh di bawah hero, di dalam <main> tag dengan max-width 1200px,
margin auto, padding 60px 24px.

Tulis HTML dan CSS-nya, tambahkan ke file yang sudah ada.
```

## Contoh Prompt — Tahap 2 (Refining)

Hal yang biasanya perlu di-refine:

```
Hasilnya hampir mirip, tapi:

1. Tag emoji di pojok kiri atas image agak transparan / terbaur dengan
   background gelap. Pastikan tag punya background PUTIH SOLID (bukan
   transparan) dan box-shadow tipis biar terangkat.

2. Saat hover card, transisinya kasar. Tambahkan
   `transition: 0.3s ease` di selector .destination-card sendiri,
   bukan cuma di hover state.

3. Image keluar dari rounded corner card (sudut tajam) saat di-zoom.
   Container image (.destination-image-container) WAJIB
   `overflow: hidden`. Card (.destination-card) juga `overflow: hidden`.

4. Responsive belum jalan. Tambahkan:
   - Tablet (max-width 1024px): grid-template-columns: repeat(2, 1fr)
   - Mobile (max-width 768px): grid-template-columns: 1fr

5. Spacing antar info kurang konsisten. Kasih margin-bottom 4px–8px
   di setiap baris info (route, name, dates, price).

Tolong perbaiki.
```

---

## Checkpoint Visual

- [ ] Header "Popular destination" + subtitle tampil di atas
- [ ] Grid 4 card sejajar (4 kolom di desktop)
- [ ] Setiap card menampilkan image, tag, nama, deskripsi
- [ ] Tag dengan emoji muncul di pojok kiri atas image (background putih)
- [ ] Hover di card: card naik + image zoom (transisi halus)
- [ ] Di tablet: jadi 2 kolom; di mobile: jadi 1 kolom

Kalau sudah semua, lanjut ke `05-checklist.md` untuk verifikasi akhir!

---

## Pitfall Umum

**Q: Image keluar dari border-radius card (sudut tajam).**
A: `.destination-image-container` HARUS `overflow: hidden`. Border-radius cuma efek di container, tapi image-nya keluar dari boundary kalau parent tidak `overflow: hidden`. Card-nya juga `overflow: hidden`.

**Q: Tag tertimpa image / tidak kelihatan.**
A: Pastikan tag `position: absolute` dan parent (`.destination-image-container`) `position: relative`. Background tag harus putih solid (bukan transparan).

**Q: Grid jadi 1 kolom langsung dari awal (bukan 4).**
A: Pakai `grid-template-columns: repeat(4, 1fr)`. Jangan pakai `auto-fit` dengan `minmax` — hasilnya bisa berubah-ubah tergantung lebar layar.

**Q: Tinggi card tidak rata.**
A: Pastikan tinggi image fixed (`180px`) dan info padding sama. Kalau text panjangnya beda (misal nama destinasi), card bisa beda tinggi sedikit — itu normal di grid.

**Q: Image zoom efeknya tidak halus.**
A: Pastikan `transition: 0.3s ease` ada di selector `.destination-image` itu sendiri, bukan di hover state. Hover hanya ubah `transform: scale(1.08)`.

**Q: Card tidak naik saat hover (tidak ada efek translateY).**
A: Cek selector. Pakai `.destination-card:hover { transform: translateY(-8px); }`. Pastikan card-nya tidak punya `transform: none` di state default yang menimpa.
