import React from 'react';
import classes from "./NoteItem.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { noteActions } from '../../store/note-slice';

function NoteItem(props) {
    const { id, title, content } = props;

    const dispatch = useDispatch();

    const deleteNoteHandler = () => {
        dispatch(noteActions.deleteNote(id));
    }

    return (
        <li id={id}>
            <Card class="note">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={deleteNoteHandler}><DeleteIcon /></button>
            </Card>
        </li>
    )
}

export default NoteItem