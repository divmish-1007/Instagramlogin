import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstagramLogin from './components/InstagramLogin';
// (Import other components if needed)

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<InstagramLogin />} />
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
