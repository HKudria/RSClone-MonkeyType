import { faker } from '@faker-js/faker';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeFont, changeLanguage, changeSound, font, language, playSound, settingsState, sound } from '../../store/settingsSlice';
import { RootState } from '../../store/store';
import s from './SettingsPage.module.css';

export const SettingsPage = () => {
  const state: settingsState = useSelector((state: RootState) => state.settings)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation('common');
  const switchLanguage = (language: language) => {
    i18n.changeLanguage(language);
    faker.locale = language;
    dispatch(changeLanguage(language))
  }

  const switchSound = (sound: sound) => {
    dispatch(changeSound(sound))
    playSound(sound)
  }

  const switchFont = (font: font) => {
    dispatch(changeFont(font))
  }

  return (
    <div className={s.settingsPage}>
      <ul className={s.settingsList}>
        <li className={s.settingsListItem}>
          <h2>Language</h2>
          <div>
            <p>Switch the language of the interface</p>
            <div className={s.variantsList}>
              <button onClick={() => switchLanguage('ru')}
                style={{fontFamily: state.font}}
                className={state.lang === 'ru' ? s.activeVar : undefined}>Russian</button>
              <button onClick={() => switchLanguage('en')}
                style={{fontFamily: state.font}}
                className={state.lang === 'en' ? s.activeVar : undefined}>English</button>
            </div>
          </div>
        </li>
        <li className={s.settingsListItem}>
          <h2>Sound</h2>
          <div>
            <p>Play a short sound when you press a key</p>
            <div className={s.variantsList}>
              <button onClick={() => switchSound('none')}
                style={{fontFamily: state.font}}
                className={state.sound === 'none' ? s.activeVar : undefined}>None</button>
              <button onClick={() => switchSound('click')}
                style={{fontFamily: state.font}}
                className={state.sound === 'click' ? s.activeVar : undefined}>Click</button>
              <button onClick={() => switchSound('keyboard')}
                style={{fontFamily: state.font}}
                className={state.sound === 'keyboard' ? s.activeVar : undefined}>Keyboard</button>
            </div>
          </div>
        </li>
        <li className={s.settingsListItem}>
          <h2>Font Family</h2>
          <div>
            <div className={s.languageList}>
              <button onClick={() => switchFont('Chilanka')}
                style={{fontFamily: 'Chilanka'}}
                className={state.font === 'Chilanka' ? s.activeVar : undefined}>Chilanka</button>
              <button onClick={() => switchFont('Droid Sans')}
                style={{fontFamily: 'Droid Sans'}}
                className={state.font === 'Droid Sans' ? s.activeVar : undefined}>Droid Sans</button>
              <button onClick={() => switchFont('Atkinson Hyperligible')}
                style={{fontFamily: 'Atkinson Hyperligible'}}
                className={state.font === 'Atkinson Hyperligible' ? s.activeVar : undefined}>Atkinson Hyperligible</button>
              <button onClick={() => switchFont('Helvetica')}
                style={{fontFamily: 'Comfortoa'}}
                className={state.font === 'Helvetica' ? s.activeVar : undefined}>Helvetica</button>
              <button onClick={() => switchFont('Courier')}
                style={{fontFamily: 'Courier'}}
                className={state.font === 'Courier' ? s.activeVar : undefined}>Courier</button>
              <button onClick={() => switchFont('Montserrat')}
                style={{fontFamily: 'Montserrat'}}
                className={state.font === 'Montserrat' ? s.activeVar : undefined}>Montserrat</button>
              <button onClick={() => switchFont('Ubuntu')}
                style={{fontFamily: 'Ubuntu'}}
                className={state.font === 'Ubuntu' ? s.activeVar : undefined}>Ubuntu</button>
              <button onClick={() => switchFont('Inconsolata')}
                style={{fontFamily: 'Inconsolata'}}
                className={state.font === 'Inconsolata' ? s.activeVar : undefined}>Inconsolata</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}