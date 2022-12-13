import React from 'react';
import Container from 'react-bootstrap/Container';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { NotesList } from 'components/notes-list/NotesList';
import { HashContainer } from 'components/HashContainer/HashContainer';

export function Main() {
  const { noteHashArr } = useTypedSelector((state) => state.noteHashArr);
  return (
    <Container>
      <h2 className="main__title">Main Page</h2>
      <NotesList />
      {noteHashArr.length > 0 && <HashContainer />}
    </Container>
  );
}
