import { Router } from 'express';
import HttpMiddleware from '../../middleware';
import HttpRoutesUserAddUser from './add';

export default class HttpRoutesUser
{
    constructor()
    {
        this.router = Router();

        this.router.post('/add', HttpRoutesUserAddUser);

        return this.router;
    }
}