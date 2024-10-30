// Struktur Kontrol (if else, switch) -> condition.js 
// Buat program yang meminta input dari pengguna dan menggunakan struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.
// Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).
const readline = require('readline');

// Membuat interface untuk input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menentukan apakah angka genap atau ganjil
function checkEvenOdd() {
    rl.question("Masukkan sebuah angka: ", (input) => {
        const number = parseInt(input);

        if (isNaN(number)) {
            console.log("Input tidak valid. Harap masukkan angka.");
        } else if (number % 2 === 0) {
            console.log(`${number} adalah angka genap.`);
        } else {
            console.log(`${number} adalah angka ganjil.`);
        }

        // Panggil fungsi untuk hari setelah memeriksa angka
        printDayName();
    });
}

// Fungsi untuk mencetak nama hari berdasarkan nomor hari
function printDayName() {
    rl.question("Masukkan nomor hari (1-7): ", (input) => {
        const dayNumber = parseInt(input);

        switch (dayNumber) {
            case 1:
                console.log("Senin");
                break;
            case 2:
                console.log("Selasa");
                break;
            case 3:
                console.log("Rabu");
                break;
            case 4:
                console.log("Kamis");
                break;
            case 5:
                console.log("Jumat");
                break;
            case 6:
                console.log("Sabtu");
                break;
            case 7:
                console.log("Minggu");
                break;
            default:
                console.log("Input tidak valid. Harap masukkan nomor hari antara 1 dan 7.");
                break;
        }

        // Tutup interface setelah semua input selesai
        rl.close();
    });
}

// Menjalankan fungsi untuk memeriksa angka
checkEvenOdd();
