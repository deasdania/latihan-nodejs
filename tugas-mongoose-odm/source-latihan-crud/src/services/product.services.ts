import { Product } from "../models/products.model";
import ProductsModel from "../models/products.model";

export const findAllProducts = async (query: any, limit: number = 10, page: number = 1) => {
    const skip = (page - 1) * limit;

    try {
        const products = await ProductsModel.find(query)
            .limit(limit)
            .skip(skip)
            .populate("category")  // Populating the category field
            .exec();

        const total = await ProductsModel.countDocuments(query);

        return {
            products,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    } catch (error) {
        const err = error as Error;
        throw new Error(`Error fetching products: ${err.message}`);
    }
};