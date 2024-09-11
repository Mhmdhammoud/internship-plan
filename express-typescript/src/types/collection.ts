import mongoose from 'mongoose'
export interface ICollection {
    readonly _id: mongoose.ObjectId
    title: string
    image: string
    readonly createdAt: Date
    readonly updatedAt: Date
}
