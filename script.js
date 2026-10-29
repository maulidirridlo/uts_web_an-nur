function buatSapaan(waktu) {
  return "Selamat " + waktu + ", selamat datang di Pondok Pesantren An-Nur";
}

let jam = new Date().getHours();
let waktu;

if (jam < 10) {
  waktu = "pagi";
} else if (jam < 15) {
  waktu = "siang";
} else if (jam < 18) {
  waktu = "sore";
} else {
  waktu = "malam";
}

document.querySelector("#sapaan").textContent = buatSapaan(waktu);

// 2. Kegiatan santri (array of objects) + tombol filter
let kegiatan = [
  { kategori: "Harian", nama: "Sholat jamaah 5 waktu" },
  { kategori: "Harian", nama: "Waqi'ahan dan ngaji subuh" },
  { kategori: "Harian", nama: "Qur'anan" },
  { kategori: "Harian", nama: "Asmaul Husna" },
  { kategori: "Harian", nama: "Sorogan Al-Qur'an setelah Maghrib" },
  { kategori: "Harian", nama: "Madin (mengaji kitab)" },
  { kategori: "Harian", nama: "Syawir" },
  { kategori: "Mingguan", nama: "Roan akbar (bersih-bersih pondok) setiap hari Minggu" },
  { kategori: "Mingguan", nama: "Yasinan setelah Maghrib di malam , madin diganti Dzibaan" },
  { kategori: "Mingguan", nama: "Yasinan bersama warga desa setiap malam Minggu setelah Maghrib" },
  { kategori: "Mingguan", nama: "Ziarah makam" },
  { kategori: "Mingguan", nama: "Mujahadah" },
  { kategori: "Mingguan", nama: "Khitobah" },
  { kategori: "Bulanan", nama: "Dzikir Manaqib Syekh Abdul Qodir Jaelani" },
  { kategori: "Tahunan", nama: "Akhirussanah" },
  { kategori: "Tahunan", nama: "Mafia Santri" },
  { kategori: "Tahunan", nama: "Peringatan HSN" },
  { kategori: "Tahunan", nama: "Ziarah makam wali (Bagi Santri 3 sanawi" },
  { kategori: "Tahunan", nama: "Peringatan 17 Agustus" },
  { kategori: "Tahunan", nama: "Haul masyayikh" },
];

let kategoriList = ["Semua", "Harian", "Mingguan", "Bulanan", "Tahunan"];
let wadahFilter = document.querySelector("#filter");
let daftarKegiatan = document.querySelector("#daftar-kegiatan");

function tampilkanKegiatan(pilihan) {
  daftarKegiatan.innerHTML = "";

  kegiatan.forEach(function (item) {
    if (pilihan === "Semua" || item.kategori === pilihan) {
      let li = document.createElement("li");
      li.innerHTML = "<b>" + item.kategori + "</b><span>" + item.nama + "</span>";
      daftarKegiatan.appendChild(li);
    }
  });

  wadahFilter.querySelectorAll("button").forEach(function (tombol) {
    tombol.classList.toggle("aktif", tombol.textContent === pilihan);
  });
}

kategoriList.forEach(function (nama) {
  let tombol = document.createElement("button");
  tombol.type = "button";
  tombol.textContent = nama;
  tombol.addEventListener("click", function () {
    tampilkanKegiatan(nama);
  });
  wadahFilter.appendChild(tombol);
});

tampilkanKegiatan("Semua");

// 3. Fasilitas
let fasilitas = [
  "Kamar santri",
  "Masjid",
  "Tempat madin",
  "Wifi",
  "Kamar mandi",
  "Dapur",
  "Makan 2x sehari",
  "Area parkir",
  "Kantin",
];

let daftarFasilitas = document.querySelector("#daftar-fasilitas");

fasilitas.forEach(function (nama) {
  let li = document.createElement("li");
  li.textContent = nama;
  daftarFasilitas.appendChild(li);
});

// 4. Validasi form minat mendaftar
let form = document.querySelector("#form-daftar");
let pesanForm = document.querySelector("#pesan-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nama = document.querySelector("#nama").value.trim();
  let hp = document.querySelector("#hp").value.trim();
  let jenis = document.querySelector("#jenis").value;

  if (nama === "") {
    pesanForm.textContent = "Nama calon santri belum diisi.";
    pesanForm.className = "salah";
  } else if (!/^[0-9]{10,13}$/.test(hp)) {
    pesanForm.textContent = "Nomor HP harus berupa angka, 10 sampai 13 digit.";
    pesanForm.className = "salah";
  } else {
    pesanForm.textContent =
      "Terima kasih. Data " + nama + " (pondok " + jenis + ") sudah benar. Hubungi pengurus lewat WhatsApp untuk lanjut mendaftar.";
    pesanForm.className = "benar";
    form.reset();
  }
});

// 5. Menu navigasi di layar HP (tombol Menu)
let tombolMenu = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu");

tombolMenu.addEventListener("click", function () {
  let terbuka = menu.classList.toggle("buka");
  tombolMenu.setAttribute("aria-expanded", terbuka);
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("buka");
    tombolMenu.setAttribute("aria-expanded", false);
  });
});
