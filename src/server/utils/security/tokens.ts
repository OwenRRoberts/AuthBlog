import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../config';
import DB from '../../db';

export const CreateToken = async (payload: IPayload) => {
    let tokenid: any = await DB.AccessTokens.insert(payload.userid);
    payload.accesstokenid = tokenid.insertID; 
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload.accesstokenid, config.auth.secret);
    await DB.AccessTokens.update(payload.accesstokenid, token);
    return token; 
};

export const ValidToken = async(token: string) => {
    let payload
}

export interface IPayload{
    [key: string]: any;
    userid: number;
    unique?: string;
}