import { Router } from 'express';
import HttpRoutesUserProfileInfo from './info';

export default class HttpRoutesUserProfile
{
    constructor()
    {
        this.router = Router();
        
        this.router.post('/info', HttpRoutesUserProfileInfo);

        return this.router;
    }
}