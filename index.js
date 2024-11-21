import React from 'react';
import ReactDOM from 'react-dom';
import Main from './MainPage/main'; // MainPage 폴더의 main.js 파일 import

ReactDOM.render(
    <React.StrictMode>
        <APP />
    </React.StrictMode>,
    document.getElementById('root') // public/index.html의 root에 렌더링
);
