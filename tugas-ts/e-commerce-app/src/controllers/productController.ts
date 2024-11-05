import { Request, Response } from "express";
import { Product } from "../models/product";

// GET route to search products by name
export const searchProductsByName = (products: Product[], req: Request, res: Response) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Product name query parameter is required" });
  }

  const foundProducts = products.filter(product => product.name.toLowerCase().includes(name.toString().toLowerCase()));
  res.json(foundProducts);
};

// GET route to get products by category and search by name
export const getProductsByCategory = (products: Product[], req: Request, res: Response) => {
  const { category } = req.params;
  const { name } = req.query;

  const filteredProducts = products.filter(product => product.category === category);
  
  if (name) {
    return res.json(filteredProducts.filter(product => product.name.toLowerCase().includes(name.toString().toLowerCase())));
  }

  res.json(filteredProducts);
};
