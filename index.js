import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './MainPage/main'; // MainPage 폴더의 main.js 파일 import

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트를 렌더링 */}
  </React.StrictMode>
);
