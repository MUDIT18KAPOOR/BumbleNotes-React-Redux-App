import React, { useRef } from 'react';
import classes from "./NoteForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { noteActions } from '../../store/note-slice';

function NoteForm() {
  const titleRef = useRef();
  const contentRef = useRef();

  const dispatch = useDispatch();

  const id = useSelector(state => state.id);

  const addNoteHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    dispatch(noteActions.addNote({id, title, content}));
    titleRef.current.value = "";
    contentRef.current.value = "";
  }

  return (
    <div className={classes.form}>
        <form onSubmit={addNoteHandler}>
            <input ref={titleRef} type="text" placeholder="Title" />
            <textarea ref={contentRef} placeholder="Write something... " rows="3" />
            <button>+</button>
        </form>
    </div>
  )
}

export default NoteForm