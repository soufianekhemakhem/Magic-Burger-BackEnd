import User from '../components/user/user'

export async function requireAuth(req, res, next) {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'Goom barra rawa7' })
    }

    const user = await User.findOne({ token: token })

    if (!user) {
        return res.status(401).json({ message: 'Goom barra rawa7' })
    }

    req.user = user

    next()
}

export async function isAdmin(req, res, next) {

    // const token = req.headers.authorization
    // const user = await User.findOne({ token: token })
    //upper 2 ligns are replaced by (req.user) used in the last middleware (requireAuth)

    if (req.user.role != 'admin') {
        return res.status(401).json({ message: 'You can not get access ' })
    }

    next()
}