import React, {FC, useContext} from "react";
import {AnnouncementsContext} from "../../AnnoncementContext";

import './AnnouncementsSearcForm.scss';

export const AnnouncementsSearchForm: FC = () => {
  const {announcementsTitleQuery, setAnnouncementTitleQuery} = useContext(AnnouncementsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;

    setAnnouncementTitleQuery(value);
  };

  return (
    <div className="Announcements__search-form-container">
      <form className="Announcements__search-form search-form">
        <input
          type="text"
          id="announcement-title-input"
          name="announcement-title-input"
          className="search-form__title-input"
          placeholder="Введіть назву"
          value={announcementsTitleQuery}
          onChange={handleChange}
        />

        <button
          type="button"
          className="search-form__button search-form__button--add-new"
          onClick={() => {}}
        >
         Add new
        </button>
      </form>
    </div>
  );
};
