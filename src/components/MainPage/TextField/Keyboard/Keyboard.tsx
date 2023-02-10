import { ChangeEvent, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.module.css';

export const KeyboardHelper: FC<{currChar: string; text: string; currIndex: number;}> = ({ currChar, text, currIndex }): JSX.Element => {
  const [input, setInput] = useState('');
  const [layout, setLayout] = useState('default');
  const keyboard = useRef();

 
  

  const onChange = (input: SetStateAction<string>) => {
    setInput(input);
    console.log('Input changed', input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = (button: string) => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  // const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   const input = event.target.value;
  //   setInput(input);
  //   // if (keyboard.current) {
  //   //   keyboard.current.setInput(input);
  // };

  useEffect(() => {
    if (keyboard.current) {
      const allElements = keyboard.current.buttonElements;
      // console.log(allElements);
      // const currentLetter = allElements.filter((item: { currChar: string; }) => item === currChar);
      const arrayOfLetters = Object.keys(allElements);
      const currentLetter = arrayOfLetters.filter((item) => item === text[currIndex + 1]);
      console.log(currentLetter);
      // let test = allElements[currentLetter[0]];
      allElements[currentLetter[0]] = ['div.hg-button.hg-standardBtn.active'];
      // test = ['div.hg-button.hg-standardBtn.active'];
      console.log(allElements);
    }
   
  }, [text, currIndex]);

  return (
    <div className='App'>
      {/* <input
        value={input}
        placeholder={'Tap on the virtual keyboard to start'}
        onChange={onChangeInput}
      /> */}
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}