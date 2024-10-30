
// #1 - Alpro - Mastering JS for Backend Development
// Buatlah function yang mempunyai parameter / argument object tasks kemudian return value nya berupa string (gunakan teknik string literal). 
// Tolong jelaskan dengan caramu sendiri tentang kode berikut ini: 

function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);

// Output: The sum of 1, 2, 3, 4, and 5 is: 15