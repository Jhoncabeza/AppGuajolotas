import React from 'react';
import ReactDOM from 'react-dom';
import AppLinks from './Components/AppLinks';
import { createGlobalStyle } from 'styled-components';

const GlobalEstilos = createGlobalStyle`
  *{
    margin: 3px;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
  body{
    background-color:#F2F2F2;
  }
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalEstilos/>
    <AppLinks/>
  </React.StrictMode>,
  document.getElementById('root')
);