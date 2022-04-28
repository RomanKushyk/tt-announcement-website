import React from 'react';

import './App.scss';

import {Loader} from "./components/Loader";
import {LoadingError} from "./components/LoadingError";
import {AnnouncementsSearchForm} from "./components/AnnouncementsSearchForm";
import {AnnouncementsList} from "./components/AnnouncemetsList";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {AnnouncementAddForm} from "./components/AnnouncementAddForm";
import {Modal} from "./components/Modal";

const App = () => {
  const navigate = useNavigate();
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

            <button
              type="button"
              className=""
              onClick={() => {
                navigate('/add-announcement')
              }}
            >Add new</button>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
