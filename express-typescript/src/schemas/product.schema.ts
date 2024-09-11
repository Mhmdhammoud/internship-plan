import mongoose from 'mongoose'
import { IProduct } from '../types/product'
import brandModel from './brand.schema'
import CollectionModel from './collection.schema'

const productSchema = new mongoose.Schema<IProduct>(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        brand: {
            type: mongoose.Types.ObjectId,
            ref: brandModel,
            required: true
        },
        collection: {
            type: mongoose.Types.ObjectId,
            ref: CollectionModel,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
export default mongoose.model<IProduct>('products', productSchema)
