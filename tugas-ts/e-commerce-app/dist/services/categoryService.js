"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.updateCategoryStatus = exports.cancelCategory = exports.placeCategory = void 0;
const placeCategory = (categories, newCategory) => {
    return [...categories, newCategory];
};
exports.placeCategory = placeCategory;
const cancelCategory = (categories, categoryId) => {
    return categories.filter(category => category.id !== categoryId);
};
exports.cancelCategory = cancelCategory;
const updateCategoryStatus = (categories, categoryId, name) => {
    return categories.map(category => category.id === categoryId ? Object.assign(Object.assign({}, category), { name }) : category);
};
exports.updateCategoryStatus = updateCategoryStatus;
const getCategories = (categories) => {
    return categories;
};
exports.getCategories = getCategories;
