import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainRouter } from './modules/navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
);
