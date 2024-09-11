import { Response } from 'express'
import { UserModel } from '../../schemas'
import { OurRequest } from '../../types/request'
import { ICreateUser } from '../../types/user'

export default async (req: OurRequest<ICreateUser>, res: Response) => {
    try {
        const createdUser = await UserModel.create(req.body)
        return res.status(200).json({
            message: 'Success',
            data: createdUser
        })
    } catch (err) {
        const error = err as Error
        console.log(error.message)
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}
