import useTypingGame from 'react-typing-game-hook';
import s from './TextField.module.css';

export const TypingGameDemo = () => {
  const text = 'The quick brown fox jumps over the lazy dog';
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
              key={+char + index}
              style={{ color }}
              className={currIndex + 1 === index ? 'curr-letter' : ''}
            >
              {char}
            </span>
          );
        })}
      </div>
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