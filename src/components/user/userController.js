import User from './user'
import cryptoRandomString from 'crypto-random-string'

export async function getAll(req, res) {
    try {
        const users = await User.find()

        return res.json(users)

    } catch (error) {
        return res.json(error.message)
    }
}

export async function getOne(req, res) {
    try {

        // const users = await User.find({ age: req.params.age, name: req.params.name })
        //find va travailler selon une condition de 2 parametres (age, name)

        // const users = await User.find({
        //     age: {
        //         $gte: req.params.ageMin,
        //         $lte: req.params.ageMax
        //     }
        // })

        //gt: greater than
        //gte: greater than equal = superieur ou egal
        //lte: less than equal = inf ou egale

        // const users = await User.find({ $or: [{ name: req.params.name }, { age: req.params.age }] })
        //$or = find va traviller selon une condition : name OU age

        const users = await User.find({
            $or: [
                { name: req.params.name },
                {
                    age: {
                        $gte: req.params.ageMin,
                        $lte: req.params.ageMax
                    }
                }]
        })



        return res.json(users)

    } catch (error) {
        return res.json(error.message)
    }
}

export async function create(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ message: 'Use another email' })
        }

        if (req.body.password.length < 6) {
            return res.status(400).json({ message: 'Use another password with more than 6 characters' })
        }

        const result = await User.create(req.body)

        return res.json({
            message: 'jawek fessfess',
            result: result
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export async function login(req, res) {
    try {

        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'missing body fields' })
        }

        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).json({ message: 'Wrong email!' })
        }

        if (req.body.password != user.password) {
            return res.status(400).json({ message: 'Your password is wrong' })
        }

        const token = cryptoRandomString({ length: 32 })

        user.token = token

        await user.save()

        return res.json({
            message: 'jawek fessfess',
            token: token
        })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export async function remove(req, res) {
    try {

        const user = await User.findById(req.params.id)

        if (!user)
            return res.status(400).json({ error: 'user is not found' })

        const result = await User.remove({ _id: req.params.id })

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

        const user = await User.findById(req.params.id)

        if (!user) //if(user==null)
            return res.status(400).json({ error: 'user is not found' })

        if (req.body.name)
            user.name = req.body.name

        if (req.body.age)
            user.age = req.body.age

        await user.save()

        return res.json({
            message: 'jawek fessfess',
            user


            // const result = await User.update({ _id: req.params.id }, { name: req.body.name })

            // return res.json({
            //     message: 'jawek fessfess',
            //     result: result
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}