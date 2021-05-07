import React, { createContext } from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; backgroundColor: string }
}

const themes: IThemeProps = {
  'light': {
    color: '#659',
    backgroundColor: '#eee'
  },
  'dark': {
    color: '#fff',
    backgroundColor: '#222'
  }
}

export const ThemeContext = createContext(themes.light);

function App() {
  const position = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random');
  const dogData = data as IShowResult;

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        {loading ? <p>正在加载中</p> : <img src={dogData.message} alt='dog' />}
        <Hello message="hello world" />
        <LikeButton />
        <MouseTracker />
        <p>X: {position.x}, Y: {position.y}</p>

      </ThemeContext.Provider>
    </div>
  );
}

export default App;
