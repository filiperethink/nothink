import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";

import Button from "../Button/Button";

import styles from "./Form.module.css";
export default function Form({ onCancel, onSubmit }) {
  const [description, setValue] = useState("");
  const [title, setTitle] = useState("");

  const editorConfig = {
    preview: "edit",
    height: "400",
    visiableDragbar: false,
    textareaProps: {
      placeholder: "Por favor insira seu texto aqui",
    },
  };

  const handleSubmit = () => {
    onSubmit({ title, description });
    setValue("");
    setTitle("");
  };

  const canSubmit = title && description;
  return (
    <div className={styles.form__container}>
      <h1 className={styles.form__heading}>
        Personalize sua nota com Markdown
      </h1>
      <input
        className={styles.form__input}
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Insira o titulo para essa nota'
      />
      <div className={styles.form__editor}>
        <MDEditor {...editorConfig} value={description} onChange={setValue} />
      </div>
      <div className={styles.form__actions}>
        <Button title='Cancelar' type='info' onClick={onCancel} />
        <Button
          title='Salvar nota'
          type={canSubmit ? "basic" : "blocked"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
