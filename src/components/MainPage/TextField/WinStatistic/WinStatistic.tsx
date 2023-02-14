import { useState } from 'react';

import s from './WinStatistic.module.css';
import { MyResponsivePie } from './Diagram/Diagram';

interface IWinStatisticProps {
  startTime: number | null;
  endTime: number | null;
  length: number;
  errorChar: number;
  correctChar: number;
  text: string;
  currIndex: number;
  time: number | null | undefined;
  isUserPage?: boolean;
  closeModal?: () => void;
}

export const WinStatistic = ({
  startTime,
  endTime,
  length,
  errorChar,
  correctChar,
  text,
  currIndex,
  time,
  isUserPage,
  closeModal,
}: IWinStatisticProps) => {
  const [isActiveCloseItem, setIsActiveCloseItem] = useState<boolean>(true);

  const countCorrectChar = () => {
    if (length && errorChar) {
      return length - errorChar;
    } else return length;
  };

  const countFinishTime = () => {
    if (endTime && startTime) {
      const finishTime = ((endTime - startTime) / 1000).toFixed(2);
      return `Finish time: ${finishTime} sec`;
    } else return 'Finish time: No';
  };

  const countPercentOfCorrectTyping = () => {
    if (correctChar && length) {
      return Math.trunc((correctChar / length) * 100);
    } else return '0';
  };

  const countPercentOfUnwrittenText = () => {
    if (currIndex && length) {
      return Math.trunc(((length - currIndex - 1) / length) * 100);
    }
  };

  const showTimer = () => {
    if (time) {
      return `Timer: ${time} sec`;
    } else return 'Timer: No timer';
  };

  const playAgain = () => {
    window.location.reload();
  };

  const errorEndCorrectChars = [
    {
      id: 'Correct chars',
      label: 'Correct chars',
      value: countCorrectChar(),
      color: 'hsl(167, 70%, 50%)',
    },
    {
      id: 'Incorrect chars',
      label: 'Incorrect Chars',
      value: errorChar,
      color: 'hsl(205, 70%, 50%)',
    },
  ];

  return (
    <div className={isActiveCloseItem ? s.wrapper : s.wrapper_not_active}>
      <div className={s.winTable}>
        <h2 className={s.title}>Game end statistics</h2>

        <div className={s.text}>
          Text: <span className={s.phrase}>{text}</span>
        </div>
        <div className={s.statistics}>
          <MyResponsivePie data={errorEndCorrectChars} />
          <div className={s.container}>
            <div>
              <div className={s.item}>{countFinishTime()}</div>
              <div className={s.item}>Success rate: {countPercentOfCorrectTyping()} %</div>
            </div>
            <div>
              <div className={s.item}>{showTimer()}</div>
              <div className={s.item}>Unwritten letters: {countPercentOfUnwrittenText()} %</div>
            </div>
          </div>
        </div>
        {!isUserPage ? (
          <button onClick={playAgain} className={s.btn}>
            Try again
          </button>
        ) : (
          <button onClick={closeModal} className={s.btn}>
            CloseModal
          </button>
        )}
      </div>
    </div>
  );
};
