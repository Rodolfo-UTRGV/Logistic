import { Router } from 'express';
import HttpMiddleware from '../middleware';
import HttpRoutesUser from './user';

export default class HttpRoutes
{
    constructor()
    {
        this.router = Router();
        this.router.use('/user', new HttpRoutesUser);

        return this.router;
    }
}