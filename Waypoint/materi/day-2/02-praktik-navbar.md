# Praktik 1: Navbar

**Estimasi: 20 menit**

## Target Visual

Navbar Waypoint terdiri dari **3 bagian terpisah** dalam satu baris:
- **Kiri**: Logo "Waypoint Travel" dengan icon gunung — di dalam pill putih
- **Tengah**: Menu "Destinations" (active) dan "My Trips" — di dalam pill putih
- **Kanan**: Tombol "AI Planner" — warna hijau neon

Posisi: fixed di top, melayang dengan jarak 24px dari atas, **background transparan** (tidak ada bar penuh selebar layar).

> **Lampirkan ke AI:** `screenshot-navbar.png`

## Spesifikasi Detail

| Elemen | Spec |
|---|---|
| Logo text | "Waypoint Travel" |
| Logo icon | ⛰️ (emoji gunung) |
| Menu items | "Destinations", "My Trips" |
| Active menu | "Destinations" |
| CTA button | "AI Planner" |
| Background pill | white (`#ffffff`) |
| Pill border-radius | 9999px (full rounded / capsule) |
| Pill shadow | subtle: `0 1px 3px rgba(0,0,0,0.1)` |
| CTA button color | `#8bff66` (neon green) |
| CTA text color | `#1a1a1a` (hampir hitam, kontras tinggi) |
| Position | `fixed`, `top: 24px` |
| Padding pill logo | `3px 10px` |
| Padding link menu | `10px 24px` |
| Padding CTA button | `12px 24px` |
| Font family | "Plus Jakarta Sans", sans-serif |
| z-index | 1000 |

---

## Contoh Prompt — Tahap 1 (Awal)

Untuk peserta yang baru pertama kali prompt, mulai dengan ini:

```
[Lampirkan screenshot-navbar.png]

Aku lagi belajar bikin website travel planner bernama Waypoint pakai HTML
dan CSS murni (tanpa framework apapun). Tolong bantu aku buat navbar yang
tampilannya sama seperti screenshot terlampir.

Detail navbar yang aku mau:
- 3 bagian terpisah dalam 1 baris: logo (kiri), menu (tengah), tombol (kanan)
- Logo: icon gunung (emoji ⛰️) dan teks "Waypoint Travel" — di dalam pill
  putih dengan border-radius penuh
- Menu: 2 link "Destinations" (active) dan "My Trips" — di dalam pill putih
  dengan border-radius penuh juga
- Tombol kanan: "AI Planner", warna hijau neon (#8bff66) dengan teks hitam
  (#1a1a1a)
- Setiap pill putih punya shadow tipis (0 1px 3px rgba(0,0,0,0.1))
- Posisi navbar: fixed di top dengan jarak 24px dari atas, background
  navbar-nya sendiri TRANSPARAN (yang putih cuma pill-nya)
- Container navbar max-width 1200px, center secara horizontal
- Layout pakai flex dengan justify-content: space-between
- Font family: "Plus Jakarta Sans" dari Google Fonts (sudah aku link di head)
- z-index navbar: 1000

Tulis HTML di file index.html (di dalam <body>) dan CSS-nya di
file css/style.css. Pastikan link CSS-nya sudah ada di <head>.
```

## Contoh Prompt — Tahap 2 (Refining setelah cek hasil)

Setelah cek di browser dan ternyata ada yang beda dari screenshot:

```
Hasilnya sudah mirip tapi ada beberapa yang masih beda dari screenshot:

1. Pill logo dan pill menu seharusnya TERPISAH (ada jarak di antaranya),
   bukan menempel. Pakai justify-content: space-between di nav-container
   biar logo nempel kiri, menu di tengah, tombol nempel kanan.

2. Tombol AI Planner warnanya kurang neon — tolong gantikan ke #8bff66
   persis (jangan diganti ke nuansa hijau lain).

3. Jarak menu link dari tepi pill kurang besar — coba padding 10px 24px
   di .nav-link.

4. Shadow di pill terlalu kuat — kasih shadow lembut saja:
   0 1px 3px rgba(0,0,0,0.1).

5. Logo pill terlalu padat — coba padding 3px 10px saja, dan icon-nya
   font-size 24px.

Tolong perbaiki bagian-bagian itu di style.css.
```

## Contoh Prompt — Tahap 3 (Hover Effect)

Setelah layout pas, tambahkan interaksi:

```
Sekarang tambahkan hover effect:

- Saat hover di tombol AI Planner: warna jadi sedikit lebih gelap (#7ae356),
  card sedikit naik (translateY(-2px)), dan ada shadow hijau tipis di bawah
  (0 8px 20px rgba(139, 255, 102, 0.4)).

- Saat hover di menu link (yang tidak active): background jadi abu-abu
  muda (#f1f5f9) dengan warna teks lebih gelap (#1e293b).

- Active menu (.active): warna teks hitam, background #f1f5f9.

Pakai transition 0.3s ease biar transisinya halus.
```

---

## Checkpoint Visual

Sebelum lanjut ke section berikutnya, pastikan navbar kamu:

- [ ] Terlihat 3 bagian terpisah (logo, menu, tombol) dengan jarak antaranya
- [ ] Logo "Waypoint Travel" tampil di kiri dengan icon gunung
- [ ] Menu "Destinations" dan "My Trips" tampil di tengah
- [ ] Tombol "AI Planner" tampil di kanan, warna hijau neon
- [ ] Posisi fixed di top — saat halaman di-scroll, navbar tetap di atas
- [ ] Background navbar transparan (yang putih cuma pill-pill kecil)
- [ ] Hover di tombol/link memberi efek visual

Kalau sudah semua, lanjut ke `03-praktik-hero.md`!

---

## Pitfall Umum

**Q: Navbar saya jadi 1 bar putih full-width, bukan 3 pill terpisah.**
A: Background di `.navbar` di-set ke putih. Pastikan `.navbar` background-nya `transparent`. Yang putih cuma `.nav-brand`, `.nav-menu`, dan `.btn-ai-planner`.

**Q: Navbar tidak fixed, ikut scroll.**
A: Pastikan `position: fixed` di `.navbar`, jangan `relative` atau `sticky`. Tambahkan `z-index: 1000` biar di atas elemen lain.

**Q: Menu tidak di tengah.**
A: Pastikan `.nav-container` pakai `display: flex` dan `justify-content: space-between`. Dengan 3 anak dan space-between, anak ke-2 (menu) otomatis ke tengah.

**Q: Tombol AI Planner warnanya beda dari screenshot.**
A: Kasih hex code persis: `#8bff66`. Jangan andalkan AI menebak nuansa hijau dari deskripsi "neon green".

**Q: Shadow di pill kelihatan terlalu kuat / kasar.**
A: Pakai shadow yang lembut: `0 1px 3px rgba(0,0,0,0.1)`. Jangan pakai shadow gelap besar.

**Q: Pill logo dan pill menu menempel jadi satu.**
A: Container `.nav-container` harus pakai `justify-content: space-between`. Cek juga apakah ada margin/gap yang menyatukan mereka.
