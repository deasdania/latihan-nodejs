// Loop -> loop.js
// Buat program yang menggunakan loop forEach untuk mencetak angka 1 sampai 10.

// Membuat array berisi angka dari 1 sampai 10
const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

// Menggunakan forEach untuk mencetak angka
numbers.forEach(number => {
    console.log(number);
});

/* Output:
1
2
3
4
5
6
7
8
9
10
*/