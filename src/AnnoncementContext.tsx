import {Announcement} from './types/Announcement';
import React, {createContext, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {getAnnouncementsList} from "./api/announcements";

interface AnnouncementContextInterface {
    announcements: Announcement[],
    setAnnouncements: Dispatch<SetStateAction<Announcement[]>>,
    loadAnnouncements: () => void | Promise<void>,
    announcementsIsLoading: boolean,
    setAnnouncementsIsLoading: Dispatch<SetStateAction<boolean>>,
    selectedAnnouncementId: number,
    setSelectedAnnouncementId: Dispatch<SetStateAction<number>>
    announcementsTitleQuery: string,
    setAnnouncementTitleQuery: Dispatch<SetStateAction<string>>,
}

export const AnnouncementsContext = createContext<AnnouncementContextInterface>({
    announcements: [],
    setAnnouncements: () => {},
    loadAnnouncements: () => {},
    announcementsIsLoading: false,
    setAnnouncementsIsLoading: () => {},
    selectedAnnouncementId: 0,
    setSelectedAnnouncementId: () => {},
    announcementsTitleQuery: '',
    setAnnouncementTitleQuery: () => {},
});

export const AnnouncementProvider: FC = ({ children }) => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [announcementsIsLoading, setAnnouncementsIsLoading] = useState<boolean>(false);
    const [selectedAnnouncementId, setSelectedAnnouncementId] = useState<number>(0);
    const [announcementsTitleQuery, setAnnouncementTitleQuery] = useState<string>('');

    const loadAnnouncements = async () => {
        setAnnouncementsIsLoading(true);

        const data = await getAnnouncementsList();

        setAnnouncements(data);
        setAnnouncementsIsLoading(false);
    };

    useEffect(() => {
        loadAnnouncements();
    }, [])

    const contextValue = {
        announcements,
        setAnnouncements,
        loadAnnouncements,
        announcementsIsLoading,
        setAnnouncementsIsLoading,
        selectedAnnouncementId,
        setSelectedAnnouncementId,
        announcementsTitleQuery,
        setAnnouncementTitleQuery,
    };

    return (
        <AnnouncementsContext.Provider value={contextValue}>
            {children}
        </AnnouncementsContext.Provider>
    );
};
