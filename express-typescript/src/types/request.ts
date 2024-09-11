import { Request, Response } from 'express'

export interface OurRequest<T> extends Request {
    body: T
}
export interface OurResponse<T> extends Response {
    json: (body?: MyJson<T>) => this
}

type MyJson<T> = {
    status: 'Success' | 'Failure'
    message: string
    data?: T
}
