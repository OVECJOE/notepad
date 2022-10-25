import React, { createContext, useReducer, useEffect, useState } from 'react';

export const NotesContext = createContext();

// interface 
const NotesContextProvider = () => {
    const [allNotes, dispatch] = useState(
      JSON.parse(localStorage.getItem('allNotes')) ?? []
    )

    useEffect(() => {
        localStorage.setItem('allNotes', JSON.stringify(allNotes));
    }, [allNotes])

    return (
        <NotesContext.Provider value={{allNotes, dispatch}}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesContextProvider;