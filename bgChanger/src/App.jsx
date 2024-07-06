import React, { useState } from 'react';

function App() {
  const [color, changeColor] = useState("olive");

  function changeColorFunc(xyz) {
    changeColor(xyz);
  }

  return (
    <div
      className='w-full h-screen duration-200'
      style={{
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div className='flex rounded-full justify-between p-2' style={{ backgroundColor: 'whitesmoke', gap: '10px' }}>
        <button className='rounded-full' style={{
          padding: '5px',
          backgroundColor: 'red',
          color: 'black',
          border: 'none',
        }} onClick={() => changeColorFunc('red')}>red</button>

        <button className='rounded-full' style={{
          padding: '5px',
          backgroundColor: 'blue',
          color: 'black',
          border: 'none'
        }} onClick={() => changeColorFunc('blue')}>blue</button>

        <button className='rounded-full' style={{
          padding: '5px',
          backgroundColor: 'orange',
          color: 'black',
          border: 'none'
        }} onClick={() => changeColorFunc('orange')}>orange</button>

        <button className='rounded-full' style={{
          padding: '5px',
          backgroundColor: 'green',
          color: 'black',
          border: 'none'
        }} onClick={() => changeColorFunc('green')}>green</button>

        <button className='rounded-full' style={{
          padding: '5px',
          backgroundColor: 'purple',
          color: 'black',
          border: 'none'
        }} onClick={() => changeColorFunc('purple')}>purple</button>
      </div>
    </div>
  );
}

export default App;
