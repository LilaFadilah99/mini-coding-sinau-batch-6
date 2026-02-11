# 🎯 Day 1: Ambil Data dari Form - Step-by-Step Prompts

**Untuk Peserta:** Hari ini fokus mengambil data dari form input. Besok akan disambungkan ke AI.

---

## 🎯 Target Hari Ini

Yang akan dicapai:

- ✅ Setup reference ke elemen HTML
- ✅ Ambil semua value dari form input (destination, days, budget, interests)
- ✅ Validasi input sebelum proses
- ✅ Tampilkan hasil di console untuk debugging
- ✅ Implementasi loading state (persiapan untuk API call besok)

**Besok:** Kirim data ke AI API dan tampilkan hasil itinerary.

---

## 🚀 PROMPT 0: Context Projek untuk AI

**Kirim ke AI:**

```
Halo, saya sedang membuat travel planner website dengan fitur AI.

Saya punya form HTML dengan input fields berikut:
- Input text destinasi (ID: hero-destination)
- Input number jumlah hari (ID: hero-days)
- Select dropdown budget (ID: hero-budget)
- Input text interests (ID: hero-interests)
- Submit button (ID: btn-generate-hero)
- Form element (ID: quick-planner-form)

Saya juga punya loading overlay (ID: loader-overlay)

Target hari ini:
Saat user submit form, ambil semua value dari input, validasi data,
lalu tampilkan di console untuk memastikan data berhasil diambil.

Besok data ini akan dikirim ke AI API.

Tolong bantu saya build JavaScript-nya step-by-step.

Konfirmasi jika Anda siap membantu.
```

✅ Tunggu konfirmasi dari AI

---

## 📍 PROMPT 1: Setup DOM Element References

```
STEP 1: Reference ke Element HTML

Saya perlu menyimpan reference ke elemen-elemen HTML yang akan digunakan.

Buatkan kode JavaScript yang:

1. Membuat object bernama "elements" berisi reference ke:

   Form elements:
   - heroForm: form dengan ID "quick-planner-form"
   - heroDestination: input dengan ID "hero-destination"
   - heroDays: input dengan ID "hero-days"
   - heroBudget: select dengan ID "hero-budget"
   - heroInterests: input dengan ID "hero-interests"
   - btnGenerateHero: button dengan ID "btn-generate-hero"

   UI elements:
   - loaderOverlay: div dengan ID "loader-overlay"

2. Gunakan document.getElementById() untuk setiap element

3. Di akhir, console.log "✅ DOM elements ready"

Berikan kode dengan comment yang jelas.
```

---

## 📍 PROMPT 2: Loading State Functions

```
STEP 2: Show/Hide Loading

Buatkan 2 helper functions untuk loading state:

1. Function showLoader():
   - Ambil element loaderOverlay dari object elements
   - Tambahkan class "active" ke element tersebut
   - Console.log "⏳ Loading started"
   - Check null safety sebelum manipulasi

2. Function hideLoader():
   - Ambil element loaderOverlay dari object elements
   - Hapus class "active" dari element tersebut
   - Console.log "✅ Loading completed"
   - Check null safety sebelum manipulasi

Gunakan function declaration.
Berikan comment yang menjelaskan fungsi masing-masing.
```

---

## 📍 PROMPT 3: Get Form Values & Validation

````
STEP 3: Handle Form Submit

Buatkan async function untuk handle form submission:

NAMA FUNCTION: handleHeroFormSubmit
PARAMETER: event

PROSES:

1. Prevent default form behavior (preventDefault)

2. Ambil value dari setiap input:
   - destination: dari heroDestination.value, gunakan trim()
   - days: dari heroDays.value
   - budget: dari heroBudget.value
   - interests: dari heroInterests.value, gunakan trim()
     * Jika kosong, set default: "general sightseeing and local experiences"

3. Validasi input:
   - Jika destination kosong:
     * Tampilkan alert: "Please enter a destination!"
     * Return (stop execution)

   - Jika days kurang dari 1:
     * Tampilkan alert: "Days must be at least 1!"
     * Return (stop execution)

4. Display data di console:
   - Console.log dengan format:
     ```
     📝 Form data collected:
     - Destination: [value]
     - Days: [value]
     - Budget: [value]
     - Interests: [value]
     ```

