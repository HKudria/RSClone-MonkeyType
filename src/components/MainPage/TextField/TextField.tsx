import { FC, useEffect, useState } from 'react';
import useTypingGame from 'react-typing-game-hook';
import { faker } from '@faker-js/faker';

import { WinStatistic } from './WinStatistic/WinStatistic';
import s from './TextField.module.css';
import { KeyboardHelper } from './Keyboard/Keyboard';

export const TypingGameDemo:
 FC<{ amountOfWords: string;
   quote: string;
   isActiveNumber: boolean; 
   isActivePunctuation: boolean;
   selectTime: string;
   timeYourself: string;
   isInstallTimeYourself: boolean;
   wordsYourself: string;
   textYourself: string;
   isInstallTextYourself: boolean; }> = 
   ({ amountOfWords, quote, isActiveNumber,
     isActivePunctuation, selectTime, timeYourself,
     isInstallTimeYourself, wordsYourself, textYourself,
     isInstallTextYourself } ): JSX.Element => {
  const [text, setText] = useState('');
  const [isWin, setIsWin] = useState(false);
  const [counter, setCounter] = useState<number | null>();
  const [time, setTime] = useState<number | null>();
  const {
    states: {
      charsState,
      length,
      currIndex,
      currChar,
      correctChar,
      errorChar,
      phase,
      startTime,
      endTime
    },
    actions: { insertTyping, resetTyping, deleteTyping }
  } = useTypingGame(text);

  const handleKey = (key: string) => {
    if (key === 'Escape') {
      resetTyping();
    } else if (key === 'Backspace') {
      deleteTyping(false);
    } else if (key.length === 1) {
      insertTyping(key);
    }
  };

  useEffect(() => {
    switch(selectTime) {
          case '15':
            setCounter(15);
            setTime(15);
            break;
          case '30':
            setCounter(30);
            setTime(30);
            break;
          case '60':
            setCounter(60);
            setTime(60);
            break;
          case '120':
            setCounter(120);
            setTime(120);
            break;
          case 'install_yourself_time':
            setCounter(+timeYourself);
            setTime(+timeYourself);
            break;
          default:
            setCounter(null);
            setTime(null);
        }
  }, [selectTime, timeYourself]);

  useEffect(() => {
    if (counter && startTime) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter, startTime]);

  useEffect(() => {
    switch (amountOfWords) {
      case '10':
        setText(faker.lorem.words(10));
        break;
      case '25':
        setText(faker.lorem.words(25));
        break;
      case '50':
        setText(faker.lorem.words(50));
        break;
      case 'install_yourself_words':
        setText(faker.lorem.words(+wordsYourself));
        break;
      default:
        setText(faker.lorem.sentence());
    }
  }, [amountOfWords, faker, wordsYourself]);

  useEffect(() => {
    switch (quote) {
      case 'short':
        setText(faker.lorem.sentence(5));
        break;
      case 'medium':
        setText(faker.lorem.sentence(20));
        break;
      case 'long':
        setText(faker.lorem.sentence(40));
        break;  
      default:
        setText(faker.lorem.sentence(3));
    }
  }, [quote, faker]);

  useEffect(() => {
    if (isActiveNumber && isActivePunctuation) {
      setText(`${faker.lorem.words(2)}. ${faker.lorem.words(2)}! ${faker.address.buildingNumber()} ${faker.lorem.words(1)}. ${faker.lorem.words(2)}, ${faker.address.buildingNumber()} '${faker.lorem.words(1)}'; ${faker.lorem.words(2)}?`);
    } else if (isActiveNumber) {
      setText(faker.lorem.words(3) + ' ' + faker.address.buildingNumber()
       + ' ' + faker.lorem.words(2) + ' ' + faker.address.buildingNumber()
       + ' ' + faker.lorem.words(2));
    } else if (isActivePunctuation) {
      setText(`${faker.lorem.words(2)}, ${faker.lorem.words(2)}: ${faker.lorem.words(1)}. ${faker.lorem.words(2)}! "${faker.lorem.words(1)}"; ${faker.lorem.words(2)}?`);
    } else {
      setText(faker.lorem.sentence(4));
    }
  }, [isActiveNumber, isActivePunctuation, faker]);

  useEffect(() => {
    if (endTime) {
      setIsWin(true);
    }
  }, [endTime]);

  useEffect(() => {
    if (isInstallTextYourself) {
      setText(textYourself);
    }
  }, [isInstallTextYourself, textYourself]);

  return (
    <div className={s.wrapper}>
      <div className={s.timer}>{counter}</div>
      <div
        className={s.typingTest}
        onKeyDown={(e) => {
          handleKey(e.key);
          e.preventDefault();
        }}
        tabIndex={0}
      >
         {text.split('').map((char: string, index: number) => {

          const state = charsState[index];
          const color = state === 0 ? '#444' : state === 1 ? '#dfd7af' : '#ca4754';
          return (
            <span
              key={`${char} + ${index}`}
              style={{ color }}
              className={currIndex + 1 === index ? 'curr-letter' : ''}
            >
              {char}
            </span>
          );
        })}
      </div>
      {((isWin || counter === 0) && !isInstallTimeYourself) &&
       <WinStatistic
        startTime={startTime}
        endTime={endTime}
        length={length}
        errorChar={errorChar}
        correctChar={correctChar}
        text={text}
        currIndex={currIndex}
        time={time}
         /> }
         {/* <pre>
        {JSON.stringify(
          {
            // charsState,
            length,
            currIndex,
            currChar,
            correctChar,
            errorChar,
            phase,
            startTime,
            endTime
          },
          null,
          2
        )}
      </pre> */}
         {/* <KeyboardHelper currChar={currChar}
         text={text}
         currIndex={currIndex} /> */}
    </div>
  );
};

export default TypingGameDemo;