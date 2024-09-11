import mongoose from 'mongoose'
export interface IBrand {
    readonly _id: mongoose.ObjectId
    title: string
    logo: string
    bio: string
    readonly createdAt: string
    readonly updatedAt: string
}
