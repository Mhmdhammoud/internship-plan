import mongoose from 'mongoose'
import { ICollection } from '../types'
import { timeStamp } from 'console'

const collectionSchema = new mongoose.Schema<ICollection>(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default mongoose.model<ICollection>('collections', collectionSchema)
