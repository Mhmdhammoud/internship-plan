import express from 'express'
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct
} from '../controllers'

const router = express.Router()

router.get('/all', getAllProducts)
router.get('/', getProduct)
router.put('/', updateProduct)
router.post('/', createProduct)
router.delete('/', deleteProduct)
export default router
