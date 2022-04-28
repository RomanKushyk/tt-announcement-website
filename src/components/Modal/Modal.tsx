import React, {FC} from "react";
import {AnnouncementAddForm} from "../AnnouncementAddForm";

import './Modal.scss';
import {useNavigate} from "react-router-dom";

export const Modal: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="Modal">
      <div className="Modal__content">

        <div className="Modal__body">
          <AnnouncementAddForm/>
        </div>

        <div className="Modal__footer">
          <button
            className="Modal__close"
            onClick={() => {
              navigate("/")
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
