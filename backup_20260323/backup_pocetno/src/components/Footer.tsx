import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      padding: '40px 0', 
      textAlign: 'center',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px' }}>
          FENSTER <span style={{ color: '#e67e22' }}>KENDIĆ</span>
        </div>
        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Fenster Kendić doo. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
