import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [value2, setValue2] = useState();
  // problem statement 1.
  const inputRef = useRef()
  // problem statement 2.
  const inputRef2 = useRef(null)
  // problem statement 3.
  const changeRef = useRef()

  useEffect(() => {
    // problem statement 1.
    inputRef.current.focus()
  }, []);

  // problem statement 2.
  const handleChange = () => {
    const inputValue = inputRef2.current.value;
    console.log('Current Value:', inputValue);
    setValue2(inputValue)
  };

  // problem statement 3.
  const changeColor = () => {
    changeRef.current.style.backgroundColor = 'blue';
  }

  return (
    <>
      <div>
        <h1>Exploring useRef Hook in React</h1>
        <p>Problem statement</p>
        <p>1. Creating a Focusable Input Field</p>
        <div>
          <input type="text" ref={inputRef} />
        </div>
        <br />
        <p>2. Managing Uncontrolled Components</p>
        <div>
          <input type="text" ref={inputRef2} onChange={handleChange}/>
          <p>{value2}</p>
        </div>
        <br />
        <p>3. Interacting with DOM Elements</p>
        <div>
          <div style={{width: "100px", height: "100px", backgroundColor: "red"}} ref={changeRef}></div>
          <button onClick={changeColor}>Click to Change Color</button>
        </div>
      </div>
    </>
  )
}

export default App
