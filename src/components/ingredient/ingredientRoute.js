import { requireAuth, isAdmin } from '../../middleware/authentication'
import { getAll, create, update, remove } from './ingredientController'

export default function (router) {
    router.get('/ingredients', getAll)
    router.post('/ingredient', requireAuth, isAdmin, create)
    router.put('/ingredient/:id', requireAuth, isAdmin, update)
    router.delete('/ingredient/:id', requireAuth, isAdmin, remove)
}
