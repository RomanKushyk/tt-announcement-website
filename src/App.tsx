import React, { FC } from 'react';

import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <header className="App__header">
          <h1 className="App__title">
            Announcements
          </h1>
        </header>

        <main>
          <section className="App__section announcements">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
