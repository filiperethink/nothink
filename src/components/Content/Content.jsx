import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";

import MDEditor from "@uiw/react-md-editor";

export default function Content({ isFormOpen, notes, selectedId }) {
  const [note, setNote] = useState({ title: "", description: "" });

  useEffect(() => {
    setNote(notes.filter((n) => n.id === selectedId)[0]);
  }, [notes, selectedId]);

  if (!note) {
    return <div>Nenhuma nota selecionada</div>;
  }
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <h1 className={styles.content__title}>{note.title}</h1>
        <MDEditor.Markdown source={note.description} />
      </div>
    </div>
  );
}
