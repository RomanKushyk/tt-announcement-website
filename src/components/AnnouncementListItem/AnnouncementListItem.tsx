import {Announcement} from "../../types/Announcement";
import {FC, memo, useCallback, useContext} from "react";
import {removeAnnouncement} from "../../api/announcements";
import {AnnouncementsContext} from "../../AnnoncementsContext";
import {normalizedDate} from "../../helpers";

interface Props {
  item: Announcement,
}

export const AnnouncementListItem: FC<Props> = memo(({ item }) => {
  const {loadAnnouncements} = useContext(AnnouncementsContext);
  const handleDeleteAnnouncement = useCallback(async (id: number) => {
    await removeAnnouncement(id);
    loadAnnouncements();
  }, [loadAnnouncements]);

  return (
    <>
      <div className="AnnouncementsList__content">
        <h4 className="AnnouncementsList__title">
          {item.title}
        </h4>

        <p className="AnnouncementsList__description">
          {normalizedDate(item.createdAt)}
        </p>
      </div>

      <button
        type="button"
        className="AnnouncementsList__button"
        onClick={(event) => {
          event.stopPropagation()
          handleDeleteAnnouncement(item.id);
        }}
      >
        Delete
      </button>
    </>
  );
});
