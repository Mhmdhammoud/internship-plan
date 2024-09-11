import mongoose from 'mongoose'
import { IBrand } from '../types'
const brandSchema = new mongoose.Schema<IBrand>(
    {
        title: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    },
    { timestamps: true, versionKey: false }
)
export default mongoose.model<IBrand>('brands', brandSchema)
