import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPencil, faLeftLong, faCheck } from '@fortawesome/free-solid-svg-icons';

import { INote } from 'types/types';
import { useActions } from 'hooks/useActions';
// import { useTypedSelector } from 'hooks/useTypedSelector';
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
  const { addHashToArr } = useActions();

  const [isEditNote, setIsEditNote] = useState(false);
  // const [highlighted, setHighlighted] = useState('');
  // const [text, setText] = useState(description);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleclick = (event: React.MouseEvent) => {
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

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const eTarget = e.target as HTMLInputElement;
    const currentText = eTarget.textContent;
    const highlighted = currentText?.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    if (highlighted) {
      eTarget.innerHTML = highlighted;
    }
    placeCaretAtEnd(eTarget);
  };

  const placeCaretAtEnd = (el: HTMLElement) => {
    const target = document.createTextNode('');
    el.appendChild(target);
    const isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
      const sel = window.getSelection();
      if (sel !== null) {
        const range = document.createRange();
        range.setStart(target, target.nodeValue.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (el instanceof HTMLElement) el.focus();
    }
  };

  const getNoteText = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    const arr = e.target.textContent?.replace(/\s+/g, ' ').trim().split(' ');
    const arrOfHash = arr?.filter((word) => word.startsWith('#'));
    if (arrOfHash) {
      arrOfHash.forEach((hashEl) => {
        addHashToArr({
          hash: hashEl,
          active: false,
        });
      });
    }
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
          <div className="note__text-container" onClick={changeEditMode}>
            <div className="note__title">{title}</div>
            <FontAwesomeIcon className="note__header-icon note__correct" icon={faPencil} />
          </div>
        )}
        <FontAwesomeIcon className="note__header-icon note__delete" icon={faClose} size="xl" />
      </div>
      <div className="note__text-container">
        <div
          className="note__description"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onKeyUp={handleChange}
          onBlur={getNoteText}
        >
          {description}
        </div>
        <FontAwesomeIcon className="note__header-icon note__correct" icon={faPencil} />
      </div>
    </div>
  );
}
