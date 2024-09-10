import express from 'express'
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrder,
    updateOrder
} from '../controllers'

const router = express.Router()

router.get('/all', getAllOrders)
router.get('/', getOrder)
router.post('/', createOrder)
router.put('/', updateOrder)
router.delete('/', deleteOrder)

export default router
