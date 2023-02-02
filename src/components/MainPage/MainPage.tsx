import { ChangeEvent, useState } from 'react';
import s from './MainPage.module.css';
import TypingGameDemo from './TextField/TextField';
import ESC from '../../assets/image/esc.png';

export const MainPage = () => {
  const [time, setTime] = useState('No time');
  const [words, setAmountOfWords] = useState('Not words');
  const [quote, setQuote] = useState('Not quote');

  const changeTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
  };

  const changeAmountOfWords = (event: ChangeEvent<HTMLSelectElement>) => {
    setAmountOfWords(event.target.value);
  };

  const changeQuote = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuote(event.target.value);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.item}>punctuation</div>
        <div className={s.item}>numbers</div>
        <select value={time} onChange={changeTime} className={s.time}>
          <option value="no-time">No time</option>
          <option value="fifteen_sec">15s</option>
          <option value="thirty_sec">30s</option>
          <option value="sixty_sec">60s</option>
          <option value="two_minutes">120s</option>
        </select>
        <select value={words} onChange={changeAmountOfWords} className={s.words}>
          <option value="no-words">Not words</option>
          <option value="ten_words">10 words</option>
          <option value="twenty_five_words">25 words</option>
          <option value="fifty_words">50 words</option>
        </select>
        <select value={quote} onChange={changeQuote} className={s.quote}>
          <option value="no-quote">Not quote</option>
          <option value="short_quote">Short quote</option>
          <option value="medium_quote">Medium quote</option>
          <option value="long_quote">Long quote</option>
        </select>
        <div className={s.item}>change</div>
      </div>
        <TypingGameDemo />
        <div className={s.restart}>
          <img src={ESC} alt='esc' className={s.esc}/>
          <p>   -   restart test </p>
        </div>
      </div>
  )
}