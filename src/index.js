import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import InterfaceMain from './pages/interface-main/interface-main';
import { GlobalStyled } from './styled.global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <InterfaceMain />
  </React.StrictMode>
);

reportWebVitals();
