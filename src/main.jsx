import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <AnimatePresence>
              <App />
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
