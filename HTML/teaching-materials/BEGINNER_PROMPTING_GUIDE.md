# 🗣️ Mengajar AI dengan Bahasa Kita (Panduan untuk Pemula)

Halo calon Developer! Di panduan ini, kita akan belajar cara membangun website tanpa harus hafal kode (tag HTML). Rahasianya? Kita akan bercerita ke AI tentang **tampilan visual** yang kita inginkan menggunakan bahasa sehari-hari.

---

## 🏗️ Langkah 0: Memberitahu AI Rahasia Projek Kita (Wajib!)

Sebelum meminta AI membuat kode apapun, kamu **WAJIB** mengirimkan pesan ini agar AI tahu projek apa yang sedang kita bangun. Pesan ini berisi "DNA" dari projek kita agar hasilnya konsisten.

> **Pesan Pembuka (Super Master Context):**
> "Hadir sebagai Senior Web Developer. Kita akan membangun projek portal travel bernama **'Waypoint AI'**. Kamu harus mengikuti aturan ketat berikut agar hasil koding konsisten 100% seperti blueprint saya:
>
> 1. **Identitas Visual:** Gunakan aksen Hijau Lime (#8bff66), font 'Plus Jakarta Sans', dan desain modern dengan sudut membulat (border-radius: 16px).
> 2. **Arsitektur:** Gunakan Vanilla HTML, CSS, dan JS murni. Terapkan sistem 'View Switching' (satu halaman dengan banyak section yang bergantian muncul).
> 3. **Standar Penamaan:** Gunakan class seperti `navbar`, `hero`, `view`, `form-group`, dan `destination-card`.
> 4. **ID Utama:** Gunakan ID `planner-form`, `destination`, `days`, `budget`, dan `btn-generate` untuk form planner.
> 5. **Aturan Koding:** Kode harus sangat rapi, menggunakan tag semantik (nav, main, section), dan mudah dipelajari pemula.
>
> Konfirmasi jika kamu sudah memegang DNA projek Waypoint ini, dan mari kita mulai membangun bagian pertama!"

---

## 🎯 Bagian 1: Membangun Judul & Cerita (Hero Section)

Bayangkan kamu ingin membuat bagian pembuka website travel yang megah. Gunakan bahasa deskriptif seperti ini:

### 📝 Prompt Bahasa Manusia:

> "Saya ingin membuat bagian pembuka website travel 'Waypoint'.
>
> 1. Buat kalimat judul yang paling besar dan tebal tentang petualangan menjelajah dunia.
> 2. Di bawah judul itu, buat satu kalimat kecil yang menjelaskan bahwa website ini menggunakan AI untuk membuat jadwal perjalanan.
> 3. Buat juga satu judul seksi lagi di bawahnya tentang 'Destinasi Populer' lengkap dengan penjelasan singkatnya.
>
> **Rahasia agar Spesifik:** Tolong beri 'nama identitas' (class) yang berbeda untuk masing-masing judul dan kalimat tersebut agar nanti saya bisa menghiasnya dengan mudah."

---

## 🎯 Bagian 2: Membangun Kotak Interaksi (Forms & Inputs)

Sekarang, kita ingin membangun tempat user memasukkan rencana mereka. Alih-alih menyebut _'Input'_ atau _'Select'_, ceritakan fungsinya:

### 📝 Prompt Bahasa Manusia:

> "Saya ingin fitur 'AI Planner'. Tolong buatkan susunan isian seperti ini:
>
> 1. Satu kotak tempat orang mengetik nama kota tujuan (harus diisi, tidak boleh kosong).
> 2. Satu kotak untuk angka berapa hari mereka pergi (atur supaya hanya bisa mengisi 1 sampai 14 hari).
> 3. Satu daftar pilihan (dropdown) untuk Budget, isinya: Murah, Sedang, Mewah.
> 4. Satu kotak lagi untuk minat atau hobi mereka.
> 5. Sebuah tombol besar bertuliskan 'Generate Itinerary' yang punya tempat rahasia untuk teks 'sedang proses'.
>
> **Rahasia agar Rapi:** Tolong setiap nama isian (label) dan kotaknya dibungkus dalam satu kelompok (group) yang sama supaya tampilannya berbaris rapi dan tidak berantakan."

---

## 🎯 Bagian 3: Memberi "Nama Unik" agar Sesuai Projek

Jika kamu ingin hasil kodenya langsung bisa "nyambung" dengan sistem cerdas di projek Waypoint, tambahkan kalimat sakti ini di akhir permintaanmu:

### 📝 Prompt Tambahan:

> "Gunakan nama-nama unik (ID) berikut agar sistem saya mengenalnya:
>
> - Form utamanya: `planner-form`
> - Kotak kota: `destination`
> - Kotak hari: `days`
> - Pilihan budget: `budget`
> - Kotak hobi: `interests`
> - Tombolnya: `btn-generate`
>
> Dan pastikan setiap label terhubung dengan kotaknya masing-masing."

---

## 💡 Tips Rahasia: Cara Ngobrol dengan AI agar Hasilnya "Wah"

1.  **Gunakan Kata Sifat Visual**: Gunakan kata seperti _"Besar"_, _"Tebal"_, _"Berbaris"_, _"Rapi"_, atau _"Minimalis"_.
2.  **Jelaskan Alur Kerja**: Ceritakan apa yang akan dilakukan user. (Contoh: _"Saya ingin user bisa memilih..."_).
3.  **Minta Struktur Kelompok**: Selalu minta AI untuk _"Mengelompokkan isian agar tidak berantakan"_. Ini akan membuat AI otomatis membuat tag `<div>` yang sangat berguna untuk CSS.
4.  **Tanyakan Balik**: Jika kamu bingung dengan kodenya, tanya ke AI: _"Bagian mana di kode ini yang merupakan kotak untuk mengetik nama kota?"_

---

**Ingat:** AI adalah asistenmu yang sangat pintar, tapi dia tidak bisa melihat apa yang ada di kepalamu. Semakin detail kamu bercerita tentang **tampilan**, semakin sempurna kode yang dia berikan! 🚀
