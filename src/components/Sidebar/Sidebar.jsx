import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Sidebar.module.css";

import Button from "../Button/Button";

export default function Sidebar({
  handleCreateNote,
  notes,
  isFetchingNotes,
  setSelectNote,
  selectedId,
}) {
  const handleClickNote = (id) => {
    setSelectNote(id);
  };

  return (
    <aside className={styles.aside}>
      <img src={logo} alt='Logo Nothink' className={styles.logo} />
      <Button title='Criar Nota' onClick={handleCreateNote} />
      {isFetchingNotes && (
        <span className={styles.isFetching}>Carregando notas...</span>
      )}
      <div className={styles.notes}>
        {notes.map((note, index) => {
          const isSelected = selectedId === note.id;
          return (
            <div
              onClick={() => handleClickNote(note.id)}
              key={note.id}
              className={isSelected ? styles.note__selected : styles.note}
            >
              <h3 className={styles.note__title}>{note.title}</h3>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
