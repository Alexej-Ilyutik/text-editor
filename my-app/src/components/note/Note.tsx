import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPencil, faLeftLong, faCheck } from '@fortawesome/free-solid-svg-icons';

import { useActions } from 'hooks/useActions';
import { INote } from 'types/types';

import './Note.scss';

interface INoteProps {
  note: INote;
  title: string;
  description: string;
}

export function Note({ title, description, note }: INoteProps) {
  const { removeNote, changeTitle } = useActions();
  const [isEditNote, setIsEditNote] = useState(false);

  const handleclick = async (event: React.MouseEvent) => {
    const eTarget = event.target as Element;
    if (eTarget.closest('.note__delete')) {
      removeNote(note);
    } else if (eTarget.closest('.note__correct')) {
      changeTitle({ id: note.id, title: 'alex', description: note.description });
      console.log('ff');
    }
  };

  const changeEditMode = () => {
    setIsEditNote(!isEditNote);
  };

  const updateValue = () => {
    // const body: createColumnApi = {
    //   title: inputRef.current.value,
    //   order: props.data.order,
    // };
    // updateColumn({ boardId: props.projectId, columnId: props.data._id, body: body });
    // setTitle(inputRef.current.value);
    changeEditMode();
  };

  return (
    <div className="note__container" onClick={handleclick}>
      <div className="note__header d-flex justify-content-between mb-1">
        {isEditNote ? (
          <div className="note__title-container">
            <input
              className="note__header-input"
              type="text"
              defaultValue={title}
              // ref={inputRef}
            />
            <button className="note__header-btn btn" onClick={changeEditMode}>
              <FontAwesomeIcon className="btn-icon note__back" icon={faLeftLong} />
            </button>
            <button className="note__header-btn btn" onClick={updateValue}>
              <FontAwesomeIcon className="btn-icon note__check" icon={faCheck} />
            </button>
          </div>
        ) : (
          <div className="note__title-container">
            <div className="note__title" onClick={changeEditMode}>
              {title}
            </div>
            <FontAwesomeIcon className="note__header-icon note__correct" icon={faPencil} />
          </div>
        )}
        <FontAwesomeIcon className="note__header-icon note__delete" icon={faClose} size="xl" />
      </div>
      <div className="note__description">{description}</div>
    </div>
  );
}
