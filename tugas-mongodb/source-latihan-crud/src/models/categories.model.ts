import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
      timestamps: true,
    }
)

const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

export default CategoriesModel