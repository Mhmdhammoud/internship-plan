import { Response } from 'express'
import { ICreateProduct, IProduct, OurRequest } from '../../types'
import { OurResponse } from '../../types/request'

export default async (
    req: OurRequest<ICreateProduct>,
    res: OurResponse<IProduct | null>
) => {
    try {
        return res.status(200).json({
            status: 'Success',
            message: 'Product was created successfully.',
            data: null
        })
    } catch (err) {
        const error = err as Error
        console.log(error.message)
        return res.status(500).json({
            status: 'Failure',
            message: 'Internal Server Error'
        })
    }
}
