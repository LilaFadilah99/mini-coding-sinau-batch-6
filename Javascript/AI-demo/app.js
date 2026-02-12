// Step 1: Reference ke Element HTML
// Membuat object 'elements' untuk menyimpan semua referensi elemen DOM yang dibutuhkan
const elements = {
  // Form elements
  heroForm: document.getElementById("quick-planner-form"),
  heroDestination: document.getElementById("hero-destination"),
  heroDays: document.getElementById("hero-days"),
  heroBudget: document.getElementById("hero-budget"),
  heroInterests: document.getElementById("hero-interests"),
  btnGenerateHero: document.getElementById("btn-generate-hero"),

  // UI elements
  loaderOverlay: document.getElementById("loader-overlay"),
};

// Log konfirmasi bahwa elemen DOM siap
console.log("✅ DOM elements ready");

// Step 2: Show/Hide Loading

// Function loading state: Menampilkan loading overlay
function showLoader() {
  // Check null safety sebelum manipulasi
  if (elements.loaderOverlay) {
    elements.loaderOverlay.classList.add("active");
    console.log("⏳ Loading started");
  } else {
    console.warn("⚠️ Loader overlay element not found");
  }
}

// Function loading state: Menyembunyikan loading overlay
function hideLoader() {
  // Check null safety sebelum manipulasi
  if (elements.loaderOverlay) {
    elements.loaderOverlay.classList.remove("active");
    console.log("✅ Loading completed");
  } else {
    console.warn("⚠️ Loader overlay element not found");
  }
}

// Step 3: Handle Form Submit

// Async function untuk menangani submit form
async function handleHeroFormSubmit(event) {
  // 1. Prevent default form behavior untuk mencegah reload halaman
  event.preventDefault();

  // 2. Ambil value dari setiap input
  const destination = elements.heroDestination.value.trim();
  const days = elements.heroDays.value;
  const budget = elements.heroBudget.value;
  // Jika interests kosong, set default value
  const interests = elements.heroInterests.value.trim() || "general sightseeing and local experiences";

  // 3. Validasi input
  // Cek apakah destination kosong
  if (!destination) {
    alert("Please enter a destination!");
    return; // Stop eksekusi
  }

  // Cek apakah days kurang dari 1
  if (days < 1) {
    alert("Days must be at least 1!");
    return; // Stop eksekusi
  }

  // 4. Display data di console untuk debugging
  console.log("📝 Form data collected:");
  console.log(`- Destination: ${destination}`);
  console.log(`- Days: ${days}`);
  console.log(`- Budget: ${budget}`);
  console.log(`- Interests: ${interests}`);

  // 5. Show loading state visual
  showLoader();
  if (elements.btnGenerateHero) {
    elements.btnGenerateHero.classList.add("loading");
    elements.btnGenerateHero.disabled = true;
  }

  // 6. Simulasi proses async (API call placeholder)
  console.log("🚀 Data ready for API (will connect tomorrow)");

  // Gunakan setTimeout untuk simulasi delay 2 detik
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 7. Hide loading state setelah proses selesai
  hideLoader();
  if (elements.btnGenerateHero) {
    elements.btnGenerateHero.classList.remove("loading");
    elements.btnGenerateHero.disabled = false;
  }

  console.log("✨ Process completed (API integration tomorrow)");
}

// Step 4: Application Initialization

// Function initialization untuk setup event listener saat aplikasi mulai
function init() {
  console.log("🚀 Initializing Waypoint AI...");

  // Attach event listener ke form jika elemen exists
  if (elements.heroForm) {
    elements.heroForm.addEventListener("submit", handleHeroFormSubmit);
    console.log("✅ Form event listener attached");
  } else {
    console.error("❌ Form element not found");
  }

  console.log("✨ Application ready");
}

// Jalankan init saat DOM content fully loaded
document.addEventListener("DOMContentLoaded", init);
