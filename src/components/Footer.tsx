import React from 'react';
import { Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/images/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ 
      backgroundColor: '#1a252f', 
      color: '#ecf0f1', 
      padding: '60px 0 20px', 
      marginTop: 'auto'
    }}>
      <div className="container">
        <div className="footer-grid">
          {/* Kolona 1: O Nama */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src={logoImg} alt="Fenster Kendic Logo" style={{ height: '50px', borderRadius: '5px' }} />
              <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px', lineHeight: 1.2 }}>
                KENDIĆ <span style={{ color: '#e67e22' }}>FENSTER</span>
              </div>
            </div>
            <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: '0.95rem' }}>
              {t('hero.subtitle')}
            </p>
            <div style={{ marginTop: '20px' }}>
              <a href="https://www.facebook.com/kendicfenster/" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#3b5998', 
                color: 'white', 
                borderRadius: '50%',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Kolona 2: Brzi Linkovi */}
          <div className="footer-col">
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>Brzi Linkovi</h3>
            <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#home" className="footer-link">{t('nav.home')}</a></li>
              <li><a href="#services" className="footer-link">{t('nav.services')}</a></li>
              <li><a href="#gallery" className="footer-link">{t('nav.gallery')}</a></li>
              <li><a href="#contact" className="footer-link">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Kolona 3: Kontakt Info */}
          <div className="footer-col">
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>Kontakt</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#e67e22" style={{ marginTop: '3px' }} />
                <span>Vejinac bb, 77230 Velika Kladuša, BiH</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#e67e22" />
                <span>+387 62 653 292</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="#e67e22" />
                <span>amir@kendic.ba</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#e67e22" style={{ marginTop: '3px' }} />
                <span>Pon - Pet: 08:00 - 16:00<br/>Subota i Nedjelja: Neradni</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          marginTop: '40px', 
          paddingTop: '20px', 
          display: 'flex', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          fontSize: '0.85rem',
          opacity: 0.6
        }}>
          <div>
            © {new Date().getFullYear()} Kendic Fenster doo. Sva prava zadržana.
          </div>
          <div>
            Designed & Developed by <a href="https://github.com/c3hic" target="_blank" rel="noopener noreferrer" style={{ color: '#e67e22', textDecoration: 'none', fontWeight: 'bold' }}>C3HIC</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }
        .footer-link {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #e67e22;
          padding-left: 5px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-links-list {
            flex-direction: row !important;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px !important;
          }
          .footer-bottom {
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
