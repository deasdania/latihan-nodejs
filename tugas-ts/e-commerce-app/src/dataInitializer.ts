import { Category } from "./models/category";
import { Product } from "./models/product";
import { User } from "./models/user";
import { Order } from "./models/order";
import * as categoryService from "./services/categoryService";
import * as productService from "./services/productService";
import * as userService from "./services/userService";
import * as orderService from "./services/orderService";
import { validate } from "./utils/validate";
import { categorySchema } from "./schemas/categorySchema";
import { productSchema } from "./schemas/productSchema";
import { userSchema } from "./schemas/userSchema";
import { orderSchema } from "./schemas/orderSchema";


// Function to initialize sample data
export function initializeData() {

  let categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Perabotan" },
  ];

  let products: Product[] = [
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

  let users: User[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", password: "securepassword", address: "123 Main St" }
  ];

  let orders: Order[] = [
    { id: 1, userId: 1, products: [{ productId: 1, quantity: 1 }], totalAmount: 1500, orderDate: new Date(), status: "pending" }
  ];
  // Return all data for use in the application
  return { categories, products, users, orders };
}
