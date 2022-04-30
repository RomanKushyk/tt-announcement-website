import React from 'react';

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

      <main className="App__content content">
        <section className="App__section announcements">
          <div className="container">
            <div className="announcements__header">
              <AnnouncementsSearchForm/>
              <button
                type="button"
                className="announcement__button announcement__button--add-new"
                onClick={() => {
                  navigate('/add-announcement')
                }}
              >Add new</button>
            </div>

            <Loader/>
            <AnnouncementsList/>
            <LoadingError errorObject={'announcements'}/>
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
