import mongoose from 'mongoose'

const ingredientSchema = new mongoose.Schema({
    label: { type: String },
    price: { type: Number },
})

export default mongoose.model('ingredient', ingredientSchema)