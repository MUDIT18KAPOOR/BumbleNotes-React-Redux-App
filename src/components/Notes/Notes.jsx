import React from 'react';
import classes from "./Notes.module.css";
import NoteForm from './NoteForm';
import NoteItem from './NoteItem';
import { useSelector } from 'react-redux';

function Notes() {
  const notes = useSelector(state => state.notes);
  console.log(notes);
  return (
    <div className={classes.notes}>
      <NoteForm />
      <div className={classes.notes_list}>
        <ul>
          {notes.map((note) => {
            return <NoteItem  key={note.id} id={note.id} title={note.title} content={note.content} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Notes;