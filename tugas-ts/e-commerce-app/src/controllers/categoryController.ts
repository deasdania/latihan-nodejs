import { Request, Response } from "express";
import { Category } from "../models/category";
import { getCategories, placeCategory, updateCategoryStatus } from "../services/categoryService";


// GET route to add a new category
export const getCategory = (categories: Category[], req: Request, res: Response) => {
    const { id } = req.params; // Retrieve the category ID from the URL parameters    
    if (id) {
        // If an ID is provided, search for the category with that ID
        const category = categories.find(c => c.id === parseInt(id));
        
        if (category) {
            return res.status(200).json(category); // If found, return the category
        } else {
            return res.status(404).json({ error: "Category not found" }); // If not found, return an error
        }
    }

    // If no ID is provided, return all categories
    return res.status(200).json(categories);
};


// POST route to add a new category
export const createCategory = (categories: Category[], req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Category name is required" });
    }

    const newCategory: Category = {
        id: categories.length + 1,
        name
    };

    res.status(201).json(placeCategory(categories, newCategory));
};

// PUT route to update category by ID
export const updateCategory = (categories: Category[], req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    const category = categories.find(c => c.id === parseInt(id));

    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }

    updateCategoryStatus(categories, parseInt(id), name)
    category.name = name;
    res.json(category);
};

// DELETE route to delete category by ID
export const deleteCategory = (categories: Category[], req: Request, res: Response) => {
    const { id } = req.params;

    const categoryIndex = categories.findIndex(c => c.id === parseInt(id));

    if (categoryIndex === -1) {
        return res.status(404).json({ error: "Category not found" });
    }

    categories.splice(categoryIndex, 1);
    res.status(204).json("success");
};
