import s from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.item}>punctuation</div>
        <div className={s.item}>numbers</div>
        <div className={s.item}>time</div>
        <div className={s.item}>words</div>
        <div className={s.item}>quote</div>
        <div className={s.item}>change</div>
      </div><p className={s.mainText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </>
  )
}