import React from 'react';
import { Route, Routes } from 'react-router';

// Routes
import Admin from './routes/admin/admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Admin />} />
    </Routes>
  );
}

export default App;
