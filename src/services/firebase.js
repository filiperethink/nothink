// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";
import { generateNoteId } from "../utils";

const firebaseConfig = {
  apiKey: "AIzaSyDBqW_YxpK1ZgDDSUqq7vA0JEa9a1vzbUk",
  authDomain: "nothink-f25fa.firebaseapp.com",
  projectId: "nothink-f25fa",
  storageBucket: "nothink-f25fa.appspot.com",
  messagingSenderId: "33171974666",
  appId: "1:33171974666:web:73aa4d5eebd9d401284df3",
  measurementId: "G-0QMC61SFDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getNotes = async (collectionName = "notes") => {
  const response = await getDocs(collection(db, collectionName));
  return response.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
};

const createNote = async (note) => {
  const id = generateNoteId();
  await setDoc(doc(db, "notes", id), {
    title: note.title,
    description: note.description,
    created_at: Date.now(),
  });
};

export { getNotes, createNote };
