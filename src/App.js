import { useEffect, useState } from "react";

import styles from "./App.module.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";

import { createNote, getNotes } from "./services/firebase";

function App() {
  const [isFormOpen, toggleForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isFetchingNotes, setFetchingNotes] = useState(false);
  const [selectedId, setSelectNote] = useState(0);

  const handleSubmit = async (note) => {
    createNote({ title: note.title, description: note.description });
    toggleForm(false);
    fetchData();
  };

  const renderForm = () => {
    return <Form onCancel={() => toggleForm(false)} onSubmit={handleSubmit} />;
  };

  const renderContent = (notes) => {
    return (
      <Content isFormOpen={isFormOpen} notes={notes} selectedId={selectedId} />
    );
  };

  async function fetchData() {
    setFetchingNotes(true);
    const notes = await getNotes();
    setNotes(notes);
    setFetchingNotes(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar
        isFetchingNotes={isFetchingNotes}
        handleCreateNote={() => toggleForm(!isFormOpen)}
        notes={notes}
        setSelectNote={setSelectNote}
        selectedId={selectedId}
      />
      {isFormOpen ? renderForm() : renderContent(notes)}
    </div>
  );
}

export default App;
