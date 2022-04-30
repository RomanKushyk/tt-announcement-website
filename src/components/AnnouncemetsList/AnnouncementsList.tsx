import {FC, useContext} from "react";
import {AnnouncementsContext} from "../../AnnoncementsContext";
import {AnnouncementListItem} from "../AnnouncementListItem";
import {Link, useNavigate} from "react-router-dom";

export const AnnouncementsList: FC = () => {
  const navigate = useNavigate();
  const {announcements} = useContext(AnnouncementsContext);
  console.log(announcements)

  return (
    <>
      <ul className="Announcements-list">
        {announcements.map(announcement => (
          <li
            key={announcement.id}
            className="Announcements-list__item"
            onClick={() => {
              navigate(`announcement-${announcement.id}`)
            }}
            >
            <AnnouncementListItem item={announcement} />
            <Link to={`announcement-${announcement.id}`}
          </li>
        ))}
      </ul>
    </>
  );
};
