import express from 'express'
const router = express.Router()

import userRoute from '../components/user/userRoute'
import ingredientRoute from '../components/ingredient/ingredientRoute'
import orderRoute from '../components/order/orderRoute'

userRoute(router)
ingredientRoute(router)
orderRoute(router)

export default router