import React, {ChangeEvent, FC, useContext} from "react";
import {AnnouncementsContext} from "../../AnnoncementsContext";

import './AnnouncementsSearcForm.scss';
import {useSearchParams} from "react-router-dom";

export const AnnouncementsSearchForm: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let filter = searchParams.get('filter') || '';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchParams(
      value
        ? { filter: value }
        : {}
    )
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
          value={filter}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
