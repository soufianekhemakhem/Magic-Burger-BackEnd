import mongoose, { Schema } from 'mongoose'

const orderSchema = new mongoose.Schema({
    date: { type: String },
    price: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    ingredients: [{
        ingredient: {
            type: Schema.Types.ObjectId,
            ref: 'ingredient'
        },
        count: { type: Number }
    }]
})

export default mongoose.model('order', orderSchema)