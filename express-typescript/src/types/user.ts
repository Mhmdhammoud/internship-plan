import mongoose from 'mongoose'
export interface IUser {
    readonly _id: mongoose.ObjectId
    fname: string
    lname: string
    email: string
    password: string
    readonly createdAt: Date
    readonly updatedAt: Date
}
export interface ICreateUser {
    fname: string
    lname: string
    email: string
    password: string
}
