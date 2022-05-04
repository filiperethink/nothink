import React from "react";
import styles from "./Button.module.css";
import addIcon from "../../assets/add.svg";

export default function Button({ onClick, title, type = "success" }) {
  const getColor = () => {
    let color = "";
    switch (type) {
      case "blocked":
        color = styles.btn__container_blocked;
        break;
      case "success":
        color = styles.btn__container_success;
        break;
      case "basic":
        color = styles.btn__container_basic;
        break;
      case "info":
        color = styles.btn__container_info;
        break;
      default:
        color = styles.btn__container_success;
        break;
    }
    return color;
  };
  return (
    <button
      className={getColor()}
      onClick={type === "blocked" ? null : onClick}
    >
      {title}
      {type === "success" && (
        <img src={addIcon} alt='Add Note' className={styles.addIcon} />
      )}
    </button>
  );
}
