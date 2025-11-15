# Balangan Kreatif

Balangan Kreatif adalah website informasi UMKM di Kabupaten Balangan.  
Website ini bertujuan memudahkan masyarakat dalam menemukan UMKM lokal berdasarkan kategori, foto produk, deskripsi singkat, hingga lokasi dan kontak.  
Dibuat dengan tampilan modern, responsif, dan mudah digunakan.

---

## Deskripsi Balangan

Kabupaten Balangan adalah salah satu kabupaten di Provinsi Kalimantan Selatan yang dikenal dengan kekayaan alam, budaya, serta potensi usaha masyarakatnya.  
Banyak UMKM berkembang dalam sektor kuliner, minuman, kerajinan, fashion, dan produk khas daerah.  
Dengan dukungan kreativitas pelaku usaha, Balangan terus meningkatkan daya saing UMKM agar dapat dikenal lebih luas.

---

## Cara Install & Menjalankan Project

### 1. Pastikan Node.js sudah terpasang

Download di: https://nodejs.org

### 2. Clone repository

````bash
git clone https://github.com/arbaniiaheliany30-ship-it/BalanganKreatif.git
cd BalanganKreatif

### 3. #Install dependencies
```bash
npm install

### 4. Jalankan project
```bash
npm start

## Akses di browser:
http://localhost:3000

### 5. (Opsional) Build untuk produksi
npm run build

### Teknologi yang Dipakai

1.ReactJS – Library utama frontend
2.React Router – Navigasi antar halaman
3.Reactstrap – Komponen UI
4.Bootstrap – Styling tambahan
5.Leaflet Maps – Menampilkan lokasi UMKM
6.CSS Custom – Styling tampilan website
7.JSON Data – Penyimpanan data UMKM (lokal)

## 📁 Struktur Folder Project

balangan_kreatif/
│
│
├── Documentation
│── node_modules
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── assets/
│
├── src/
│   ├── assets/
│   │   ├── css/
│   │   ├── demo/
│   │   ├── fonts/
│   │   ├── img/
│   │   └── scss/
│   │       ├── balangan-kreatif/
│   │       ├── react/
│   │       └── plugins/
│   │
│   ├── components/
│   │   ├── CustomUpload/
│   │   ├── Footers/
│   │   ├── Headers/
│   │   ├── Navbars/
│   │   └── PhotoSwipe/
│   │
│   ├── views/
│   │   ├── detail_all/
│   │   ├── examples/
│   │   │   ├── ProductMinumanPage.js
│   │   │   ├── ProductPage.js
│   │   │   └── ProductPageJasa.js
│   │
│   ├── index.js
│   └── App.js
├── .env
├── package.json
├── package-lock.json
└── README.md
````
