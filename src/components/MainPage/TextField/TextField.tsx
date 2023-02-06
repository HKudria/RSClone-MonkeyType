import useTypingGame from 'react-typing-game-hook';
import { faker } from '@faker-js/faker';
import s from './TextField.module.css';
import { FC, useEffect, useState } from 'react';

export const TypingGameDemo: FC<{ amountOfWords: string; }> = ({ amountOfWords }): JSX.Element => {
  const [text, setText] = useState('');
  const [isWin, setIsWin] = useState(false);
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
    if (endTime) {
      setIsWin(true);
    }
  }, [endTime])

  console.log(text.split(''));
  

  return (
    <div className={s.wrapper}>
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