5. Show loading state:
   - Panggil showLoader()
   - Tambahkan class "loading" ke btnGenerateHero
   - Set btnGenerateHero.disabled = true

6. Simulasi process (karena belum connect ke API):
   - Console.log "🚀 Data ready for API (will connect tomorrow)"
   - Gunakan setTimeout 2000ms untuk simulasi delay

7. Setelah delay, hide loading state:
   - Panggil hideLoader()
   - Hapus class "loading" dari btnGenerateHero
   - Set btnGenerateHero.disabled = false
   - Console.log "✨ Process completed (API integration tomorrow)"

Gunakan async/await pattern.
Berikan comment di setiap major step.
````

---

## 📍 PROMPT 4: Initialize & Event Listener

```
STEP 4: Application Initialization

Buatkan initialization function:

NAMA FUNCTION: init

PROSES:

1. Console.log "🚀 Initializing Waypoint AI..."

2. Attach event listener ke form:
   - Check apakah heroForm exists
   - Jika ada:
     * Tambahkan event listener untuk "submit" event
     * Handler: handleHeroFormSubmit
     * Console.log "✅ Form event listener attached"
   - Jika tidak ada:
     * Console.error "❌ Form element not found"

3. Console.log "✨ Application ready"

OUTSIDE FUNCTION:
Tambahkan code untuk run init saat DOM ready:
document.addEventListener('DOMContentLoaded', init);

Berikan comment yang jelas.
```

---

## ✅ Testing Checklist

**Ikuti langkah ini untuk testing:**

### 1. Page Load

- [ ] Buka file HTML di browser
- [ ] Buka Console (F12)
- [ ] Check log muncul:
  - "✅ DOM elements ready"
  - "🚀 Initializing Waypoint AI..."
  - "✅ Form event listener attached"
  - "✨ Application ready"

### 2. Test Validation - Empty Destination

- [ ] Jangan isi form apapun
- [ ] Klik button "Generate Itinerary"
- [ ] Alert muncul: "Please enter a destination!"
- [ ] Form tidak submit

### 3. Test Validation - Invalid Days

- [ ] Isi Destination: "Bali"
- [ ] Isi Days: "0" atau kosongkan
- [ ] Klik button "Generate Itinerary"
- [ ] Alert muncul: "Days must be at least 1!"

### 4. Test Valid Submission

- [ ] Isi Destination: "Bali"
- [ ] Isi Days: "3"
- [ ] Pilih Budget: "Moderate"
- [ ] Isi Interests: "beaches, temples"
- [ ] Klik button "Generate Itinerary"

**Expected behavior:**

- [ ] Console menampilkan data:
  ```
  📝 Form data collected:
  - Destination: Bali
  - Days: 3
  - Budget: moderate
  - Interests: beaches, temples
  ```
- [ ] Console log: "🚀 Data ready for API (will connect tomorrow)"
- [ ] Loading overlay muncul
- [ ] Button text berubah & disabled
- [ ] Setelah 2 detik:
  - Loading hilang
  - Button kembali normal
  - Console log: "✨ Process completed (API integration tomorrow)"

### 5. Test Default Interests Value

- [ ] Isi Destination: "Tokyo"
- [ ] Isi Days: "5"
- [ ] Pilih Budget: "Luxury"
- [ ] Kosongkan Interests
- [ ] Submit form
- [ ] Check console menampilkan:
  ```
  Interests: general sightseeing and local experiences
  ```

---

## 🐛 Troubleshooting

### Halaman refresh saat submit:

**Cause:** preventDefault tidak dipanggil
**Fix:** Pastikan `event.preventDefault()` ada di baris pertama handleHeroFormSubmit

### Console error: "Cannot read property 'value' of null":

**Cause:** ID di HTML tidak match dengan JavaScript
**Fix:**

- Check ID di HTML: `<input id="hero-destination">`
- Must match exactly dengan: `getElementById('hero-destination')`

### Alert tidak muncul:

**Cause:** Validation logic belum execute
**Fix:** Pastikan validation (if statements) ada sebelum console.log data

### Loading tidak muncul:

**Cause:** Class "active" tidak ditambahkan
**Fix:**

