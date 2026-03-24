import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Kontaktirajte Nas</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '50px' 
      }}>
        <div>
          <h3 style={{ marginBottom: '30px' }}>Informacije</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <MapPin style={{ color: '#e67e22' }} />
              <div>
                <strong>Adresa:</strong><br />
                Ulica i broj bb, Grad, Srbija
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Phone style={{ color: '#e67e22' }} />
              <div>
                <strong>Telefon:</strong><br />
                +381 00 000 000
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Mail style={{ color: '#e67e22' }} />
              <div>
                <strong>Email:</strong><br />
                info@fensterkendic.rs
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Clock style={{ color: '#e67e22' }} />
              <div>
                <strong>Radno vreme:</strong><br />
                Pon - Pet: 08:00 - 17:00<br />
                Subota: 08:00 - 14:00
              </div>
            </div>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Vaše Ime" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="email" placeholder="Vaš Email" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="text" placeholder="Tema" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <textarea placeholder="Vaša Poruka" rows={5} style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }}></textarea>
          <button type="submit" className="btn btn-primary">Pošaljite Poruku</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
