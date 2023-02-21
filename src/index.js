import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { GlobalStyle, theme } from "styles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);
