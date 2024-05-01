import logo from './logo.svg';

import React, { useState } from 'react';

function App() {
  // State để lưu trữ màu của ô vuông
  const [squareColor, setSquareColor] = useState('black');

  // Hàm để thay đổi màu của ô vuông
  const changeColor = () => {
    // Tạo một mảng các màu
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    // Chọn một màu ngẫu nhiên từ mảng
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Cập nhật màu của ô vuông
    setSquareColor(randomColor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Change Color</p>
        {/* Ô vuông có thể thay đổi màu */}
        <div
          className="Square"
          style={{ width: '1000px', height: '400px', backgroundColor: squareColor }}
        ></div>
        {/* Nút để thay đổi màu */}
        <button onClick={changeColor}>Change Color</button>
        
      </header>
    </div>
  );
}

export default App;
