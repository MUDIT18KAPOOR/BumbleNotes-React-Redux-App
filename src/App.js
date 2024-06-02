import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotesData, sendNotesData } from './store/note-actions';

import Header from './components/Header/Header';
import Notes from './components/Notes/Notes';
import store from './store';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const changed = useSelector(state => state.changed);

  useEffect(()=>{
    dispatch(fetchNotesData());
  },[dispatch]);

  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return;
    }
    if(changed) {
      dispatch(sendNotesData(notes));
    }
  },[notes, dispatch]);

  return (
    <Fragment>
      <Header />
      <Notes />
    </Fragment>
  )
}

export default App