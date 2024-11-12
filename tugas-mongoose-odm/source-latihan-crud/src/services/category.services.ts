import { Category } from "../models/categories.model";
import CategorysModel from "../models/categories.model";

export const findAll = async (
    query: any,
    limit: number = 10,
    page: number = 1
): Promise<Category[]> => {
    const result = await CategorysModel.find(query)
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    return result;
};