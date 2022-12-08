import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useActions } from 'hooks/useActions';
import { INote } from 'types/types';

import './Note.scss';

interface INoteProps {
  note: INote;
  title: string;
  description: string;
}

export function Note({ title, description, note }: INoteProps) {
  const { removeNote } = useActions();

  const handleclick = async (event: React.MouseEvent) => {
    event.preventDefault();
    if ((event.target as Element).closest('.note__delete')) {
      removeNote(note);
    }
  };

  return (
    <div className="note__container" onClick={handleclick}>
      <div className="note__header d-flex justify-content-between mb-1">
        <div className="note__title">{title}</div>
        <FontAwesomeIcon className="note__header-icon note__delete" icon={faClose} />
      </div>
      <div className="note__description">{description}</div>
    </div>
  );
}
