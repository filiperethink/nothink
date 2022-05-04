import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getCollections } from "./services/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

getCollections();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
