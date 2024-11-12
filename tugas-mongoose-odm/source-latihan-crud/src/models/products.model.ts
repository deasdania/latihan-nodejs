import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface Product {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  qty: number;
  category: mongoose.Types.ObjectId;
}
const ProductsSchema = new Schema(
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
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less than 1"],
    },
    slug: {
      type: Schema.Types.String,
      unique: true,
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

ProductsSchema.pre("save", function (next) {
  const product = this;
  if (!product.slug) {
    product.slug = product.name.toLowerCase().split(" ").join("-");
  }
  next();
});

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;
