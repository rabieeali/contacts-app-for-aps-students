import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import { ThemeProvider, createTheme, colors } from '@mui/material';

import { Provider } from 'react-redux';
import { store } from './redux/store'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blueGrey['900'],
    },
    secondary: {
      main: colors.orange['800'],
    }
  }
})


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/*'  element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
