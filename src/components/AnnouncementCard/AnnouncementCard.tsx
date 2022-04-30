import {useLocation, useParams} from "react-router-dom";
import {getAnnouncementDetails} from "../../api/announcements";
import {useEffect, useState} from "react";
import {Announcement} from "../../types/Announcement";

export const AnnouncementCard = () => {
  const location = useLocation();
  const {announcementId} = useParams();
  const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | null>(null);
  const [currentIsLoading, setCurrentIsLoading] = useState<boolean>(false);

  const loadCurrent = async () => {
    setCurrentIsLoading(true)

    const current = await getAnnouncementDetails(Number(announcementId));

    setCurrentAnnouncement(current);
    setCurrentIsLoading(false);
  };

  useEffect(() => {
    loadCurrent();
  }, [announcementId, loadCurrent])

  return (
    <>
      123
    </>
  );
};
