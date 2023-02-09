import { ChangeEvent, FC, useState } from 'react';
import s from './MainPage.module.css';
import TypingGameDemo from './TextField/TextField';
import ESC from '../../assets/image/esc.png';

export const MainPage: FC = () => {
  const [selectAmountOfWords, setSelectAmountOfWords] = useState<string>('');
  const [selectQuote, setSelectQuote] = useState<string>('');
  const [selectTime, setSelectTime] = useState<string>('');
   
  const [time, setTime] = useState<string>('No time');
  const [words, setAmountOfWords] = useState<string>('Not words');
  const [quote, setQuote] = useState<string>('Not quote');

  const [isActivePunctuation, setIsActivePunctuation] = useState<boolean>(false);
  const [isActiveNumber, setIsActiveNumber] = useState<boolean>(false);

  const [isInstallTimeYourself, setIsInstallTimeYourself] = useState<boolean>(false);
  const [timeYourself, setTimeYourself] = useState<string>('10');

  const [isInstallWordsYourself, setIsInstallWordsYourself] = useState<boolean>(false);
  const [wordsYourself, setWordsYourself] = useState<string>('3');


  const changeTime = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'install_yourself_time') {
      setIsInstallTimeYourself(true);
    }
    setTime(event.target.value);
    setSelectTime(event.target.value);
  };

  const changeAmountOfWords = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'install_yourself_words') {
      setIsInstallWordsYourself(true);
    }
    setAmountOfWords(event.target.value);
    setQuote('no-quote');
    setSelectAmountOfWords(event.target.value);
    setIsActivePunctuation(false);
    setIsActiveNumber(false);
  };

  const changeQuote = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuote(event.target.value);
    setAmountOfWords('no-words');
    setSelectQuote(event.target.value);
    setIsActivePunctuation(false);
    setIsActiveNumber(false)
  };

  const changeActiveClassPunctuation = () => {
    setIsActivePunctuation(current => !current);
    if (isActivePunctuation) {
      setQuote('no-quote');
      setAmountOfWords('no-words');
    }
  }

  const changeActiveClassNumber = () => {
    setIsActiveNumber(current => !current);
    if (isActiveNumber) {
      setQuote('no-quote');
      setAmountOfWords('no-words');
    }
  }

  const handleInputTime = (event: ChangeEvent<HTMLInputElement>) => {
    const currentSetTime = event.target.value.replace(/\D/g,'');
    setTimeYourself(currentSetTime);
  }

  const handleInputWords = (event: ChangeEvent<HTMLInputElement>) => {
    const currentSetWords = event.target.value.replace(/\D/g,'').substr(0,2);
    setWordsYourself(currentSetWords);
  }

  const handleBtnSetTime = () => {
    setIsInstallTimeYourself(false);
  }

  const handleBtnSetWords = () => {
    setIsInstallWordsYourself(false);
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
         <div className={s.separator}></div>
        <select value={time} onChange={changeTime} className={s.time}>
          <option value="no-time">No time</option>
          <option value="15">15s</option>
          <option value="30">30s</option>
          <option value="60">60s</option>
          <option value="120">120s</option>
          <option value="install_yourself_time">Install yourself</option>
        </select>
        <select value={words} onChange={changeAmountOfWords} className={s.words}>
          <option value="no-words">Not words</option>
          <option value="10">10 words</option>
          <option value="25">25 words</option>
          <option value="50">50 words</option>
          <option value="install_yourself_words">Install yourself</option>
        </select>
        <select value={quote} onChange={changeQuote} className={s.quote}>
          <option value="no-quote">Not quote</option>
          <option value="short">Short quote</option>
          <option value="medium">Medium quote</option>
          <option value="long">Long quote</option>
        </select>
        <div className={s.separator}></div>
        <div className={s.item}>change</div>
      </div>
      {isInstallTimeYourself && 
      <div className={s.installTime}>
        <div className={s.installTimeInput}>
          <input type='text'
           onInput={handleInputTime} 
           value={timeYourself} 
           className={s.inputTime}></input>  
          <button onClick={handleBtnSetTime} className={s.btnTime}>Set time</button>
        </div>
      </div>}
      {isInstallWordsYourself && 
      <div className={s.installWords}>
        <div className={s.installWordsInput}>
          <input type='text'
           onInput={handleInputWords} 
           value={wordsYourself} 
           className={s.inputWords}></input>  
          <button onClick={handleBtnSetWords} className={s.btnWords}>Set words</button>
        </div>
      </div>}
        <TypingGameDemo
          amountOfWords={selectAmountOfWords}
          quote={selectQuote}
          isActiveNumber={isActiveNumber}
          isActivePunctuation={isActivePunctuation}
          selectTime={selectTime}
          timeYourself={timeYourself}
          isInstallTimeYourself={isInstallTimeYourself}
          wordsYourself={wordsYourself}
          />
        <div className={s.restart}>
          <img src={ESC} alt='esc' className={s.esc}/>
          <p> - restart test </p>
        </div>
      </div>
  )
}