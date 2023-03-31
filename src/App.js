import './Style.css';
import React, { useState } from 'react';

function App() {

  const [result, setResult] = useState("")

  const handelClick = (e) => {

    setResult(result.concat(e.target.name))
  }
  const clear = () => {
    setResult("")

  }
  const backSpace = () => {
    setResult(result.slice(0, -1))
  }
  const calculate = () => {
    try {

      setResult(eval(result).toString())

    }
    catch (err) {
      setResult('Error')
    }

  }
  return (
    <div className='main'>
      <input type="text" placeholder='0' value={result} />

      <div >
        <button onClick={clear} className='btn-p'>Ac</button>
        <button name='.' onClick={backSpace} className='btn-p'>C</button>
        <button name='%' onClick={handelClick} className='btn-p' >%</button>
        <button name='/' onClick={handelClick} className='btn-o'>&divide;</button>
      </div>
      <div>
        <button name='7' onClick={handelClick} className='btn'>7</button>
        <button name='8' onClick={handelClick} className='btn'>8</button>
        <button name='9' onClick={handelClick} className='btn'>9</button>
        <button name='*' onClick={handelClick} className='btn-o'>x</button>
      </div>
      <div>
        <button name='5' onClick={handelClick} className='btn'>5</button>
        <button name='4' onClick={handelClick} className='btn'>4</button>
        <button name='6' onClick={handelClick} className='btn'>6</button>
        <button name='-' onClick={handelClick} className='btn-o'>-</button>
      </div>

      <div>
        <button name='1' onClick={handelClick} className='btn'>1</button>
        <button name='2' onClick={handelClick} className='btn'>2</button>
        <button name='3' onClick={handelClick} className='btn'>3</button>
        <button name='+' onClick={handelClick} className='btn-o'>+</button>
      </div>
      <div>
        <button name='0' onClick={handelClick} className='btn-z'>0</button>
        <button name='.' onClick={handelClick} className='btn'>.</button>
        <button onClick={calculate} className='btn-o'>=</button>
      </div>
    </div>

  );
}

export default App;
