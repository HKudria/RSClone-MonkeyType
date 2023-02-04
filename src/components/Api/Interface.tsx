export interface IUser {
    "full_name" : string;
    "last_name" : string;
    "email" : string;
    "password" : string;
}

export type ILogin = Pick<IUser, 'email' | 'password'>

