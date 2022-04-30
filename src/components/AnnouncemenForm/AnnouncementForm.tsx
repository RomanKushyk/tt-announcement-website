import React, {ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState} from "react";
import {addAnnouncement, editAnnouncement} from "../../api/announcements";
import { AnnouncementsContext } from "../../AnnoncementsContext";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import "./AnnouncementForm.scss";

export const AnnouncementForm = () => {
  const {
    loadAnnouncements, selectedAnnouncementId, currentAnnouncement,
  } = useContext(AnnouncementsContext);
  const [announcementTitle, setAnnouncementTitle] = useState<string>('');
  const [announcementDescription, setAnnouncementDescription] = useState<string>('');
  const [hasTitleError, setHasTitleError] = useState<boolean>(false);
  const [hasDescriptionError, setHasDescriptionError] = useState<boolean>(false);
  const navigate = useNavigate();

  const loadCurrentAnnouncement = useCallback( (id: number) => {
    setAnnouncementTitle(currentAnnouncement?.title || '')
    setAnnouncementDescription(currentAnnouncement?.body || '')
  },[currentAnnouncement]);

  useEffect(() => {
    loadCurrentAnnouncement(selectedAnnouncementId);
  }, [loadCurrentAnnouncement, selectedAnnouncementId]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = event.target;

    switch (name) {
      case 'add-announcement-title-input':
        setAnnouncementTitle(value);
        break;

      case 'add-announcement-body-input':
        setAnnouncementDescription(value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setAnnouncementTitle('');
    setAnnouncementDescription('');
    setHasTitleError(false);
    setHasDescriptionError(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (announcementTitle && announcementDescription) {
      if (selectedAnnouncementId === 0) {
        await addAnnouncement({
          title: announcementTitle,
          body: announcementDescription,
        });

        navigate('/')
      } else {
        await editAnnouncement(selectedAnnouncementId, {
          title: announcementTitle,
          body: announcementDescription,
        })

        navigate('../');
        window.location.reload();
      }

      resetForm();
      loadAnnouncements();
    }

    if (!announcementTitle) {
      setHasTitleError(true);
    }

    if (!announcementDescription) {
      setHasDescriptionError(true);
    }
  };

  return (
    <form
      className="Announcements__add-form add-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="add-announcement-title-input"
        name="add-announcement-title-input"
        className={cn(
          'add-form__title-input',
          { 'input--error': hasTitleError }
        )}
        placeholder="Назва"
        value={announcementTitle}
        onChange={handleChange}
      />

      <textarea
        id="add-announcement-body-input"
        name="add-announcement-body-input"
        className={cn(
          'add-form__body-input',
          { 'input--error': hasDescriptionError }
        )}
        placeholder="Опис"
        value={announcementDescription}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="add-form__submit"
      >
        Додати
      </button>
    </form>
  );
}
