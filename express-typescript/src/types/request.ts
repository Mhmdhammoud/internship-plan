import { Request } from 'express'

export interface OurRequest<T> extends Request {
    body: T
}