- Inspect element loader-overlay
- Check apakah class "active" ada saat loading
- Pastikan CSS untuk .loader-overlay.active sudah ada

### Button tidak disabled:

**Cause:** disabled property tidak di-set
**Fix:** Tambahkan `elements.btnGenerateHero.disabled = true`

---

## 📝 Code Structure

Setelah semua prompt, file app.js akan memiliki struktur:

```javascript
// 1. DOM Element References
const elements = {
  heroForm: document.getElementById("quick-planner-form"),
  heroDestination: document.getElementById("hero-destination"),
  heroDays: document.getElementById("hero-days"),
  heroBudget: document.getElementById("hero-budget"),
  heroInterests: document.getElementById("hero-interests"),
  btnGenerateHero: document.getElementById("btn-generate-hero"),
  loaderOverlay: document.getElementById("loader-overlay"),
};

console.log("✅ DOM elements ready");

// 2. Loading State Functions
function showLoader() {
  if (elements.loaderOverlay) {
    elements.loaderOverlay.classList.add("active");
    console.log("⏳ Loading started");
  }
}

function hideLoader() {
  if (elements.loaderOverlay) {
    elements.loaderOverlay.classList.remove("active");
    console.log("✅ Loading completed");
  }
}

// 3. Form Submit Handler
async function handleHeroFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const destination = elements.heroDestination.value.trim();
  const days = elements.heroDays.value;
  const budget = elements.heroBudget.value;
  const interests = elements.heroInterests.value.trim() || "general sightseeing and local experiences";

  // Validation
  if (!destination) {
    alert("Please enter a destination!");
    return;
  }

  if (days < 1) {
    alert("Days must be at least 1!");
    return;
  }

  // Display data
  console.log("📝 Form data collected:");
  console.log(`- Destination: ${destination}`);
  console.log(`- Days: ${days}`);
  console.log(`- Budget: ${budget}`);
  console.log(`- Interests: ${interests}`);

  // Show loading
  showLoader();
  elements.btnGenerateHero.classList.add("loading");
  elements.btnGenerateHero.disabled = true;

  // Simulate process
  console.log("🚀 Data ready for API (will connect tomorrow)");

  setTimeout(() => {
    // Hide loading
    hideLoader();
    elements.btnGenerateHero.classList.remove("loading");
    elements.btnGenerateHero.disabled = false;
    console.log("✨ Process completed (API integration tomorrow)");
  }, 2000);
}

// 4. Initialize Application
function init() {
  console.log("🚀 Initializing Waypoint AI...");

  if (elements.heroForm) {
    elements.heroForm.addEventListener("submit", handleHeroFormSubmit);
    console.log("✅ Form event listener attached");
  } else {
    console.error("❌ Form element not found");
  }

  console.log("✨ Application ready");
}

// 5. Run on DOM Ready
document.addEventListener("DOMContentLoaded", init);
```

**Estimasi: 80-100 lines dengan comment**

---

## 🎯 Skills Practiced Today

Dengan menyelesaikan ini, peserta telah:

- ✅ Setup DOM element references
- ✅ Get values dari input text, number, dan select
- ✅ Implement form validation
- ✅ Use console.log untuk debugging
- ✅ Manipulate CSS classes (add/remove)
- ✅ Toggle button disabled state
- ✅ Attach event listeners
- ✅ Use DOMContentLoaded event

---

## 🔮 Tomorrow: API Integration

Besok akan menambahkan:

- 📡 Function generateItinerary untuk call AI API
- 🌐 Fetch API dengan POST method
- 📦 Parse JSON response
- 🎨 Display hasil di modal popup
- ❌ Error handling (try-catch)

Code hari ini sudah ready untuk integration - tinggal replace setTimeout dengan real API call.

---

## 💡 Optional Exploration

Jika ingin eksplorasi lebih lanjut:

**1. Additional Validation:**

- Maximum days: 14
- Minimum destination length: 3 characters
- Custom error messages

**2. Enhanced Logging:**

- Log setiap state change
- Log button state (enabled/disabled)
- Log class additions/removals

**3. Timing Experiments:**

- Ubah setTimeout delay (1s, 3s, 5s)
- Observe loading behavior

---

_Day 1 Focus: Form data collection & validation. Foundation untuk API integration besok._
