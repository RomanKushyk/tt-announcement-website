import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import './index.scss';
import {AnnouncementProvider} from "./AnnoncementContext";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <AnnouncementProvider>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </React.StrictMode>
      </AnnouncementProvider>
  </BrowserRouter>
);
