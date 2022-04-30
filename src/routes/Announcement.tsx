import {AnnouncementsSearchForm} from "../components/AnnouncementsSearchForm";
import React, {useContext} from "react";
import {AnnouncementsContext} from "../AnnoncementsContext";
import {useNavigate, Outlet} from "react-router-dom";
import {Loader} from "../components/Loader";
import {AnnouncementsList} from "../components/AnnouncemetsList";
import {LoadingError} from "../components/LoadingError";

export const Announcement = () => {
  const {announcementsIsLoading, announcements, setSelectedAnnouncementId} = useContext(AnnouncementsContext);
  const navigate = useNavigate();

  const showList = () => {
    if (announcementsIsLoading) {
      return <Loader/>;
    } else if (announcements.length) {
      return <AnnouncementsList/>
    }

    return <LoadingError errorObject={'announcements'}/>;
  };

  return (
      <>
        <div className="announcements__header">
          <AnnouncementsSearchForm/>

          <button
            type="button"
            className="announcements__button"
            onClick={() => {
              setSelectedAnnouncementId(0);
              navigate('/add-announcement');
            }}
          >
            Add new
          </button>
        </div>

        {showList()}

        <Outlet/>
      </>
  );
};
