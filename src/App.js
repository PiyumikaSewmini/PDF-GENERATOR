import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobApplicationForm from './pages/JobApplicationForm';
import PDFViewer from './pages/PDFViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<JobApplicationForm />} />
        <Route path="/pdf-viewer" element={<PDFViewer />} />
        
      </Routes>
    </Router>
  );
}

export default App;
