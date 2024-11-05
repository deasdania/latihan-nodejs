# E-Commerce App

A simple e-commerce application using TypeScript

## Getting Started

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Start the application: `npm start`



## Routing REST API (gunakan postman collection untuk memudahkan pengecekan)
1. Buatlah route GET yang mengembalikan daftar semua kategori produk dalam aplikasi e-commerce Anda. Anda bisa asumsikan data kategori disimpan dalam array seperti ini: [{ id: 1, name: 'Elektronik' }, { id: 2, name: 'Perabotan' }].
2. Buatlah route GET yang mengembalikan detail kategori berdasarkan ID. Anda bisa menggunakan array kategori dari soal sebelumnya.
3. Buatlah route POST yang menambahkan kategori baru ke array. Kategori baru harus diberikan melalui body request dalam bentuk JSON, seperti ini: { "name": "Pakaian" }.
4. Buatlah route PUT yang memperbarui kategori berdasarkan ID. Data kategori baru harus diberikan melalui body request dalam bentuk JSON, seperti ini: { "name": "Pakaian dan Aksesoris" }.
5. Buatlah route DELETE yang menghapus kategori berdasarkan ID.
6. Buatlah route GET dengan query string untuk mencari produk berdasarkan nama. Anda bisa asumsikan data produk disimpan dalam array seperti ini: [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }].
7. Buatlah route GET dengan parameter dan query string untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama. Anda bisa menggunakan array produk dari soal sebelumnya.

Output :

> e-commerce-app@1.0.0 start
> node dist/index.js

[
  {
    id: 1,
    name: 'Laptop',
    description: 'High performance laptop',
    price: 1500,
    category: 'Electronics',
    stock: 100
  }
]
[
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'securepassword',
    address: '123 Main St'
  }
]
[
  {
    id: 1,
    userId: 1,
    products: [ [Object] ],
    totalAmount: 1500,
    orderDate: 2024-11-01T03:45:07.151Z,
    status: 'pending'
  }
]
[
  {
    id: 1,
    userId: 1,
    products: [ [Object] ],
    totalAmount: 1500,
    orderDate: 2024-11-01T03:45:07.151Z,
    status: 'shipped'
  }
]