import { Request, Response } from 'express'

export default async (req: Request, res: Response) => {
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
