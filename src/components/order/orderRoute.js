import { requireAuth, isAdmin } from '../../middleware/authentication'
import { getAll, create, update, remove } from './orderController'

export default function (router) {
    router.get('/orders', requireAuth, isAdmin, getAll)
    router.post('/order', requireAuth, create)
    router.put('/order/:id', requireAuth, update)
    router.delete('/order/:id', requireAuth, isAdmin, remove)
}