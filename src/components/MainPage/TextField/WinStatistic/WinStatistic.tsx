import { FC, useState } from 'react';

import closeItem from '../../../../assets/image/closeItem.png';
import s from './WinStatistic.module.css';
import { MyResponsivePie } from './Diagram/Diagram';



export const WinStatistic: 
  FC<{ startTime: number | null; 
    endTime: number | null; 
    length: number; 
    errorChar: number; 
    correctChar: number; 
    text: string; 
    currIndex: number;
    time: number | null | undefined;}> = 
    ({startTime, endTime, length, errorChar, correctChar, text, currIndex, time}): JSX.Element => {
  
  const [isActiveCloseItem, setIsActiveCloseItem] = useState<boolean>(true);

  const countCorrectChar = () => {
    if (length && errorChar) {
      return length - errorChar;
    }
  }

  const closeItemHandler = () => {
    setIsActiveCloseItem(false);
  }

  const countFinishTime = () => {
    if (endTime && startTime) {
      return ((endTime - startTime) / 1000).toFixed(2);
    } else return 'you did not finish type';
  }

  const countPercentOfCorrectTyping = () => {
    if (correctChar && length) {
      return Math.trunc((correctChar / length) * 100);
    }
  }

  const countPercentOfUnwrittenText = () => {
    if (currIndex && length) {
      return Math.trunc(((length - currIndex - 1) / length) * 100);
    }
  }

  const errorEndCorrectChars = [
    {
      'id': 'Correct chars',
      'label': 'Correct chars',
      'value': countCorrectChar(),
      'color': 'hsl(167, 70%, 50%)'
    },
    {
      'id': 'Incorrect chars',
      'label': 'Incorrect Chars',
      'value': errorChar,
      'color': 'hsl(205, 70%, 50%)'
    },
  ]

  return (
     <div className={isActiveCloseItem ? s.wrapper : s.wrapper_not_active}>
        <div className={s.closeContainer}>
          <img src={closeItem}
          alt='closeItem'
          className={ s.closeItem}
          onClick={closeItemHandler}
            />
        </div>
        <div className={s.winTable}>
          <div className={s.test}>
            <div>Время, за которое ввели текст {countFinishTime()} seconds</div>
            <div>Правильно введенных букв {countCorrectChar()}</div>
            <div>Неправильно введенных букв {errorChar}</div>
            <div>Процент правильного выполнения {countPercentOfCorrectTyping()} %</div>
            <div>Фраза: {text}</div>
            <div>Timer: {time} seconds</div>
            <div>Процент, сколько не успели ввести {countPercentOfUnwrittenText()} %</div>
          </div>

          <MyResponsivePie data={errorEndCorrectChars} />

        
        </div>
    </div>
  )
}