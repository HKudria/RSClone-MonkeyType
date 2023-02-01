import s from './MainPage.module.css';
import TypingGameDemo from './TextField/TextField';

export const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.item}>punctuation</div>
        <div className={s.item}>numbers</div>
        <div className={s.item}>time</div>
        <div className={s.item}>words</div>
        <div className={s.item}>quote</div>
        <div className={s.item}>change</div>
      </div>
        <TypingGameDemo />
      </div>
  )
}