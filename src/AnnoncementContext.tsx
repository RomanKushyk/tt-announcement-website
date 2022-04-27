import {Announcement} from './types/Announcement';
import React, {createContext, Dispatch, FC, SetStateAction, useState} from 'react';

interface AnnouncementContextInterface {
    announcements: Announcement[],
    setAnnouncements: Dispatch<SetStateAction<Announcement[]>>,
    announcementsIsLoading: boolean,
    setAnnouncementsIsLoading: Dispatch<SetStateAction<Boolean>>,
    selectedAnnouncementId: number,
    setSelectedAnnouncementId: Dispatch<SetStateAction<number>>
}

export const AnnouncementsContext = createContext<AnnouncementContextInterface>({
    announcements: [],
    setAnnouncements: () => {},
    announcementsIsLoading: false,
    setAnnouncementsIsLoading: () => {},
    selectedAnnouncementId: 0,
    setSelectedAnnouncementId: () => {},
});

export const AnnouncementProvider: FC = ({ children }) => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [announcementsIsLoading, setAnnouncementsIsLoading] = useState<boolean>(false);
    const [selectedAnnouncementId, setSelectedAnnouncementId] = useState<number>(0);

    const loadAnnouncements = async () => {
        setAnnouncementsIsLoading(true);

        const data = await get
    };

    const contextValue = {
        announcements,
        setAnnouncements,
        announcementsIsLoading,
        setAnnouncementsIsLoading,
        selectedAnnouncementId,
        setSelectedAnnouncementId,
    };

    return (
        <AnnouncementsContext.Provider value={contextValue}>
            {children}
        </AnnouncementsContext.Provider>
    );
};
