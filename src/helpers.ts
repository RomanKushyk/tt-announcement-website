import {Announcement} from "./types/Announcement";

export const splitAnnouncement = (announcement: Announcement) => ({
  id: announcement.id,
  title: announcement.title.split(/[,.\s]/),
  description: announcement.body.split(/[,.\s]/),
});

export const getNumberOfSimilarWord = (arr1: string[], arr2: string[]) => (
  arr1.filter(word => arr2.includes(word)).length
);

export const findSimilarAnnouncementsIds = (current: Announcement, all: Announcement[]) => {
  const splitCurrent = splitAnnouncement(current);
  const splitAnnouncements = all
    .map(announcement => splitAnnouncement(announcement))
    .filter(announcement => announcement.id !== current.id);

  const similarAnnouncements = splitAnnouncements.map(announcement => ({
    id: announcement.id,
    inTitle: getNumberOfSimilarWord(announcement.title, splitCurrent.description),
    inDescription: getNumberOfSimilarWord(announcement.description, splitCurrent.description),
  }));

  return similarAnnouncements.sort((a, b) => (
    (b.inTitle + b.inDescription) - (a.inTitle + a.inDescription)
  )).map(announcement => announcement.id);
};

export const normalizedDate = (date: string) => date.split(/[TZ.]/g).slice(0, 2).join(' ');
