import React from 'react';
import './App.css';
import Layout from './component/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <div>
        {/* Use nested Routes for layout */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Place your home route inside the Layout */}
            <Route index element={<Home />} />
            {/* Add more nested routes for other components */}
          </Route>
          {/* Add more top-level routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
