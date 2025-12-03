// src/core/App.js

import React from 'react';
import Home from '../pages/Home'; // Import trang chủ đã tích hợp của bạn
import './App.css';

// KHÔNG CẦN import Header/Footer ở đây vì chúng đã có trong Home.jsx

// Chúng ta sẽ biến App.js thành một component đơn giản chỉ render Trang chủ
function App() {
  return (
      <div className="App">
        {/* Home.jsx đã chứa Header, Footer và tất cả các Sections */}
        <Home />
      </div>
  );
}

// Thay đổi export thành default export nếu src/index.js của bạn dùng default
export default App;