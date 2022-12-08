import React from 'react';
import Container from 'react-bootstrap/Container';

import { NotesList } from 'components/notes-list/NotesList';
// import './Main.scss';

export function Main() {
  return (
    <Container>
      <h2 className="main__title">Main Page</h2>
      <NotesList />
    </Container>
  );
}
