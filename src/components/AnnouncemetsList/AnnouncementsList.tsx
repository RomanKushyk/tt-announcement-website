import {FC, useContext, useMemo} from "react";
import {AnnouncementsContext} from "../../AnnoncementsContext";
import {AnnouncementListItem} from "../AnnouncementListItem";
import {useNavigate, useSearchParams} from "react-router-dom";

export const AnnouncementsList: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {announcements} = useContext(AnnouncementsContext);
  let filter = searchParams.get('filter') || '';

  const visibleAnnouncements = useMemo(() => (
    announcements.filter(announcement =>
      announcement.title.toLowerCase().includes(filter.toLowerCase()))
  ), [announcements, filter]);

  return (
    <>
      {!visibleAnnouncements.length
        ? (<div>No announcement to show</div>)
        : (
          <ul className="AnnouncementsList">
            {visibleAnnouncements.map(announcement => (
              <li
                key={announcement.id}
                className="AnnouncementsList__item"
                onClick={() => {
                  navigate(`announcement-${announcement.id}`)
                }}
              >
                <AnnouncementListItem item={announcement} />
              </li>
            ))}
          </ul>
        )}
    </>
  );
};
