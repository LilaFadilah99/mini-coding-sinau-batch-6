# 📝 Panduan Prompting untuk Pemula: Section Popular Destination

**Untuk Peserta Pemula:** File ini berisi prompt dalam bahasa sehari-hari (bukan istilah teknis) untuk membuat section "Popular Destination" yang cantik. Follow step-by-step!

---

## 🎯 PROMPT 0: Memberitahu AI tentang Projek Kita (WAJIB!)

**Kirim prompt ini terlebih dahulu ke AI:**

```
Halo! Kamu adalah asisten web developer senior yang akan membantu saya membangun
website travel bernama "Waypoint".

Informasi Penting tentang Waypoint:
1. Warna khas kami: Hijau Lime terang (#8bff66) - seperti warna stabilo hijau
2. Font yang kami pakai: 'Plus Jakarta Sans' - font modern dan clean
3. Style desain: Modern, minimalis, bersih, dan premium
4. Sudut elemen: Membulat lembut (tidak kotak tajam)
5. Jarak antar elemen: Konsisten dan rapi

Teknologi:
- Gunakan HTML dan CSS biasa (jangan pakai framework seperti React atau Bootstrap)
- Class diberi nama dengan tanda minus, contoh: destination-card (bukan destinationCard)
- Kode harus sangat rapi dan mudah dibaca pemula

Konfirmasi jika kamu sudah paham tentang projek Waypoint saya!
```

✅ **Tunggu AI konfirmasi sebelum lanjut!**

---

## 📝 PROMPT 1: Buat Struktur Halaman "Destinasi Populer"

**Gunakan bahasa deskriptif, bukan teknis:**

```
Saya ingin membuat bagian website yang menampilkan "Destinasi Populer".

BAGIAN 1 - JUDUL BESAR:
- Buat judul besar "Popular destination"
- Di bawahnya ada kalimat penjelasan: "Discover the most loved destinations by travelers worldwide"
- Kedua teks ini harus berada di tengah halaman

BAGIAN 2 - KARTU DESTINASI (buat 4 kartu):

Kartu 1 - Bali:
- Ada gambar pemandangan Bali (pakai gambar dari Unsplash)
- Di atas gambar ada badge bertuliskan "🌴 Tropical"
- Di bawah gambar ada info:
  * Tulisan "Your City → Bali"
  * Nama destinasi: "Bali, Indonesia"
  * Kalimat ajakan: "Explore with AI Planner"
  * Harga: "From AI Trip" (kata "AI Trip" dibuat tebal)

Kartu 2 - Tokyo:
- Gambar jalanan Tokyo yang ramai (Unsplash)
- Badge: "🏙 Urban"
- Info: "Your City → Tokyo", "Tokyo, Japan"
- Ajakan sama, harga sama

Kartu 3 - Paris:
- Gambar Menara Eiffel (Unsplash)
- Badge: "🗼 Romantic"
- Info: "Your City → Paris", "Paris, France"
- Ajakan sama, harga sama

Kartu 4 - Iceland:
- Gambar pemandangan Iceland (Unsplash)
- Badge: "⛰ Adventure"
- Info: "Your City → Iceland", "Iceland"
- Ajakan sama, harga sama

ATURAN PENAMAAN:
- Bagian besar ini diberi nama class: "destinations-section"
- Bagian judul: "section-header"
- Wadah kartu: "destinations-grid"
- Setiap kartu: "destination-card"
- Badge: "destination-badge"
- Gambar: "destination-image"
- Bagian info: "destination-info"

Tolong buatkan struktur HTML-nya saja dulu (belum pakai CSS).
```

---

## 🎨 PROMPT 2: Siapkan "Palet Warna dan Ukuran"

**Jelaskan seperti menyiapkan cat sebelum melukis:**

