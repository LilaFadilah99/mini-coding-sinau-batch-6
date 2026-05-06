# Tips Menggunakan AI Tools & Teknik Prompting

## Apa itu AI Coding Assistant?

AI coding assistant (seperti **Claude Code**, **Antigravity IDE**, **ChatGPT**, **Cursor**) adalah tools yang bisa **menulis kode untukmu** berdasarkan instruksi yang kamu berikan. AI bisa baca kode kamu, edit file, bahkan menjalankan command — tapi kamu yang tetap memegang kemudi.

Penting untuk diingat:
- AI = **asisten**, bukan pengganti kamu paham coding
- AI bisa salah; hasilnya tidak selalu sempurna
- Kamu yang bertanggung jawab atas kode akhirnya — selalu cek hasilnya

## Apa itu "Vibe Coding"?

**Vibe coding** = ngoding santai, mengikuti vibe, tinggal prompt AI dan terima hasilnya tanpa banyak pikir.

- **Untuk yang sudah paham fundamentals:** vibe coding sangat produktif.
- **Untuk pemula yang baru mulai:** vibe coding bisa jadi jebakan — kamu merasa bisa coding, padahal cuma copy-paste output AI tanpa paham. Begitu AI salah, kamu mentok karena tidak bisa debug.

**Aturan main untuk pemula:**
1. Selalu **baca** kode yang AI kasih, walau belum 100% paham
2. Tanya AI kalau ada syntax yang asing ("apa fungsi tag ini?")
3. Jangan langsung lanjut prompt berikutnya kalau hasil sebelumnya belum kamu cek di browser

---

## 5 Prinsip Prompting yang Baik

### 1. Konteks — Kasih AI tahu kamu lagi ngapain

AI tidak baca pikiranmu. Kasih dia tahu:
- Project apa yang lagi kamu kerjakan
- Section mana yang sedang dibuat
- Goal akhir seperti apa
- Tools/framework apa yang dipakai (HTML & CSS murni? React? dll)

| Buruk | Baik |
|---|---|
| "Buat navbar" | "Aku lagi bikin website travel planner bernama Waypoint pakai HTML + CSS murni (tanpa framework). Tolong buat navbar..." |

### 2. Spesifik — Pakai angka, warna, layout konkret

Hindari kata sifat samar seperti "bagus", "menarik", "modern". Gantilah dengan spesifikasi konkret.

| Buruk | Baik |
|---|---|
| "Buat navbar yang bagus" | "Buat navbar dengan logo 'Waypoint Travel' di kiri, 2 menu (Destinations, My Trips) di tengah, tombol 'AI Planner' di kanan. Background tiap bagian putih dengan border-radius 9999px (capsule). Tombol AI Planner warna hijau neon (#8bff66). Posisi fixed di top dengan jarak 24px dari atas." |

Detail yang berguna untuk dispesifikasi:
- **Warna** — kasih hex code kalau bisa (`#8bff66` lebih jelas daripada "hijau")
- **Ukuran** — font-size, padding, margin, border-radius
- **Layout** — flexbox? grid? berapa kolom?
- **Position** — static, fixed, absolute?
- **Hover/interaksi** — efek apa saat di-hover?

### 3. Referensi — Lampirkan contoh visual

AI multimodal (Claude, Gemini) bisa "lihat" gambar. Kalau kamu punya screenshot target, **lampirkan**!

Cara lampirkan:
- **Antigravity IDE**: paste screenshot atau attach file lewat panel chat
- **Claude Code**: drag screenshot ke terminal, atau tulis path file gambar di prompt
- **Web (claude.ai / chatgpt.com)**: klik tombol attach/paperclip

Format prompt dengan referensi:

```
[Lampiran: screenshot-navbar.png]

Aku lagi bikin website travel planner. Tolong buatkan HTML + CSS untuk navbar
yang tampilannya mirip dengan screenshot terlampir. Spec detailnya:
- ...
- ...
```

### 4. Iterasi — Refine bertahap, jangan satu prompt mega-besar

Prompt pertama jarang menghasilkan output sempurna. Itu normal. Yang penting: kamu tahu cara **memperbaiki** lewat prompt berikutnya.

| Buruk | Baik |
|---|---|
| "Buat seluruh website Waypoint sekaligus" | "Bikin navbar dulu. Setelah aku cek hasilnya, kita lanjut ke hero." → setelah cek di browser → "Hasilnya hampir mirip, tapi warna tombolnya seharusnya hijau neon (#8bff66) bukan biru. Tolong perbaiki." |

Pola refining yang berguna:
- "Hasilnya hampir mirip, tapi [X] seharusnya [Y]. Tolong perbaiki."
- "Tambahkan [komponen] di bagian [posisi]."
- "Jadikan [elemen] lebih [spesifikasi]."
- "Hapus bagian [X], tidak perlu."

### 5. Verifikasi — Cek hasil di browser, jangan asal trust

Setelah AI kasih kode:
1. Save file (kalau pakai Claude Code, biasanya otomatis)
2. Buka `index.html` di browser (atau refresh tab)
3. **Bandingkan** dengan screenshot referensi
4. Catat apa yang masih beda → jadi bahan prompt refining berikutnya

Kalau kamu skip langkah ini dan langsung lanjut prompt berikutnya, error akan menumpuk dan susah di-debug.

---

## Tips Bonus

### Bahasa Prompt
Boleh pakai Bahasa Indonesia. Modern AI handle BI dengan baik. Tidak usah paksa English yang malah bikin kamu ragu nulis prompt panjang.

### Pisahkan Task Besar Jadi Kecil
- Bukan: "Buat seluruh halaman home" (terlalu besar)
- Tapi: "Buat navbar saja" → "Sekarang tambah hero section" → "Sekarang tambah card grid" (bertahap)

### Selalu Baca Output AI
Walau belum 100% paham syntax-nya, baca pelan-pelan. Lihat tag HTML apa yang dipakai, class apa namanya, file mana yang diubah. Mental model coding kamu akan kebangun pelan-pelan.

### Tanya Kalau Ada yang Tidak Paham
Lihat kode AI dan ada baris yang asing? Tanya balik:
- "Apa fungsi `display: flex` di kode ini?"
- "Kenapa kamu pakai class `.hero-overlay`?"
- "Kalau aku ganti angka 24px jadi 32px, efeknya apa?"

AI senang menjelaskan — manfaatkan!

### Jangan Takut Salah
Kalau hasil AI rusak, tidak apa-apa. Kasih tahu errornya, AI akan coba perbaiki. Belajar coding = belajar menyelesaikan error.

### Jangan Tergoda Mega-Prompt
Pemula sering tergoda kasih prompt seperti: "Buatkan website travel planner lengkap dengan navbar, hero, cards, modal, form, footer, responsive, dengan fitur AI." Hasilnya akan amburadul, dan kamu tidak paham 90% kodenya. **Pisah-pisah!**

---

## Checklist Sebelum Mulai Praktik

- [ ] Aku paham 5 prinsip prompting (Konteks, Spesifik, Referensi, Iterasi, Verifikasi)
- [ ] Aku tahu cara attach screenshot ke AI tools
- [ ] Aku punya folder kosong dengan `index.html` dan `css/style.css`
- [ ] Aku sudah punya screenshot Waypoint (dari trainer)
- [ ] Aku siap baca output AI, bukan asal copy-paste

Kalau sudah semua, lanjut ke `02-praktik-navbar.md`!
