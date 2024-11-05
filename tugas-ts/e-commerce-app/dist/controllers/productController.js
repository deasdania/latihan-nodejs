"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.searchProductsByName = void 0;
// GET route to search products by name
const searchProductsByName = (products, req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "Product name query parameter is required" });
    }
    const foundProducts = products.filter(product => product.name.toLowerCase().includes(name.toString().toLowerCase()));
    res.json(foundProducts);
};
exports.searchProductsByName = searchProductsByName;
// GET route to get products by category and search by name
const getProductsByCategory = (products, req, res) => {
    const { category } = req.params;
    const { name } = req.query;
    const filteredProducts = products.filter(product => product.category === category);
    if (name) {
        return res.json(filteredProducts.filter(product => product.name.toLowerCase().includes(name.toString().toLowerCase())));
    }
    res.json(filteredProducts);
};
exports.getProductsByCategory = getProductsByCategory;
