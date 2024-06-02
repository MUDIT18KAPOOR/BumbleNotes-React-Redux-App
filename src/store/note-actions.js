import { noteActions } from "./note-slice";

export const fetchNotesData = () => {
    return async (dispatch) => {
        const fetchNotes = async () => {
            const response = await fetch("https://notes-d3ad3-default-rtdb.firebaseio.com/notes.json");
            if(!response.ok){
                throw new Error("Fetching data failed!");
            }
            const data = response.json();
            return data;
        }
        try {
            const notes = await fetchNotes();
            dispatch(noteActions.replaceNotes(notes.notes || []));
        }catch(error) {
            console.log(error);
        }
    };
};

export const sendNotesData = (notes) => {
    return async () => {
        const sendNotes = async () => {
            const response = await fetch("https://notes-d3ad3-default-rtdb.firebaseio.com/notes.json", 
            {
                method: "PUT",
                body: JSON.stringify({
                    notes: notes
                })
            });
            if(!response.ok){
                throw new Error("Sending notes data failed!");
            }
        }
        try {
            await sendNotes();
        } catch(error) {
            console.log(error);
        }
    }
}