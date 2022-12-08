import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Note } from 'components/note/Note';

import './NotesList.scss';

export function NotesList() {
  return (
    <div className="notes__container">
      <div className="notes__list">
        <div className="notes__list-header d-flex align-items-center justify-content-between">
          <h3 className="notes__list-title">List of notes:</h3>
        </div>
        <div className="notes__list-container">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
        <div className="notes__list-footer">
          <FontAwesomeIcon className="mr-1" icon={faPlus} size="xs" />
          Add Note
        </div>
      </div>
    </div>
  );
}
