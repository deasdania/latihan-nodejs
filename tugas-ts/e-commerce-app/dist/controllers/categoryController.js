"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = void 0;
const categoryService_1 = require("../services/categoryService");
// GET route to add a new category
const getCategory = (categories, req, res) => {
    const { id } = req.params; // Retrieve the category ID from the URL parameters    
    if (id) {
        // If an ID is provided, search for the category with that ID
        const category = categories.find(c => c.id === parseInt(id));
        if (category) {
            return res.status(200).json(category); // If found, return the category
        }
        else {
            return res.status(404).json({ error: "Category not found" }); // If not found, return an error
        }
    }
    // If no ID is provided, return all categories
    return res.status(200).json(categories);
};
exports.getCategory = getCategory;
// POST route to add a new category
const createCategory = (categories, req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Category name is required" });
    }
    const newCategory = {
        id: categories.length + 1,
        name
    };
    res.status(201).json((0, categoryService_1.placeCategory)(categories, newCategory));
};
exports.createCategory = createCategory;
// PUT route to update category by ID
const updateCategory = (categories, req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = categories.find(c => c.id === parseInt(id));
    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }
    (0, categoryService_1.updateCategoryStatus)(categories, parseInt(id), name);
    category.name = name;
    res.json(category);
};
exports.updateCategory = updateCategory;
// DELETE route to delete category by ID
const deleteCategory = (categories, req, res) => {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(c => c.id === parseInt(id));
    if (categoryIndex === -1) {
        return res.status(404).json({ error: "Category not found" });
    }
    categories.splice(categoryIndex, 1);
    res.status(204).json("success");
};
exports.deleteCategory = deleteCategory;
