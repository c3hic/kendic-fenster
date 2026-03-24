import React from 'react';
import { Facebook } from 'lucide-react';
import logoImg from '../assets/images/logo.jpg';

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <img src={logoImg} alt="Fenster Kendic Logo" style={{ height: '60px', borderRadius: '5px', marginBottom: '10px' }} />
          <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
            KENDIĆ <span style={{ color: '#e67e22' }}>FENSTER</span>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <a href="https://www.facebook.com/kendicfenster/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            <Facebook size={24} />
          </a>
        </div>
        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Kendic Fenster doo. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
