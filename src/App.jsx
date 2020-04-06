import React from 'react';
import './App.css'
import { render } from '@testing-library/react';

export default function App() {
  render(
    <div>
      <div className="HI">
        <h1>왜 왔어</h1>
        <span>다시 가</span>
      </div>
      <div className="Bye">
        <h1>왜 갔어</h1>
        <span>다시 와</span>
      </div>
      <div className="goTo">
        <h1>맨위로 올라가</h1>
      </div>
    </div>
  )
}

//ctrl+k => ctrl+f
//폰트 뭐씁니까 consolas?