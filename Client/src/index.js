import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.scss';
import App from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme/index';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

library.add(fas, fab, faTwitter, faFontAwesome);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
