import useTypingGame from 'react-typing-game-hook';
import { faker } from '@faker-js/faker';
import s from './TextField.module.css';
import { FC, useEffect, useState } from 'react';

export const TypingGameDemo:
 FC<{ amountOfWords: string;
   quote: string;
   isActiveNumber: boolean; 
   selectTime: string; }> = ({ amountOfWords, quote, isActiveNumber, selectTime } ): JSX.Element => {
  const [text, setText] = useState<string>('');
  const [isWin, setIsWin] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>();
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
            break;
          case '30':
            setCounter(30);
            break;
          case '60':
            setCounter(60);
            break;
          case '120':
            setCounter(120);
            break;
        }
  }, [selectTime]);

  useEffect(() => {
    if (counter) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter]);

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
      default:
        setText(faker.lorem.sentence());
    }
  }, [amountOfWords, faker]);

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
    if (isActiveNumber) {
      setText(faker.lorem.words(3) + ' ' + faker.address.buildingNumber() + ' ' + faker.lorem.words(2) + ' ' + faker.address.buildingNumber());
    } else {
      setText(faker.lorem.sentence(3));
    }
  }, [isActiveNumber, faker]);

  useEffect(() => {
    if (endTime) {
      setIsWin(true);
    }
  }, [endTime])

  return (
    <div className={s.wrapper}>
      <div>{counter}</div>
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
      {isWin && <div  >you win</div> }
      {/* <pre>
        {JSON.stringify(
          {
            startTime,
            endTime,
            length,
            currIndex,
            currChar,
            correctChar,
            errorChar,
            phase
          },
          null,
          2
        )}
      </pre> */}
    </div>
  );
};

export default TypingGameDemo;