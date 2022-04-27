import {Announcement} from "../../types/Announcement";
import {FC, memo, useContext} from "react";
import {removeAnnouncement} from "../../api/announcements";
import {AnnouncementsContext} from "../../AnnoncementContext";

interface Props {
  item: Announcement,
}

export const AnnouncementListItem: FC<Props> = memo(({ item }) => {
  const {loadAnnouncements} = useContext(AnnouncementsContext);
  const handleDeleteAnnouncement = async (id: number) => {
    await removeAnnouncement(id);
    loadAnnouncements();
  };

  return (
    <div>
      {item.title}
      {' - '}
      {item.createdAt}
      <button
        type="button"
        className="Announcements-list__button button button--delete"
        onClick={() => {
          handleDeleteAnnouncement(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
});
