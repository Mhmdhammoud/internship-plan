import mongoose from 'mongoose'
import { IUser } from '../types/user'
const userSchema = new mongoose.Schema<IUser>(
    {
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default mongoose.model<IUser>('users', userSchema)
