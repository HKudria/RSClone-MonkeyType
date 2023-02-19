import { faker } from '@faker-js/faker';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage, changeSound, language, playSound, settingsState, sound } from '../../store/settingsSlice';
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

  return (
    <div className={s.settingsPage}>
      <ul className={s.settingsList}>
        <li className={s.settingsListItem}>
          <h2>Language</h2>
          <div>
            <p>Switch the language of the interface</p>
            <div className={s.variantsList}>
              <button onClick={() => switchLanguage('ru')}
                className={state.lang === 'ru' ? s.activeVar : undefined}>Russian</button>
              <button onClick={() => switchLanguage('en')}
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
                className={state.sound === 'none' ? s.activeVar : undefined}>None</button>
              <button onClick={() => switchSound('click')}
                className={state.sound === 'click' ? s.activeVar : undefined}>Click</button>
              <button onClick={() => switchSound('keyboard')}
                className={state.sound === 'keyboard' ? s.activeVar : undefined}>Keyboard</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}