import { ChangeEvent, useEffect, useState } from 'react';
import s from './MainPage.module.css';
import TypingGameDemo from './TextField/TextField';
import ESC from '../../assets/image/esc.png';
export interface IState {
  amountOfWords: string,
}

export const MainPage: React.FC = () => {
  const [selectAmountOfWords, setSelectAmountOfWords] = useState('');
   
  const [time, setTime] = useState<string>('No time');
  const [words, setAmountOfWords] = useState<string>('Not words');
  const [quote, setQuote] = useState<string>('Not quote');

  const [isActivePunctuation, setIsActivePunctuation] = useState<boolean>(false);
  const [isActiveNumber, setIsActiveNumber] = useState<boolean>(false);


  const changeTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
  };

  const changeAmountOfWords = (event: ChangeEvent<HTMLSelectElement>) => {
    setAmountOfWords(event.target.value);
    setSelectAmountOfWords(event.target.value);
  };

  const changeQuote = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuote(event.target.value);
  };

  const changeActiveClassPunctuation = () => {
    setIsActivePunctuation(current => !current);
  }

  const changeActiveClassNumber = () => {
    setIsActiveNumber(current => !current);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div
         className={isActivePunctuation ? s.item_active : s.item}
         onClick={changeActiveClassPunctuation}
          >punctuation</div>
        <div
         className={isActiveNumber ? s.item_active : s.item}
         onClick={changeActiveClassNumber}
         >numbers</div>
        <select value={time} onChange={changeTime} className={s.time}>
          <option value="no-time">No time</option>
          <option value="fifteen_sec">15s</option>
          <option value="thirty_sec">30s</option>
          <option value="sixty_sec">60s</option>
          <option value="two_minutes">120s</option>
        </select>
        <select value={words} onChange={changeAmountOfWords} className={s.words}>
          <option value="no-words">Not words</option>
          <option value="10">10 words</option>
          <option value="25">25 words</option>
          <option value="50">50 words</option>
        </select>
        <select value={quote} onChange={changeQuote} className={s.quote}>
          <option value="no-quote">Not quote</option>
          <option value="short_quote">Short quote</option>
          <option value="medium_quote">Medium quote</option>
          <option value="long_quote">Long quote</option>
        </select>
        <div className={s.item}>change</div>
      </div>
        <TypingGameDemo amountOfWords={selectAmountOfWords} />
        <div className={s.restart}>
          <img src={ESC} alt='esc' className={s.esc}/>
          <p> - restart test </p>
        </div>
      </div>
  )
}