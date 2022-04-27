import React from 'react';

import './LoadingError.scss';

interface Props {
  errorObject: string,
}

export const LoadingError: React.FC<Props> = ({ errorObject }) => (
  <div className="LoadingError">
    An error occurred when loading {errorObject}!
  </div>
);
