import React, {FC} from "react";
import {AnnouncementAddForm} from "../AnnouncementAddForm";

import './Modal.scss';
import {useNavigate} from "react-router-dom";

export const Modal: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Modal"
      onClick={() => {
        navigate('/')
      }}
    >
      <div
        className="Modal__content"
        onClick={event => event.stopPropagation()}
      >
        <div className="Modal__body">
          <AnnouncementAddForm/>
        </div>
      </div>
    </div>
  );
};
