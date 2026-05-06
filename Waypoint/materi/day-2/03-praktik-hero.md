# Praktik 2: Hero Section

**Estimasi: 25 menit**

## Target Visual

Hero section terdiri dari **2 layer utama**:
1. **Background**: foto pantai tropis full-width sebagai latar belakang, dengan **overlay gradient** (gelap di atas, putih di bawah — biar menyatu dengan section setelahnya)
2. **Content**: judul besar di tengah ("Explore the World, One Journey at a Time."), subtitle di bawahnya, lalu **floating card** berisi form planner

Floating card berisi:
- Judul "Plan Your Travel Journey"
- 4 input: Destination, Days, Budget (dropdown), Interests
- Filter pills: Bali, Tokyo, Paris, New York, Dubai, London
- Tombol "Generate Itinerary" hijau neon

> **Lampirkan ke AI:** `screenshot-hero.png`

## Strategi: Pisah Jadi 2 Prompt

Hero ini cukup kompleks. **Jangan minta AI bikin sekaligus** — pisah jadi 2 langkah:
1. **Langkah A**: Background + judul + subtitle saja
2. **Langkah B**: Floating card dengan form-nya

Cek hasil setiap langkah sebelum lanjut.

## Spesifikasi Detail

### Background & Konten Tengah
| Elemen | Spec |
|---|---|
| Tinggi minimal | `600px` |
| Position | `relative`, `overflow: hidden` |
| Background image | foto pantai tropis (Unsplash URL di bawah) |
| Image style | `width: 100%; height: 100%; object-fit: cover` |
| Image container | `position: absolute; inset: 0; z-index: -1` |
| Overlay | linear-gradient atas-ke-bawah: `rgba(0,0,0,0.3) → rgba(0,0,0,0.4) → rgba(255,255,255,1)` |
| Padding hero | `250px` atas, `24px` samping, `180px` bawah |
| Title text | "Explore the World, One Journey at a Time." (dengan `<br>` setelah "One") |
| Title font-size | `52px`, weight `800` |
| Title color | white, dengan text-shadow tipis biar terbaca di atas image |
| Subtitle text | "AI-powered itineraries crafted just for you. Explore smarter, travel better." |
| Subtitle color | white opacity `0.9`, font-size `17px` |

### Floating Card (Plan Your Travel Journey)
| Elemen | Spec |
|---|---|
| Background | white |
| Border-radius | `16px` |
| Shadow | `0 20px 60px rgba(0,0,0,0.15)` (besar dan mewah) |
| Padding | `24px` |
| Max-width | `900px` |
| Position | `relative`, `z-index: 10` |
| Form layout | `display: grid`, `grid-template-columns: repeat(4, 1fr)` untuk inputs |
| Input border-radius | `9999px` (full rounded) |
| Input padding | `14px 18px` |
| Input border | `1px solid #e2e8f0` |
| Filter pills | 6 pill: Bali, Tokyo, Paris, New York, Dubai, London |
| Pill style | `border 1px solid #e2e8f0`, `border-radius: 16px`, `padding: 8px 16px`, background transparan |
| Submit button | "Generate Itinerary", background `#8bff66`, border-radius `9999px`, padding `14px 32px` |

### URL Background Image
```
https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80
```

---

## Contoh Prompt — Langkah A: Background + Konten Tengah

```
[Lampirkan screenshot-hero.png]

Aku lanjut bikin Waypoint. Sekarang aku mau bikin hero section.
Untuk SEKARANG, fokus dulu di background dan konten tengah saja —
JANGAN bikin form-nya dulu. Itu langkah berikutnya.

Spec hero section:
- Section dengan class .hero, position relative, overflow hidden
- Tinggi minimal 600px
- Padding: 250px atas, 24px samping, 180px bawah
- Layout: flex column, align-items center, justify-content center

Background:
- Container background dengan position absolute, inset 0, z-index -1
- Image full-cover (width 100%, height 100%, object-fit cover)
  URL: https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80
- Overlay di atas image dengan position absolute inset 0
  Gradient atas-ke-bawah:
    rgba(0,0,0,0.3) di 0%
    rgba(0,0,0,0.4) di 50%
    rgba(255,255,255,1) di 100%
  Tujuan: bagian bawah hero "menyatu" dengan section putih setelahnya

Konten tengah (di atas overlay):
- Judul: "Explore the World, One Journey at a Time."
  (kasih <br> setelah kata "One" biar dia tampil 2 baris)
  Font-size 52px, font-weight 800, warna putih
  Text-shadow tipis biar terbaca: 0 2px 20px rgba(0,0,0,0.3)
- Subtitle di bawah judul: "AI-powered itineraries crafted just for you.
  Explore smarter, travel better."
  Warna putih dengan opacity 0.9, font-size 17px
- Konten ini taruh di dalam div .hero-content dengan max-width 700px,
  text-align center, margin-bottom 40px

Tambahkan ke index.html (di bawah navbar) dan style.css.
JANGAN buat form/floating card dulu — itu nanti.
```

## Contoh Prompt — Langkah B: Floating Card + Form

Setelah Langkah A jadi dan dicek di browser:

