import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Note } from 'components/note/Note';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ModalCreateEl } from 'components/ModalCreateEl/ModalCreateEl';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { INote } from 'types/types';

import './NotesList.scss';

export function NotesList() {
  const { noteList } = useTypedSelector((state) => state.noteList);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  const handleCloseNewTaskModal = () => {
    setIsNewTaskModalOpen(!isNewTaskModalOpen);
  };

  return (
    <div className="notes__container">
      <div className="notes__list">
        <div className="notes__list-header d-flex align-items-center justify-content-between">
          <h3 className="notes__list-title">List of notes:</h3>
        </div>
        <div className="notes__list-container">
          {JSON.parse(noteList).map((note: INote) => (
            <Note key={note.id} title={note.title} description={note.description} />
          ))}
        </div>
        <div
          className="notes__list-footer"
          onClick={() => {
            setIsNewTaskModalOpen(true);
          }}
        >
          <FontAwesomeIcon className="mr-1" icon={faPlus} size="xs" />
          Add Note
        </div>
      </div>
      <ModalWindow show={isNewTaskModalOpen} onHide={handleCloseNewTaskModal} title="New Note">
        <ModalCreateEl
          title="Name of Note"
          description="Add description"
          onHideModal={handleCloseNewTaskModal}
        />
      </ModalWindow>
    </div>
  );
}
