import { FC, useEffect, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import 'react-simple-keyboard/build/css/index.css';
import s from './Keyboard.module.css';

export const KeyboardHelper: FC<{ text: string; currIndex: number;}> = ({  text, currIndex }): JSX.Element => {
  const [layout, setLayout] = useState('default');
  const keyboard = useRef();

  useEffect(() => {
    if (keyboard.current) {
      const allElements = keyboard.current.buttonElements;
      const arrayOfLetters = Object.keys(allElements);
      const currentLetter = arrayOfLetters.filter((item) => item === text[currIndex + 1]);
      const prevLetter = arrayOfLetters.filter((item) => item === text[currIndex]);
      const letterAfterBackspace = arrayOfLetters.filter((item) => item === text[currIndex + 2]);

      const curChar = currentLetter[0] ? currentLetter[0] : '{space}';
      const prevChar = prevLetter[0] ? prevLetter[0] : '{space}';
      const backspaceChar =letterAfterBackspace[0] ? letterAfterBackspace[0] : '{space}';

      keyboard.current.removeButtonTheme(prevChar, 'hg-activeButton');
      keyboard.current.addButtonTheme(curChar, 'hg-activeButton');

      const handleBackspace = (event: { keyCode: number; }) => {
        if (event.keyCode === 8) {
          if (keyboard.current) {
            keyboard.current.removeButtonTheme(backspaceChar, 'hg-activeButton');
          }
       }
     };
       window.addEventListener('keydown', handleBackspace);
 
     return () => {
       window.removeEventListener('keydown', handleBackspace);
     };
    }
   
  }, [text, currIndex]);

  return (
    <div className={s.wrapper}>
      <p className={s.keyboardWorks}>*keyboard works only in English language</p>
      <div className='App'>
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
      />
    </div>
    </div>
  );
}