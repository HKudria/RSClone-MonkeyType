export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export type ILogin = Pick<IUser, 'email' | 'password'>;

export interface IUserData {
  _id: string;
  email: string;
  result_time: number;
  correct_input: number;
  incorrect_input: number;
  percent: number;
  text: string;
  timer: number;
  timer_percent: number;
  fullName: string;
  date: string;
}