```
Sekarang kita siapkan "palet warna dan ukuran" untuk projek Waypoint.
Ini seperti menyiapkan cat di palet sebelum melukis, jadi nanti gampang pakainya.

Tolong buatkan CSS Variables dengan ketentuan:

WARNA:
- Warna utama (aksen): Hijau Lime #8bff66 - untuk tombol dan highlight
- Background: Putih bersih #ffffff
- Text utama: Hitam gelap #1e293b - untuk judul
- Text sekunder: Abu-abu #64748b - untuk keterangan kecil
- Border: Abu-abu terang #e2e8f0
- Bayangan: Hitam transparan rgba(0, 0, 0, 0.08)

JARAK (spacing):
- Jarak super kecil: 8px
- Jarak kecil: 16px
- Jarak sedang: 24px
- Jarak besar: 32px
- Jarak sangat besar: 48px
- Jarak extra besar: 80px

FONT:
- Nama font: 'Plus Jakarta Sans'
- Ukuran text kecil: 14px
- Ukuran text normal: 16px
- Ukuran text besar: 18px
- Ukuran judul: 36px

BENTUK SUDUT:
- Sudut kartu: Membulat 16px
- Sudut badge: Sangat membulat 20px (seperti pil)

ANIMASI:
- Kecepatan transisi: 0.3 detik
- Jenis gerakan: Smooth (ease)

Gunakan format :root untuk CSS Variables dan kasih komentar penjelasan.
Jangan lupa import Google Font 'Plus Jakarta Sans'.
```

---

## 📍 PROMPT 3: Hias Judul dan Sub-judul

**Gunakan istilah visual, bukan property CSS:**

```
Sekarang kita hias bagian judul "Popular destination".

Saya ingin:

UNTUK BAGIAN destinations-section:
- Kasih ruang napas di atas dan bawah yang lebar (gunakan jarak extra besar dari palet)
- Background putih bersih

UNTUK BAGIAN section-header:
- Posisi semua text di tengah-tengah
- Lebar maksimal tidak boleh lebih dari 600px (biar tidak terlalu lebar)
- Text harus berada di tengah halaman
- Kasih jarak ke bawah yang besar sebelum kartu muncul

UNTUK JUDUL (h2):
- Ukuran font: Besar (36px dari palet)
- Ketebalan: Sangat tebal (bold)
- Warna: Hitam gelap dari palet
- Jarak ke bawah: Sedikit saja (12px)
- Jarak antar baris text: Rapat (1.2)

UNTUK SUB-JUDUL (p):
- Ukuran font: Besar (18px dari palet)
- Warna: Abu-abu dari palet
- Jarak antar baris: Lebih longgar (1.6) biar enak dibaca
- Tidak ada margin

Gunakan CSS variables yang sudah kita buat dan kasih komentar.
```

---

## 📦 PROMPT 4: Susun Kartu Secara Horizontal (Flexbox)

**Jelaskan dengan visual, bukan istilah teknis:**

```
Sekarang bagian paling penting: Kita mau 4 kartu destinasi itu berdiri
SEJAJAR KE SAMPING (horizontal), bukan bertumpuk ke bawah.

Untuk wadah kartu (destinations-grid), atur seperti ini:

PENGATURAN LAYOUT:
- Aktifkan mode "Flexbox" (ini yang bikin kartu bisa sejajar)
- Posisi kartu: Di tengah-tengah horizontal
- Semua kartu harus sama tinggi
- Jarak antar kartu: Sedang (24px dari palet) - tidak terlalu rapat, tidak terlalu jauh
- Kalau layar kecil (mobile): Kartu turun ke bawah otomatis (wrap)

PENGATURAN WADAH:
- Lebar maksimal: 1200px (biar tidak terlalu lebar di layar besar)
- Posisi wadah: Di tengah halaman
- Kasih ruang kiri-kanan: 20px (biar tidak mentok pinggir)

Tolong kasih komentar penjelasan untuk setiap aturan Flexbox.
```

---

## 🎴 PROMPT 5: Hias Kartu Destinasi

**Gunakan bahasa deskriptif untuk styling:**

