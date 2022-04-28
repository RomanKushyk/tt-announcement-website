import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import './index.scss';
import './styles/_variables.scss'
import './styles/general.scss'

import {AnnouncementProvider} from "./AnnoncementContext";
import {Modal} from "./components/Modal";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <AnnouncementProvider>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/add-announcement" element={<Modal />} />
            </Route>
          </Routes>
        </React.StrictMode>
      </AnnouncementProvider>
  </BrowserRouter>
);
