import { Category } from "../models/category";

export const placeCategory = (categories: Category[], newCategory: Category): Category[] => {
    return [...categories, newCategory];
};

export const cancelCategory = (categories: Category[], categoryId: number): Category[] => {
    return categories.filter(category => category.id !== categoryId);
};

export const updateCategoryStatus = (categories: Category[], categoryId: number, name: string): Category[] => {
    return categories.map(category =>
        category.id === categoryId ? { ...category, name } : category
    );
};

export const getCategories = (categories: Category[]): Category[] => {
    return categories;
}