import {patch, post, remove, request, wait} from './api';
import {Announcement} from '../types/Announcement';

export const getAnnouncementsList = () => {
    return request('/posts');
};

export const getAnnouncementDetails = async (id: number) => {
    await wait(1000);

    return request(`/posts/${id}`);
};

export const addAnnouncement = (data: Omit<Announcement, 'createdAt' | 'id' | 'userId'>) => {
    return post('/posts', data);
};

export const editAnnouncement = (id: number, data: Pick<Announcement, 'title' | 'body'>) => {
    return patch(`/posts/${id}`, data);
};

export const removeAnnouncement = (id: number) => {
    return remove(`/posts/${id}`);
};
