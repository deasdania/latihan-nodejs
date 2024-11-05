"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeData = void 0;
// Function to initialize sample data
function initializeData() {
    let categories = [
        { id: 1, name: "Elektronik" },
        { id: 2, name: "Perabotan" },
    ];
    let products = [
        {
            id: 1, name: "Laptop", category: "Elektronik", price: 1500,
            description: "",
            stock: 3
        },
        {
            id: 2, name: "Meja", category: "Perabotan", price: 500,
            description: "",
            stock: 4
        },
    ];
    let users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", password: "securepassword", address: "123 Main St" }
    ];
    let orders = [
        { id: 1, userId: 1, products: [{ productId: 1, quantity: 1 }], totalAmount: 1500, orderDate: new Date(), status: "pending" }
    ];
    // Return all data for use in the application
    return { categories, products, users, orders };
}
exports.initializeData = initializeData;
