import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(44, 62, 80, 0.95)' : 'transparent',
      padding: '20px 0',
      transition: 'all 0.3s ease',
      color: isScrolled || isMenuOpen ? '#fff' : '#2c3e50',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '1px' }}>
          FENSTER <span style={{ color: '#e67e22' }}>KENDIĆ</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '30px' }}>
          <a href="#home" style={{ fontWeight: 600 }}>Početna</a>
          <a href="#services" style={{ fontWeight: 600 }}>Usluge</a>
          <a href="#gallery" style={{ fontWeight: 600 }}>Dekori</a>
          <a href="#contact" style={{ fontWeight: 600 }}>Kontakt</a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; cursor: pointer; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
