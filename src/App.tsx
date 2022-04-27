import React from 'react';

import './App.scss';

import {Loader} from "./components/Loader";
import {LoadingError} from "./components/LoadingError";
import {AnnouncementsSearchForm} from "./components/AnnouncementsSearchForm";
import {AnnouncementsList} from "./components/AnnouncemetsList";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">
          Announcements
        </h1>
      </header>
      <Outlet />

      <main>
        <div className="App__content">
          <div className="container">
            <AnnouncementsSearchForm/>
            <Loader/>
            <AnnouncementsList/>
            <LoadingError errorObject={'announcements'}/>
            list
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
