import s from './WinStatistic.module.css';
import closeItem from '../../../../assets/image/closeItem.png';
import { useState } from 'react';

export const WinStatistic = () => {
  const [isActiveCloseItem, setIsActiveCloseItem] = useState<boolean>(true);

  const closeItemHandler = () => {
    setIsActiveCloseItem(false);
  }
  return (
     <div className={isActiveCloseItem ? s.wrapper : s.wrapper_not_active}>
      <div className={s.closeContainer}>
        <img src={closeItem}
         alt='closeItem'
         className={ s.closeItem}
         onClick={closeItemHandler}
          />
      </div>
      <div className={s.winTable}>you win</div>
    </div>
  )
}