```
Sekarang kita hias setiap kartu destinasi supaya cantik dan menarik!

KARTU UTAMA (destination-card):
- Lebar: Tetap 280px (tidak berubah-ubah)
- Background: Putih bersih
- Sudut: Membulat lembut (16px dari palet)
- Gambar tidak boleh keluar dari sudut yang membulat
- Bayangan: Halus di bawah kartu (pakai bayangan dari palet)
- Saat mouse hover di atas kartu: Kartu naik sedikit (8px ke atas)
- Saat hover: Bayangan jadi lebih tebal
- Animasi hover harus smooth (pakai transisi dari palet)
- Cursor jadi jari pointing (tanda bisa diklik)
- Susunan dalam kartu: Vertikal dari atas ke bawah

BAGIAN GAMBAR (card-image-wrapper):
- Tinggi tetap: 200px
- Lebar: Full (100%)
- Gambar tidak boleh melebihi batas

GAMBAR (destination-image):
- Ukuran: Full, sesuai wadahnya
- Gambar harus proporsional (tidak gepeng atau melebar)
- Tampil sebagai block

BADGE (destination-badge):
- Posisi: Melayang di atas gambar (kiri atas)
- Jarak dari atas: 16px
- Jarak dari kiri: 16px
- Background: Putih
- Ruang dalam: 8px atas-bawah, 16px kiri-kanan
- Bentuk: Sangat membulat (20px - seperti pil)
- Ukuran text: Kecil (14px)
- Ketebalan: Semi-bold (600)
- Bayangan: Halus
- Warna text: Hitam gelap
- Harus muncul di atas gambar (z-index: 10)

BAGIAN INFO (destination-info):
- Ruang dalam: 20px di semua sisi
- Susunan: Vertikal
- Jarak antar elemen: 8px

TEXT LOKASI (destination-location):
- Ukuran: Kecil (14px)
- Warna: Abu-abu
- Tidak ada margin

NAMA DESTINASI (destination-name):
- Ukuran: 20px
- Ketebalan: Sangat tebal (bold)
- Warna: Hitam gelap
- Tidak ada margin
- Jarak antar baris: Rapat (1.3)

TEXT AJAKAN (destination-cta):
- Ukuran: Kecil (14px)
- Warna: Abu-abu
- Tidak ada margin

HARGA (destination-price):
- Ukuran: Normal (16px)
- Warna: Abu-abu
- Tidak ada margin
- Untuk kata "AI Trip" yang ditebalkan (strong tag):
  * Ketebalan: Bold
  * Warna: Hitam gelap

Gunakan CSS variables dan kasih komentar untuk setiap bagian.
```

---

## 📱 PROMPT 6: Buat Responsive untuk HP (BONUS)

**Jelaskan apa yang terjadi di layar kecil:**

```
Sekarang kita atur supaya tampilan bagus juga di HP dan tablet.

UNTUK TABLET (layar maksimal 768px):
- Jarak antar kartu jadi lebih kecil (16px)
- Lebar kartu: Ikuti lebar layar (100%), tapi maksimal 400px

UNTUK HP (layar maksimal 480px):
- Ruang atas-bawah section jadi lebih kecil (40px)
- Judul utama jadi lebih kecil (28px)
- Sub-judul jadi ukuran normal (16px)
- Kartu: Lebar full mengikuti layar
- Ruang kiri-kanan grid lebih kecil (16px)

Gunakan @media untuk aturan responsive dan kasih komentar.
```

---

## 🎯 PROMPT DEBUGGING (Kalau Ada Masalah)

### Jika kartu masih vertikal (tidak horizontal):

```
Kartu-kartu saya masih bertumpuk ke bawah (vertikal), tidak sejajar ke samping.

Ini CSS untuk wadah kartu saya:
[paste CSS untuk .destinations-grid]

Tolong perbaiki supaya kartu bisa sejajar horizontal.
```

### Jika gambar gepeng/melebar:

```
Gambar di kartu saya jadi gepeng atau melebar aneh (tidak proporsional).

Ini CSS untuk gambar saya:
[paste CSS untuk .destination-image]

Tolong perbaiki supaya gambar proporsional dan tidak terdistorsi.
```

### Jika hover tidak smooth:

```
Saat saya hover mouse di kartu, gerakannya patah-patah (tidak halus).

Ini CSS untuk kartu saya:
[paste CSS untuk .destination-card]

Tolong tambahkan animasi transisi yang smooth.
```

### Jika badge tidak muncul di atas gambar:

