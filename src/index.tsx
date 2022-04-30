import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import './index.scss';
import './styles/main.scss';

import {AnnouncementProvider} from "./AnnoncementsContext";
import {Modal} from "./components/Modal";
import {AnnouncementsList} from "./components/AnnouncemetsList";
import {AnnouncementCard} from "./components/AnnouncementCard";
import {AnnouncementListItem} from "./components/AnnouncementListItem";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <AnnouncementProvider>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="add-announcement" element={<Modal/>} />
              <Route path="announcement-:announcementId" element={<AnnouncementCard/>} />

              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </React.StrictMode>
      </AnnouncementProvider>
  </BrowserRouter>
);
