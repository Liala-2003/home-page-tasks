

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode dir="rtl">
    <App />
  </StrictMode>,
)
