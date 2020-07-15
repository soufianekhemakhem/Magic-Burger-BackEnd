import Order from './order'
import Ingredient from '../ingredient/ingredient'

export async function getAll(req, res) {
    try {
        const orders = await Order.find()
            .populate({ path: 'user', select: '-password -email' })
            .populate({ path: 'ingredients.ingredient' })

        return res.json(orders)

    } catch (error) {
        return res.json(error.message)
    }
}

export async function create(req, res) {
    try {

        let order = {
            date: new Date(),
            user: req.user._id,
            ingredients: req.body.ingredients
        }

        order.price = 0

        for (const item of order.ingredients) {
            const ing = await Ingredient.findOne({ _id: item.ingredient })
            const price = ing.price * item.count
            order.price += price
        }

        const result = await Order.create(order)

        return res.json({
            message: 'jawek fessfess',
            result: result
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message)
    }
}

export async function remove(req, res) {
    try {

        const ingredient = await order.findById(req.params.id)

        if (!order)
            return res.json({ error: 'order is not found' })

        const result = await order.remove({ _id: req.params.id })

        return res.json({
            message: 'jawek fessfess',
            result: result
        })
    } catch (error) {
        return res.json(error.message)
    }
}

export async function update(req, res) {
    try {

        let order = await order.findById(req.params.id)

        // if (!order)
        //     return res.json({ error: 'order is not found' })

        // if (req.body.label)
        //     ingredient.label = req.body.label

        // if (req.body.price)
        //     ingredient.price = req.body.price

        // await ingredient.save()

        return res.json({
            message: 'jawek fessfess',
            order
        })

    } catch (error) {
        return res.json(error.message)
    }
}