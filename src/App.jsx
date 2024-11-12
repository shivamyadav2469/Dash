// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => (
  <Router>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <Content />
      </div>
    </div>
  </Router>
);

export default App;
