import { Response } from 'express'
import { ICreateProduct, OurRequest } from '../../types'

export default async (req: OurRequest<ICreateProduct>, res: Response) => {
    try {
        return res.status(200).json({
            message: 'Success'
        })
    } catch (err) {
        const error = err as Error
        console.log(error.message)
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}
