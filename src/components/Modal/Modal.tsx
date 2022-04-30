import React, {FC} from "react";

import './Modal.scss';
import {useNavigate} from "react-router-dom";

interface Props {
  component: JSX.Element,
}

export const Modal: FC<Props> = ({
  component
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="Modal"
      onClick={() => {
        navigate('../')
      }}
    >
      <div
        className="Modal__content"
        onClick={event => event.stopPropagation()}
      >
        <div className="Modal__body">
          {component}
        </div>
      </div>
    </div>
  );
};
