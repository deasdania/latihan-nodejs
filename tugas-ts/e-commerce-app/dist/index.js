"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataInitializer_1 = require("./dataInitializer");
const categoryController_1 = require("./controllers/categoryController");
const productController_1 = require("./controllers/productController");
const PORT = 3000;
// Start Express app
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialize data
        const { categories, products, users, orders } = (0, dataInitializer_1.initializeData)();
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        // Route for categories
        app.get("/api/categories", (req, res) => {
            (0, categoryController_1.getCategory)(categories, req, res);
        });
        app.get("/api/categories/:id", (req, res) => {
            (0, categoryController_1.getCategory)(categories, req, res);
        });
        app.post("/api/categories", (req, res) => {
            (0, categoryController_1.createCategory)(categories, req, res);
        });
        app.put("/api/categories/:id", (req, res) => {
            (0, categoryController_1.updateCategory)(categories, req, res);
        });
        app.delete("/api/categories/:id", (req, res) => {
            (0, categoryController_1.deleteCategory)(categories, req, res);
        });
        // Route for products
        app.get("/api/products/search", (req, res) => {
            (0, productController_1.searchProductsByName)(products, req, res);
        });
        app.get("/api/products/category/:category", (req, res) => {
            (0, productController_1.getProductsByCategory)(products, req, res);
        });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    });
}
init();
