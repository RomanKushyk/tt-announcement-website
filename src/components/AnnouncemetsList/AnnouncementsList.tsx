import {FC, useContext} from "react";
import {AnnouncementsContext} from "../../AnnoncementsContext";
import {AnnouncementListItem} from "../AnnouncementListItem";

export const AnnouncementsList: FC = () => {
  const {announcements} = useContext(AnnouncementsContext);
  console.log(announcements)

  return (
    <>
      <ul className="Announcements-list">
        {announcements.map(announcement => (
          <li
            key={announcement.id}
            className="Announcements-list__item"
            >
            <AnnouncementListItem item={announcement} />
          </li>
        ))}
      </ul>
    </>
  );
};
