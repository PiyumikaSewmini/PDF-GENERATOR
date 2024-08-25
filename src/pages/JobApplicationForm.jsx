import React, { useRef, useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGeneratePDF = async () => {
    setLoading(true);
    try {
      console.log("Generate PDF button clicked");
  
      // Capture the form as a canvas
      const canvas = await html2canvas(formRef.current, {
        scale: 2, // Increase scale for better resolution
        useCORS: true,
        scrollY: -window.scrollY,
        logging: true,
        windowWidth: document.documentElement.offsetWidth, // Ensure full width is captured
      });
  
      const imgData = canvas.toDataURL('image/png');
  
      // Calculate the required height for the PDF page based on the canvas height
      const pdfWidth = 595.28; // A4 width in points
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([pdfWidth, pdfHeight]);
  
      // Draw the image on the PDF page
      page.drawImage(await pdfDoc.embedPng(imgData), {
        x: 0,
        y: 0, // Start from the bottom-left corner
        width: pdfWidth,
        height: pdfHeight,
      });
  
      // Save the PDF and generate a URL
      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      const pdfURL = URL.createObjectURL(pdfBlob);
  
      console.log('Generated PDF URL:', pdfURL);
  
      // Navigate to PDF viewer page and pass the PDF URL
      navigate('/pdf-viewer', { state: { pdfURL } });
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form ref={formRef} className="job-application-form">
        <h3>Job Application Form</h3>
        <p>Thank you for your interest in working with us. Please check below for available job opportunities that meet your criteria and submit your application by filling out the Job Application Form.</p>
        
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" placeholder="First Last" style={{ width: '100%' }} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="email@example.com" style={{ width: '100%' }} />
        </div>

        <div className="form-group">
          <label>What position are you applying for?</label>
          <select name="position" style={{ width: '100%' }}>
            <option value="">Select</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Available Date:</label>
          <input type="date" name="date" style={{ width: '100%' }} />
        </div>

        <div className="form-group">
          <label>What is your current employment status?</label>
          <div className="radio-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label><input type="radio" name="status" value="employed" /> Employed</label>
            <label><input type="radio" name="status" value="self-employed" /> Self-Employed</label>
            <label><input type="radio" name="status" value="unemployed" /> Unemployed</label>
            <label><input type="radio" name="status" value="student" /> Student</label>
          </div>
        </div>

        <div className="form-group">
          <label>Resume Link:</label>
          <input type="url" name="resumeLink" placeholder="http://example.com" style={{ width: '100%' }} />
        </div>

        <div className="form-group">
          <label>References (Optional):</label>
          <input type="url" name="references" placeholder="http://example.com" style={{ width: '100%' }} />
        </div>

        <div className="form-group">
          <label>Additional Information:</label>
          <textarea name="additionalInfo" placeholder="Any other information you want to provide..." style={{ width: '100%' }} />
        </div>
      </form>
      <button onClick={handleGeneratePDF} className="generate-pdf-btn" disabled={loading}>
        {loading ? 'Generating PDF...' : 'Generate PDF'}
      </button>
    </div>
  );
};

export default JobApplicationForm;