```
Badge saya tidak muncul di atas gambar, atau posisinya salah.

Ini CSS saya:
[paste CSS untuk .destination-badge dan .card-image-wrapper]

Tolong perbaiki positioning badge-nya.
```

---

## 💡 TIPS PROMPTING UNTUK PEMULA

### ✅ DO (Lakukan):

1. **Gunakan Bahasa Visual:**
   - ✅ "Kartu naik sedikit saat hover"
   - ❌ "transform: translateY(-8px)"

2. **Jelaskan yang Kamu Lihat:**
   - ✅ "Jarak antar kartu pas, tidak terlalu rapat"
   - ❌ "gap: 24px"

3. **Analogikan dengan Dunia Nyata:**
   - ✅ "Badge melayang di atas gambar seperti stiker"
   - ❌ "position: absolute; top: 16px"

4. **Fokus pada Hasil Akhir:**
   - ✅ "Saya ingin kartu berbaris ke samping"
   - ❌ "Gunakan display: flex dengan justify-content"

### ❌ DON'T (Jangan):

1. **Jangan Pakai Istilah Teknis** - Kecuali sudah disebutkan di prompt (seperti nama class)
2. **Jangan Skip Master Context** - Ini kunci konsistensi!
3. **Jangan Langsung Kompleks** - Ikuti urutan prompt 1-6
4. **Jangan Takut Tanya** - Kalau AI kasih istilah aneh, tanya artinya!

---

## 🔄 Urutan Prompt yang Benar:

```
WAJIB dimulai dari sini:
1. Master Context (Prompt 0) ← TIDAK BOLEH SKIP!
   ↓
2. HTML Structure (Prompt 1)
   ↓
3. CSS Variables (Prompt 2)
   ↓
4. Styling Header (Prompt 3)
   ↓
5. Flexbox Container (Prompt 4)
   ↓
6. Individual Cards (Prompt 5)
   ↓
7. Responsive (Prompt 6) - Optional
```

**Jangan acak atau skip urutan!**

---

## 📝 Checklist Setelah Semua Prompt:

Pastikan hasil akhir kamu punya semua ini:

- [ ] 4 kartu muncul sejajar ke samping (horizontal)
- [ ] Saat hover mouse di kartu, kartu naik sedikit dan bayangan lebih tebal
- [ ] Kalau layar kecil, kartu turun ke bawah (responsive)
- [ ] Gambar tidak gepeng atau melebar aneh
- [ ] Jarak antar kartu konsisten dan rapi
- [ ] Badge muncul di pojok kiri atas gambar
- [ ] Warna sesuai dengan Waypoint (hijau lime untuk aksen)
- [ ] Sudut kartu membulat lembut

---

## 🌟 Contoh Perbedaan: Teknis vs Visual

### ❌ Prompt Teknis (Susah):

```
Buatkan CSS untuk .destination-card dengan:
- border-radius: var(--border-radius-card)
- box-shadow: 0 4px 12px var(--color-shadow)
- transition: all 0.3s ease
```

### ✅ Prompt Visual (Mudah):

```
Saya ingin kartu destinasi punya:
- Sudut yang membulat lembut
- Bayangan halus di bawahnya
- Saat hover, naik sedikit dan bayangan jadi lebih tebal
- Gerakan harus smooth (tidak patah-patah)
```

**Hasilnya SAMA, tapi cara komunikasinya beda!**

---

## 🎓 Setelah Berhasil

Kalau kamu sudah berhasil buat section Popular Destination yang cantik:

1. ✅ **Screenshot hasilmu** - Simpan sebagai bukti
2. ✅ **Coba hover** - Pastikan animasi smooth
3. ✅ **Resize browser** - Test responsive
4. ✅ **Buka di HP** - Test di device asli
5. ✅ **Share di grup** - Pamerkan hasil kerjamu!

---

**Selamat mencoba! Kalau stuck, gunakan Prompt Debugging di atas.** 🚀

**Ingat: Kamu tidak perlu hafal CSS. Yang penting PAHAM apa yang kamu inginkan dan bisa jelaskan ke AI dengan bahasa yang jelas!**
