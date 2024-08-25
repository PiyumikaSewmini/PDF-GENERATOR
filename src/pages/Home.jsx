import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the Job Application Portal</h2>
      <Link to="/apply">
        <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
          Go to Job Application Form
        </button>
      </Link>
    </div>
  );
};

export default Home;
