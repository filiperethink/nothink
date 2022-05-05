import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";

import MDEditor from "@uiw/react-md-editor";
import { formatDate } from "../../utils";

export default function Content({ isFormOpen, notes, selectedId }) {
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
        <div className={styles.content__container}>
          <h1 className={styles.content__title}>Nenhuma nota selecionada</h1>
        </div>
      </div>
    );
  }
  console.log();
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <span className={styles.content_date}>
          {formatDate(note.created_at)}
        </span>
        <h1 className={styles.content__title}>{note.title}</h1>
        <MDEditor.Markdown source={note.description} />
      </div>
    </div>
  );
}
