import { useEffect, useRef, useState } from 'react';
import TitleScene from './components/scenes/TitleScene/TitleScene';

export default function App() {
  const [currentScene, setCurrentScene] = useState('title');

  return (
    <div>
      {currentScene === 'title' ? <TitleScene /> : null}
    </div>
  );
}
