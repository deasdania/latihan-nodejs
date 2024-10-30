// Function -> math.js
// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.

// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
    const pi = 3.14; // Konstanta π
    return pi * jariJari ** 2; // Menghitung luas
}

// Fungsi untuk mengkuadratkan angka-angka dalam array
function kuadratkanAngka(arr) {
    return arr.map(function(angka) {
        return angka ** 2; // Mengkuadratkan setiap angka
    });
}

// Contoh penggunaan fungsi
let jariJariLingkaran = 5; // Contoh jari-jari
let luasLingkaran = hitungLuasLingkaran(jariJariLingkaran);
console.log("Luas Lingkaran dengan jari-jari " + jariJariLingkaran + " adalah: " + luasLingkaran);

// Contoh array angka
let angkaArray = [1, 2, 3, 4, 5];
let angkaKuadrat = kuadratkanAngka(angkaArray);
console.log("Array angka setelah dikuadratkan:", angkaKuadrat);

/* Output:
Luas Lingkaran dengan jari-jari 5 adalah: 78.5
Array angka setelah dikuadratkan: [ 1, 4, 9, 16, 25 ] */