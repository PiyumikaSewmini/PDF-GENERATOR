import React from 'react';
import { useLocation } from 'react-router-dom';

const PDFViewer = () => {
  const location = useLocation();
  const { pdfURL } = location.state || {};

  console.log('Received PDF URL:', pdfURL); // Debugging line to check the received URL

  if (!pdfURL) {
    return <p>No PDF URL found. Please generate the PDF again.</p>;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <object
        data={pdfURL}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>Your browser does not support PDFs. <a href={pdfURL}>Download the PDF</a>.</p>
      </object>
    </div>
  );
};

export default PDFViewer;
