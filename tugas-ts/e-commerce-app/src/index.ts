import express from "express";
import { initializeData } from "./dataInitializer";
import { getCategory, createCategory, updateCategory, deleteCategory } from "./controllers/categoryController";
import { searchProductsByName, getProductsByCategory } from "./controllers/productController";

const PORT = 3000;

// Start Express app
async function init() {
  // Initialize data
  const { categories, products, users, orders } = initializeData();
  const app = express();

  app.use(express.json());

  // Route for categories
  app.get("/api/categories", (req, res) => {
    getCategory(categories, req, res); 
  });
  app.get("/api/categories/:id", (req, res) => {
    getCategory(categories, req, res); 
  });
  app.post("/api/categories", (req, res) => {
    createCategory(categories, req, res); 
  });
  app.put("/api/categories/:id", (req, res) => {
    updateCategory(categories, req, res); 
  });
  app.delete("/api/categories/:id", (req, res) => {
    deleteCategory(categories, req, res); 
  });


  // Route for products
  app.get("/api/products/search", (req, res) => {
    searchProductsByName(products, req, res); 
  });
  app.get("/api/products/category/:category", (req, res) => {
    getProductsByCategory(products, req, res); 
  });


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
