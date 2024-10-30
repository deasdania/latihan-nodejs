// Variabel, Tipe Data, dan Operator -> variabel.js
// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
// Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.

// Mendemonstrasikan penggunaan var, let, dan const dengan tema dinosaurus

// Menggunakan var untuk mendeklarasikan informasi dasar
var namaDinosaurus = "Tyrannosaurus Rex"; // Tipe data string
var panjangDinosaurus = 12; // Tipe data number dalam meter
var beratDinosaurus = 8000; // Tipe data number dalam kg
var adalahKarnivora = true; // Tipe data boolean
var periodeHidup = ["Cretaceous"]; // Tipe data non-primitif (array)
var ciriFisik = { warna: "hijau", jumlahKaki: 2 }; // Tipe data non-primitif (object)

// Menggunakan let untuk variabel yang mungkin akan diubah
let populasiDinosaurus = 2000; // Tipe data number

// Menggunakan const untuk nilai yang konstan
const tahunKepunahan = 65; // Tipe data number (juta tahun yang lalu)

// Operasi Aritmatika: Menghitung rasio berat terhadap panjang
let rasioBeratPanjang = beratDinosaurus / panjangDinosaurus;
console.log("Rasio Berat terhadap Panjang:", rasioBeratPanjang.toFixed(2), "kg/m");

// Operasi Perbandingan: Menentukan apakah dinosaurus adalah karnivora atau herbivora
if (adalahKarnivora) {
    console.log(namaDinosaurus + " adalah karnivora.");
} else {
    console.log(namaDinosaurus + " adalah herbivora.");
}

// Menampilkan informasi dinosaurus
console.log("Nama Dinosaurus:", namaDinosaurus);
console.log("Panjang:", panjangDinosaurus, "meter");
console.log("Berat:", beratDinosaurus, "kg");
console.log("Status Karnivora:", adalahKarnivora);
console.log("Periode Hidup:", periodeHidup.join(", "));
console.log("Ciri Fisik: Warna -", ciriFisik.warna + ", Jumlah Kaki -", ciriFisik.jumlahKaki);

// Menggunakan let dalam block untuk menghitung populasi
if (populasiDinosaurus > 1000) {
    let statusPopulasi = "Besar"; // Scoped di dalam block
    console.log(namaDinosaurus + " memiliki populasi yang " + statusPopulasi + ".");
} else {
    console.log(namaDinosaurus + " memiliki populasi yang kecil.");
}


/*
Output:
Rasio Berat terhadap Panjang: 666.67 kg/m
Tyrannosaurus Rex adalah karnivora.
Nama Dinosaurus: Tyrannosaurus Rex
Panjang: 12 meter
Berat: 8000 kg
Status Karnivora: true
Periode Hidup: Cretaceous
Ciri Fisik: Warna - hijau, Jumlah Kaki - 2
Tyrannosaurus Rex memiliki populasi yang Besar.
*/