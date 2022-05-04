// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

export const db = getFirestore(app);

const getCollections = async (collectionName = "notes") => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};
export { app, getCollections };
