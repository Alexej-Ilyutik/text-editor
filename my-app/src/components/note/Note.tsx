import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPencil, faLeftLong, faCheck } from '@fortawesome/free-solid-svg-icons';

import { INote } from 'types/types';
import { useDeleteNoteMutation, useUpdateNoteMutation } from 'store/notesListApi/notesListApi';

import './Note.scss';

interface INoteProps {
  note: INote;
  title: string;
  description: string;
}

export function Note({ title, description, note }: INoteProps) {
  const [deleteNote] = useDeleteNoteMutation();
  const [changeTitle] = useUpdateNoteMutation();

  const [isEditNote, setIsEditNote] = useState(false);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleclick = async (event: React.MouseEvent) => {
    const eTarget = event.target as Element;
    if (eTarget.closest('.note__delete')) {
      deleteNote(note.id);
    }
  };

  const changeEditMode = () => {
    setIsEditNote(!isEditNote);
  };

  const updateValue = () => {
    changeTitle({ id: note.id, title: inputRef.current.value, description: note.description });
    changeEditMode();
  };

  return (
    <div className="note__container" onClick={handleclick}>
      <div className="note__header d-flex justify-content-between mb-1">
        {isEditNote ? (
          <div className="note__title-container">
            <input className="note__header-input" type="text" defaultValue={title} ref={inputRef} />
            <button className="note__header-btn btn" onClick={changeEditMode}>
              <FontAwesomeIcon className="btn-icon note__back" icon={faLeftLong} />
            </button>
            <button className="note__header-btn btn" onClick={updateValue}>
              <FontAwesomeIcon className="btn-icon note__check" icon={faCheck} />
            </button>
          </div>
        ) : (
          <div className="note__title-container" onClick={changeEditMode}>
            <div className="note__title">{title}</div>
            <FontAwesomeIcon className="note__header-icon note__correct" icon={faPencil} />
          </div>
        )}
        <FontAwesomeIcon className="note__header-icon note__delete" icon={faClose} size="xl" />
      </div>
      <div className="note__description">{description}</div>
    </div>
  );
}
