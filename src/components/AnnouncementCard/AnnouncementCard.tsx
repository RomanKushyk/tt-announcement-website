import {useNavigate, useParams, Outlet} from "react-router-dom";
import { getAnnouncementDetails } from "../../api/announcements";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Announcement } from "../../types/Announcement";
import { Loader } from "../Loader";
import { AnnouncementsContext } from "../../AnnoncementsContext";
import {findSimilarAnnouncementsIds, normalizedDate} from "../../helpers";

export const AnnouncementCard = () => {
  const [currentIsLoading, setCurrentIsLoading] = useState<boolean>(false);
  const [showSimilar, setShowSimilar] = useState<boolean>(false);
  const {announcements, setSelectedAnnouncementId, currentAnnouncement, setCurrentAnnouncement} = useContext(AnnouncementsContext);
  const {announcementId} = useParams();
  const navigate = useNavigate();

  const loadCurrent = useCallback(async () => {
    setCurrentIsLoading(true);
    setCurrentAnnouncement(null);

    const current = await getAnnouncementDetails(Number(announcementId));

    setCurrentAnnouncement(current);
    setCurrentIsLoading(false);
  }, [announcementId]);

  const similarAnnouncementsIds = useMemo(() => (
    currentAnnouncement
      ? findSimilarAnnouncementsIds(currentAnnouncement, announcements)
      : []
  ), [currentAnnouncement, announcements]);

  const getSimilarAnnouncements = (quantity: number) => {
    const result = [];

    for (let i = 0; i < quantity; i++) {
      result.push(
        announcements.find(announcement => announcement.id === similarAnnouncementsIds[i])
      );
    }

    return result;
  };

  useEffect(() => {
    loadCurrent();
  }, [announcementId, loadCurrent])

  return (
    <>
      {currentIsLoading && <Loader/>}
      {!!currentAnnouncement && (
        <div className="AnnouncementCard">
          <div className="AnnouncementCard__header">
            <h4 className="AnnouncementCard__title">{currentAnnouncement.title}</h4>

            <button
              type="button"
              className="AnnouncementCard__edit-button"
              onClick={() => {
                setSelectedAnnouncementId(currentAnnouncement?.id)
                navigate(`./edit`)
              }}
            >
              Редагувати
            </button>
          </div>

          <p className="AnnouncementCard__description">
            {currentAnnouncement.body}
          </p>

          <p className="AnnouncementCard__date">
            {normalizedDate(currentAnnouncement.createdAt)}
          </p>

          <button
            type="button"
            className="AnnouncementCard__show-button"
            onClick={() => {
              setShowSimilar(!showSimilar)
            }}
          >
            {
              showSimilar
                ? 'Сховати схожі'
                : 'Показати схожі'
            }
          </button>

          {showSimilar && (
            <div className="AnnouncementCard__similar">
              {getSimilarAnnouncements(2).map(el => (
                <div
                  key={el?.id}
                  onClick={() => {
                    navigate(`../announcement-${el?.id}`)
                  }}
                >
                  {el?.title}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Outlet/>
    </>
  );
};
