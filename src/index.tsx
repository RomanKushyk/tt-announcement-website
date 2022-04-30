import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import './index.scss';
import './styles/main.scss';

import {AnnouncementProvider} from "./AnnoncementsContext";
import {Modal} from "./components/Modal";
import {AnnouncementCard} from "./components/AnnouncementCard";
import {Announcement} from "./routes/Announcement";
import {LoadingError} from "./components/LoadingError";
import {AnnouncementAddForm} from "./components/AnnouncementAddForm";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AnnouncementProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Announcement/>}>
              <Route path="add-announcement" element={<Modal component={<AnnouncementAddForm />} />} />
            </Route>
            <Route path="announcement-:announcementId" element={<AnnouncementCard/>} />
            <Route path="*" element={<LoadingError errorObject={"page"} />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </AnnouncementProvider>
);
