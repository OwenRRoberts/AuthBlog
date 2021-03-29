import { Query } from '../index';

const findOneByEmail = async(email: string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);

const findOneByID = async(id: number) => Query(`SELECT * FROM user WHERE ID = ${id} LIMIT 1`);

export default{
    findOneByEmail,
    findOneByID
}