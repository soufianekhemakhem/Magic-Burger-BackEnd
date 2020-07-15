import Ingredient from './ingredient'

export async function getAll(req, res) {
    try {
        const ingredients = await Ingredient.find()

        return res.json(ingredients)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export async function create(req, res) {
    try {

        if (!req.body.label)
            return res.status(400).json({ error: 'label is required' })

        if (!req.body.price)
            return res.status(400).json({ error: 'price is required' })

        if (req.body.price <= 0)
            return res.status(400).json({ error: 'Price must be logic' })

        const result = await Ingredient.create(req.body)

        return res.json({
            message: 'jawek fessfess',
            result: result
        })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export async function remove(req, res) {
    try {

        const ingredient = await Ingredient.findOne({ _id: req.params.id })

        if (!ingredient)
            return res.status(400).json({ error: 'ingredient is not found' })

        const result = await Ingredient.remove({ _id: req.params.id })

        return res.json({
            message: 'jawek fessfess',
            result: result
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export async function update(req, res) {
    try {

        let ingredient = await Ingredient.findById(req.params.id)

        if (!ingredient)
            return res.status(400).json({ error: 'ingredient is not found' })

        if (req.body.label)
            ingredient.label = req.body.label

        if (req.body.price)
            ingredient.price = req.body.price

        await ingredient.save()

        return res.json({
            message: 'jawek fessfess',
            ingredient
        })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}