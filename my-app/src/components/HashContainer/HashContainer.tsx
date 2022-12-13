import React from 'react';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { IHash } from 'types/types';
import { useActions } from 'hooks/useActions';

import './HashContainer.scss';

export function HashContainer() {
  const { noteHashArr } = useTypedSelector((state) => state.noteHashArr);
  const { changeActive } = useActions();

  const changeActiveVisible = (hash: IHash) => {
    changeActive(hash);
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
