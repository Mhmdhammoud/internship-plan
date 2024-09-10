import express from 'express'
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
} from '../controllers'

const router = express.Router()

router.get('/all', getAllUsers)
router.get('/', getUser)
router.put('/', updateUser)
router.post('/', createUser)
router.delete('/', deleteUser)

export default router
