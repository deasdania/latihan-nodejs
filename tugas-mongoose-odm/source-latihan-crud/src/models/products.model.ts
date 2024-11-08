import mongoose from "mongoose";
import { Category } from "./categories.model";

const Schema = mongoose.Schema;

export interface Product {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  qty: number;
  category: Category;
}

const ProductsSchema = new Schema<Product>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String, 
      required: true,
    },
    images: {
      type: [Schema.Types.String],
      default: [],
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    qty: {
      type: Schema.Types.Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  {
    timestamps: true,
  }
);

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;
