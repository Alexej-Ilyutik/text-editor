import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { CreateEl } from 'types/types';

import './Note.scss';

export function Note({ title, description }: CreateEl) {
  return (
    <div className="note__container">
      <div className="note__header d-flex justify-content-between mb-1">
        <div className="note__title">{title}</div>
        <FontAwesomeIcon className="note__header-icon note__delete" icon={faClose} />
      </div>
      <div className="note__description">{description}</div>
    </div>
  );
}
