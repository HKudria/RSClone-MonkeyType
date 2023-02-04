import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Register} from './Register/Register';
import {Login} from './Login/Login';
import s from './SignInPage.module.css';

export const SignInPage = () => {
  const {t} = useTranslation('common');
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div>
      <h1>{t('login.title')}</h1>
      { isLogin ? <Login/> : <Register />}
      <button onClick={() => setIsLogin(true)}>Login form</button>
      <button onClick={() => setIsLogin(false)}>Register form</button>
    </div>

  )
}