import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";

import deleteIcon from "../../assets/trash.svg";
import editIcon from "../../assets/edit.svg";
import slashIcon from "../../assets/slash.svg";

import MDEditor from "@uiw/react-md-editor";
import { formatDate } from "../../utils";

export default function Content({
  isFormOpen,
  isFetchingNotes,
  notes,
  selectedId,
  deleteNote,
  editNote,
}) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    created_at: "",
  });

  useEffect(() => {
    setNote(notes.filter((n) => n.id === selectedId)[0]);
  }, [notes, selectedId]);

  if (!note) {
    return (
      <div className={styles.content}>
        <div className={styles.content__container_empty}>
          <img
            src={slashIcon}
            alt='Edit Note'
            className={styles.content_icon}
          />
          <h1 className={styles.content__empty}>Selecione ou Crie uma nota.</h1>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <span className={styles.content_date}>
          {formatDate(note.created_at)}
        </span>
        <h1 className={styles.content__title}>{note.title}</h1>
        <MDEditor.Markdown source={note.description} />
      </div>
      <div className={styles.content__actions}>
        <div
          onClick={editNote}
          className={styles.content__button + " " + styles.content__button_edit}
        >
          <p className={styles.content__button_text}>Editar</p>
          <img src={editIcon} alt='Edit Note' className={styles.content_icon} />
        </div>
        <div
          onClick={() => deleteNote(note.id)}
          className={
            styles.content__button + " " + styles.content__button_delete
          }
        >
          <p className={styles.content__button_text}>Delete</p>
          <img
            src={deleteIcon}
            alt='Delete Note'
            className={styles.content_icon}
          />
        </div>
      </div>
    </div>
  );
}
