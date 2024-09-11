import mongoose from 'mongoose'
export interface IProduct {
    readonly _id: mongoose.ObjectId
    title: string
    description: string
    price: number
    discount: number
    brand: mongoose.ObjectId
    collection: mongoose.ObjectId
    readonly createdAt: Date
    readonly updatedAt: Date
}
export interface ICreateProduct {
    title: string
    description: string
    price: number
    discount: number
    brand: mongoose.ObjectId
    collection: mongoose.ObjectId
}