```
Sekarang tambahkan FLOATING CARD di dalam hero section
(di bawah subtitle), berisi form quick planner.

Spec card:
- div dengan class .hero-card
- Background putih, border-radius 16px
- Shadow besar: 0 20px 60px rgba(0,0,0,0.15)
- Padding 24px, max-width 900px, lebar 100%
- Position relative, z-index 10 (biar di atas overlay hero)

Header card:
- Judul "Plan Your Travel Journey", font-size 24px, weight 700
- Margin bottom 24px setelah judul

Form di dalam card (class .hero-form):
- 4 input dalam grid 4 kolom (gap 16px):
  1. Destination (text input, placeholder "Type the destination", required)
  2. Days (number input, min 1, max 14, value default 3, required)
  3. Budget (select dropdown, options: Budget, Moderate (selected), Luxury, required)
  4. Interests (text input, placeholder "Your interests")
- Setiap field punya label di atasnya:
  font 13px, weight 600, margin-bottom 8px
- Setiap input style:
  padding 14px 18px
  border 1px solid #e2e8f0
  border-radius 9999px (full rounded)
  font-size 15px
  Saat focus: border-color #8bff66, box-shadow 0 0 0 3px #f0fdf4

Setelah row inputs, ada row baru dengan flex space-between:
- Bagian kiri (.filter-section):
  Label "Filter:" + 6 pill button:
  Bali, Tokyo, Paris, New York, Dubai, London
  Pill style:
    border 1px solid #e2e8f0
    border-radius 16px
    padding 8px 16px
    background transparan
    font-size 13px
    color #64748b
- Bagian kanan: tombol submit "Generate Itinerary"
  background #8bff66
  color #1a1a1a
  padding 14px 32px
  border-radius 9999px (full rounded)
  font-weight 700
  font-size 15px

Pastikan card "melayang" terlihat di atas hero — pakai shadow besar dan
position relative dengan z-index 10.
```

## Contoh Prompt — Tahap 3 (Refining + Responsive)

Hal-hal yang biasanya perlu di-refine:

```
Beberapa perbaikan yang masih perlu:

1. Saat layar < 1024px (tablet), inputs jadikan 2 kolom
   (grid-template-columns: repeat(2, 1fr)).

2. Saat layar < 768px (mobile), inputs jadikan 1 kolom
   (grid-template-columns: 1fr).

3. Filter pills di mobile susah dilihat — bikin scroll horizontal
   kalau layar kecil:
   .filter-pills { overflow-x: auto; flex-wrap: nowrap; }
   .filter-pill { flex-shrink: 0; }

4. Saat hover di pill, kasih border warna hijau (#8bff66) dan
   background sedikit abu (#f8fafc), color jadi #1e293b.

5. Saat hover di tombol Generate Itinerary, kasih efek
   translateY(-2px) dan shadow hijau:
   0 8px 24px rgba(139, 255, 102, 0.4).
   Hover background ganti ke #7ae356.

Tolong update CSS-nya.
```

---

## Checkpoint Visual

Sebelum lanjut ke section berikutnya:

- [ ] Background image pantai tampil full-width di hero
- [ ] Overlay gradient kelihatan (atas gelap, bawah memutih)
- [ ] Judul besar putih tampil di tengah, ada line-break setelah "One"
- [ ] Subtitle tampil di bawah judul, putih sedikit transparan
- [ ] Floating card putih kelihatan "melayang" di tengah-bawah hero
- [ ] Card berisi 4 input: Destination, Days, Budget (dropdown), Interests
- [ ] Filter pills (Bali, Tokyo, Paris, New York, Dubai, London) muncul
- [ ] Tombol "Generate Itinerary" tampil di kanan, warna hijau neon
- [ ] Inputs adaptif (4 kolom desktop, 2 kolom tablet, 1 kolom mobile)

Kalau sudah semua, lanjut ke `04-praktik-popular-destination.md`!

---

## Pitfall Umum

**Q: Background image-nya tidak muncul / cuma kosong putih.**
A: Pastikan URL image valid (buka URL di tab baru dulu). Pastikan `.hero-image` punya `width: 100%; height: 100%; object-fit: cover`. Container `.hero-background` harus `position: absolute; inset: 0; z-index: -1`.

**Q: Overlay gradient tidak kelihatan / jadi blok hitam saja.**
A: Cek format gradient: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 50%, rgba(255,255,255,1) 100%)`. `.hero-overlay` harus `position: absolute; inset: 0`.

**Q: Floating card tertutup oleh overlay/image.**
A: Kasih `.hero-card` `position: relative; z-index: 10`. Background di `.hero-background` harus `z-index: -1`.

**Q: Inputs grid 4 kolom-nya tetap di mobile (tidak responsive).**
A: Tambahkan media query: `@media (max-width: 1024px) { .hero-form-inputs { grid-template-columns: repeat(2, 1fr); } }` dan untuk mobile `1fr`.

**Q: Judul dan subtitle tidak terbaca karena background terlalu cerah.**
A: Tambahkan `text-shadow: 0 2px 20px rgba(0,0,0,0.3)` di judul & subtitle. Atau bikin overlay-nya sedikit lebih gelap di bagian atas.

**Q: Padding hero terlalu kecil, content kelihatan numpuk dengan navbar.**
A: Pastikan `padding-top` minimal 250px (karena navbar fixed di atas dengan tinggi sekitar 80–100px).
