import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface Category {
    _id: string;
    name: string;
    description: string;
}

const CategoriesSchema = new Schema<Category>(
    {
        name: {
            type: Schema.Types.String,
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