import React, {FC, useContext} from "react";
import {AnnouncementsContext} from "../../AnnoncementsContext";

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
      </form>
    </div>
  );
};
