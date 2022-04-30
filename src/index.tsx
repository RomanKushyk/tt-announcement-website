import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, HashRouter} from 'react-router-dom';
import App from './App';

import './index.scss';
import './styles/main.scss';

import {AnnouncementProvider} from "./AnnoncementsContext";
import {Modal} from "./components/Modal";
import {AnnouncementCard} from "./components/AnnouncementCard";
import {Announcement} from "./routes/Announcement";
import {LoadingError} from "./components/LoadingError";
import {AnnouncementForm} from "./components/AnnouncemenForm";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AnnouncementProvider>
    <HashRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Announcement/>}>
              <Route path="add-announcement" element={<Modal component={<AnnouncementForm/>} />} />
            </Route>
            <Route path="announcement-:announcementId" element={<AnnouncementCard/>}>
              <Route path="edit" element={<Modal component={<AnnouncementForm/>} />} />
            </Route>
            <Route path="*" element={<LoadingError errorObject={"page"} />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </HashRouter>
  </AnnouncementProvider>
);
