import { useEffect, useRef, useState } from 'react';

function App() {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);
  }, []);

  useEffect(() => {
    if (context === null) {
      return;
    }
    context.fillStyle = 'green';
    context.fillRect(10, 10, 150, 100);
  }, [context]);

  return (
    <div className="App">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
