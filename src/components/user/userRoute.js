import { requireAuth, isAdmin } from '../../middleware/authentication'
import { getAll, create, update, remove, getOne, login } from './userController'

export default function (router) {

    // router.get('/user/:age/:name', getOne)
    // router.get('/user/:ageMax/:ageMin', getOne)
    // router.get('/user/:age/:name', getOne)
    router.get('/user/:ageMax/:ageMin/:name', getOne)

    router.get('/users', requireAuth, isAdmin, getAll)

    router.post('/register', create)
    router.post('/login', login)

    router.put('/user/:id', requireAuth, isAdmin, update)
    router.delete('/user/:id', requireAuth, isAdmin, remove)
}
