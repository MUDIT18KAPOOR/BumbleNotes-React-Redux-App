import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./note-slice";

const store = configureStore({
    reducer: noteReducer
});

export default store;