import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/image/keyboard_logo.png';
import keyboard from '../../assets/image/keyboard.png';
import info from '../../assets/image/info.png';
import settings from '../../assets/image/settings.png';
import addUser from '../../assets/image/add_user.png';

import {useTranslation} from 'react-i18next';

export const Header = () => {
    const {t, i18n} = useTranslation('common');

    const changeLanguage = (language: string) => {
        if (language === 'en' || language === 'ru') {
            i18n.changeLanguage(language)
            localStorage.setItem('lang', language)
        } else {
            console.log('Wrong language')
        }
    }

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <button onClick={() => changeLanguage('ru')}>ru</button>
                <button onClick={() => changeLanguage('en')}>en</button>
                <NavLink to={'/'}>
                    <img className={s.logo} alt='logo' src={logo}></img>
                </NavLink>
                <h1 className={s.title}>{t('title', {app:'MonkeyType'})}</h1>
            </div>
            <div className={s.menuItems}>
                <NavLink to={'/'}>
                    <img className={s.keyboard} alt='keyboard' src={keyboard}></img>
                </NavLink>
                <NavLink to={'/InfoPage'}>
                    <img className={s.info} alt='info' src={info}></img>
                </NavLink>
                <NavLink to={'/SettingsPage'}>
                    <img className={s.settings} alt='settings' src={settings}></img>
                </NavLink>
                <NavLink to={'/SignInPage'}>
                    <img className={s.addUser} alt='addUser' src={addUser}></img>
                </NavLink>
            </div>
        </header>
    )
}