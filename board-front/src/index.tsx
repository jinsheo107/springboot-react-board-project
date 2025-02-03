import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* BrowserRouter는 HTML5의 History API를 활용하여 브라우저의 주소를 동적으로 변경 */}
    {/* React 애플리케이션에서 경로별로 다른 Component를 Rendering */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
