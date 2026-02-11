## 📖 TOPIK 1: Variabel & Tipe Data (15 menit)

### 📌 Konsep yang Harus Diajarkan:

**Variabel = Kotak Penyimpanan Data**

```javascript
let destinationName = "Bali";
const maxBudget = 5000000;
var travelDays = 7; // cara lama, hindari
```

**3 Cara Deklarasi:**

- `let` → Bisa diubah (recommended)
- `const` → Tidak bisa diubah (untuk nilai tetap)
- `var` → Cara lama (jangan pakai)

**Tipe Data Utama:**

1. **String** → Text: `"Bali"`, `'Tokyo'`
2. **Number** → Angka: `5000000`, `7`
3. **Boolean** → True/False: `true`, `false`
4. **Null** → Kosong sengaja: `null`
5. **Undefined** → Belum diisi: `undefined`

### 🎨 Analogi Sederhana:

> **Variabel = Label di Kotak**
>
> Bayangkan kamu punya kotak dengan label "destinasi". Di dalam kotak itu kamu taruh kertas bertuliskan "Bali".
>
> ```javascript
> let destinasi = "Bali"; // Label "destinasi" → isi "Bali"
> destinasi = "Tokyo"; // Ganti isi jadi "Tokyo"
> ```
>
> Kalau pakai `const`, kotak-nya dikunci dengan gembok - tidak bisa ganti isi!
>
> ```javascript
> const maxBudget = 5000000; // Dikunci!
> maxBudget = 7000000; // ❌ ERROR!
> ```

## 📖 TOPIK 2: Object - Data yang Lebih Terstruktur (15 menit)

### 📌 Konsep yang Harus Diajarkan:

**Object = Kotak dengan Sekat-sekat**

```javascript
const destination = {
  name: "Bali",
  country: "Indonesia",
  days: 7,
  budget: 5000000,
  category: "Tropical",
};

// Akses data:
console.log(destination.name); // "Bali"
console.log(destination.budget); // 5000000
```

**Kenapa Pakai Object?**

- Data lebih terorganisir
- 1 variabel bisa menyimpan banyak informasi terkait
- Mudah di-maintain

### 🎨 Analogi Sederhana:

> **Object = Kartu Identitas**
>
> Bayangkan kartu identitas destinasi:
>
> ```
> ┌─────────────────────┐
> │ DESTINATION CARD    │
> ├─────────────────────┤
> │ Name: Bali          │
> │ Country: Indonesia  │
> │ Days: 7             │
> │ Budget: 5000000     │
> │ Category: Tropical  │
> └─────────────────────┘
> ```
>
> Semua info tentang 1 destinasi ada dalam 1 kartu (object).
>
> Kalau pakai variabel biasa:
>
> ```javascript
> let name = "Bali";
> let country = "Indonesia";
> let days = 7;
> // Ribet! Banyak variabel terpisah
> ```
>
> Kalau pakai object:
>
> ```javascript
> const destination = {
>   name: "Bali",
>   country: "Indonesia",
>   days: 7,
> };
> // Rapi! Semua dalam 1 variabel
> ```

## 📖 TOPIK 3: Array - Menyimpan Banyak Data (15 menit)

### 📌 Konsep yang Harus Diajarkan:

**Array = List/Daftar**

```javascript
const cities = ["Bali", "Tokyo", "Paris", "Iceland"];

// Akses by index (mulai dari 0):
console.log(cities[0]); // "Bali"
console.log(cities[1]); // "Tokyo"

// Jumlah item:
console.log(cities.length); // 4

// Tambah item:
cities.push("London"); // tambah di akhir

// Loop through array:
cities.forEach((city) => {
  console.log(city);
});
```

**Array of Objects:**

```javascript
const destinations = [
  { name: "Bali", country: "Indonesia" },
  { name: "Tokyo", country: "Japan" },
  { name: "Paris", country: "France" },
];

// Akses:
console.log(destinations[0].name); // "Bali"
```

### 🎨 Analogi Sederhana:

