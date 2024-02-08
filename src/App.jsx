import './App.css';
import { useState } from 'react';

function App() {
  // const size = 120;
  const [size, setSize] = useState(40);
  const [text, setText] = useState("Do you want to be my Valentine ?")
  function creste(){
    setSize(size + 50)
  }
  function valentine(){
    setText("I love you")
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <button
      className="yes"
      style={{
        height: size,
        width: size,
      }}
      onClick={valentine}
      >yes</button>
      <button 
      onClick={creste} 
      className='no'
      style={{
        height: 40,
        width: 40,
      }}
      >no</button>
    </div>
  );
}

export default App;
