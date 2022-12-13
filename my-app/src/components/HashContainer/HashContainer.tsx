import React from 'react';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { IHash } from 'types/types';
import { useActions } from 'hooks/useActions';

import './HashContainer.scss';

export function HashContainer() {
  const { noteHashArr } = useTypedSelector((state) => state.noteHashArr);
  const { changeActive, addFilterToString, deleteFilterFromString } = useActions();

  const changeActiveVisible = (hash: IHash) => {
    changeActive(hash);
    if (!hash.active) {
      addFilterToString(hash.hash.slice(1));
    } else {
      deleteFilterFromString(hash.hash.slice(1) + '&');
    }
  };

  return (
    <div className="hash__container">
      {noteHashArr?.map((el: IHash) => (
        <button
          type="button"
          className={el.active ? 'hash__btn btn-active' : 'hash__btn'}
          key={el.hash}
          onClick={() => {
            changeActiveVisible(el);
          }}
        >
          {el.hash}
        </button>
      ))}
    </div>
  );
}
