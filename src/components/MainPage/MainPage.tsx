import { ChangeEvent, FC, useState } from 'react';
import s from './MainPage.module.css';
import TypingGameDemo from './TextField/TextField';
import ESC from '../../assets/image/esc.png';

export const MainPage: FC = () => {
  const [selectAmountOfWords, setSelectAmountOfWords] = useState('');
  const [selectQuote, setSelectQuote] = useState('');
  const [selectTime, setSelectTime] = useState('');

  const [time, setTime] = useState('No time');
  const [words, setAmountOfWords] = useState('Not words');
  const [quote, setQuote] = useState('Not quote');

  const [isActivePunctuation, setIsActivePunctuation] = useState(false);
  const [isActiveNumber, setIsActiveNumber] = useState(false);

  const [isInstallTimeYourself, setIsInstallTimeYourself] = useState(false);
  const [timeYourself, setTimeYourself] = useState('10');

  const [isInstallWordsYourself, setIsInstallWordsYourself] = useState(false);
  const [wordsYourself, setWordsYourself] = useState('3');

  const [isInstallTextYourself, setIsInstallTextYourself] = useState(false);
  const [textYourself, setTextYourself] = useState('Hey');

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
    setIsActiveNumber(false);
  };

  const changeActiveClassPunctuation = () => {
    setIsActivePunctuation((current) => !current);
    if (isActivePunctuation) {
      setQuote('no-quote');
      setAmountOfWords('no-words');
    }
  };

  const changeActiveClassNumber = () => {
    setIsActiveNumber((current) => !current);
    if (isActiveNumber) {
      setQuote('no-quote');
      setAmountOfWords('no-words');
    }
  };

  const handleInputTime = (event: ChangeEvent<HTMLInputElement>) => {
    const currentSetTime = event.target.value.replace(/\D/g, '');
    setTimeYourself(currentSetTime);
  };

  const handleInputWords = (event: ChangeEvent<HTMLInputElement>) => {
    const currentSetWords = event.target.value.replace(/\D/g, '').substr(0, 2);
    setWordsYourself(currentSetWords);
  };

  const handleInputText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const currentSetText = event.target.value;
    setTextYourself(currentSetText);
  };

  const handleBtnSetTime = () => {
    setIsInstallTimeYourself(false);
  };

  const handleBtnSetWords = () => {
    setIsInstallWordsYourself(false);
  };

  const handleBtnSetText = () => {
    setIsInstallTextYourself(false);
  };

  const handleChangeTextBtn = () => {
    setIsInstallTextYourself(true);
  };

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
        <div className={s.item} onClick={handleChangeTextBtn}>change</div>
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
      {isInstallTextYourself &&
      <div className={s.installText}>
        <div className={s.installTextInput}>
          <p className={s.textTitle}>Write your own text</p>
          <textarea
           name="text"
           onChange={handleInputText}
           value={textYourself}
           className={s.inputText}></textarea>
          <button onClick={handleBtnSetText} className={s.btnText}>Set text</button>
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
          textYourself={textYourself}
          isInstallTextYourself={isInstallTextYourself}
          />
        <div className={s.restart}>
          <img src={ESC} alt='esc' className={s.esc}/>
          <p> - restart test </p>
        </div>
      </div>
  )
}