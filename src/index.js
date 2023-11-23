import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //./App(.js 생략된 형태)
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //idex.html의 root를 복사해와서 렌더링함.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
