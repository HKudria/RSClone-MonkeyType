import s from './SignInPage.module.css';
import {useTranslation} from 'react-i18next';

export const SignInPage = () => {
  const {t} = useTranslation('common');
  return (
    <div><h1>{t('login.title')}</h1></div>
  )
}