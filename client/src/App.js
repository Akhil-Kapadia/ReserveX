import React from "react";
import { Route, Routes } from "react-router";

// Routes
import Admin from "./routes/admin/admin";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </main>
  );
}

export default App;
