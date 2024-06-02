import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    notes: [],
    changed: false
}

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        replaceNotes(state,action) {
            state.notes = action.payload;
            console.log(state.notes);
        },
        addNote(state,action) {
            state.changed = true;
            state.id = state.id + 1;
            state.notes = [...state.notes, action.payload];
            console.log(state.notes);
        },
        deleteNote(state,action) {
            state.changed = true;
            state.notes = state.notes.filter(note => {
                return note.id !== action.payload;
            })
        }
    }
});

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;