> **Array = Rak Buku yang Berurutan**
>
> ```
> Index:  0      1       2        3
>       ┌─────┬──────┬───────┬────────┐
>       │Bali │Tokyo │ Paris │Iceland │
>       └─────┴──────┴───────┴────────┘
> ```
>
> - Index dimulai dari 0 (bukan 1!)
> - Urut dari kiri ke kanan
> - Bisa tambah buku baru di akhir (push)
> - Bisa hitung jumlah buku (.length)
>
> **Array of Objects = Rak dengan File Folder:**
>
> ```
> Index:  0                    1
>       ┌──────────────┐    ┌──────────────┐
>       │ Folder Bali  │    │ Folder Tokyo │
>       │ - Name       │    │ - Name       │
>       │ - Country    │    │ - Country    │
>       │ - Days       │    │ - Days       │
>       └──────────────┘    └──────────────┘
> ```

## 📖 TOPIK 4: If-Else - Decision Maker (15 menit)

### 📌 Konsep yang Harus Diajarkan:

**If-Else = Membuat Keputusan**

```javascript
const budget = 3000000;

if (budget < 2000000) {
  console.log("Budget rendah - pilih destinasi lokal");
} else if (budget < 5000000) {
  console.log("Budget sedang - Asia Tenggara");
} else {
  console.log("Budget tinggi - Eropa/Amerika");
}
```

**Comparison Operators:**

- `===` : Sama dengan (strict)
- `!==` : Tidak sama dengan
- `>` : Lebih besar
- `<` : Lebih kecil
- `>=` : Lebih besar atau sama dengan
- `<=` : Lebih kecil atau sama dengan

**Logical Operators:**

- `&&` : DAN (and)
- `||` : ATAU (or)
- `!` : TIDAK (not)

```javascript
const days = 5;
const budget = 4000000;

if (days > 3 && budget > 3000000) {
  console.log("Bisa ke Bali!");
}
```

### 🎨 Analogi Sederhana:

> **If-Else = Rambu Lalu Lintas**
>
> ```
>        Budget kamu?
>             │
>      ┌──────┴──────┐
>      │             │
>   < 2 juta      > 2 juta
>      │             │
>   Lokal      Asia/Eropa
> ```
>
> Sama seperti di perempatan:
>
> - **IF** lampu hijau → Jalan
> - **ELSE IF** lampu kuning → Hati-hati
> - **ELSE** lampu merah → Berhenti
>
> Kode hanya jalan ke 1 cabang, tidak semua!

## 📖 TOPIK 5: Functions & Events (15 menit)

### 📌 Konsep yang Harus Diajarkan:

**Function = Mesin dengan Input & Output**

```javascript
// Deklarasi function
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Panggil function
const greeting = greetUser("Lila");
console.log(greeting); // "Hello, Lila!"

// Arrow function (modern)
const calculateTotal = (price, qty) => price * qty;

const total = calculateTotal(100000, 3);
console.log(total); // 300000
```

**Events = Reaksi terhadap Aksi User**

```javascript
// Click event
const button = document.getElementById("my-button");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Modern way dengan arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

**Common Events:**

- `click` → Saat diklik
- `submit` → Saat form di-submit
- `change` → Saat input berubah
- `keyup` → Saat keyboard dilepas

### 🎨 Analogi Sederhana:

> **Function = Mesin Kopi**
>
> ```
> Input (Parameter)         Function                Output (Return)
>      ↓                       ↓                         ↓
>  ┌────────┐             ┌──────────┐              ┌────────┐
>  │ Kopi   │    →→→      │          │     →→→      │ Kopi   │
>  │ Gula   │             │  MESIN   │              │ Manis  │
>  │ Susu   │             │          │              │        │
>  └────────┘             └──────────┘              └────────┘
> ```
>
> - Input: Bahan (parameter)
> - Process: Mesin proses (function body)
> - Output: Hasil (return value)
>
> **Event = Tombol di Mesin**
>
> Tombol "START" di-klik → Mesin jalan (event listener)
>
> ```javascript
> button.addEventListener("click", () => {
>   // Saat tombol diklik, mesin jalan!
>   makeCoffee();
> });
> ```
