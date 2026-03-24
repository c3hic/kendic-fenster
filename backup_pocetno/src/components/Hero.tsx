import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000") no-repeat center center/cover',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100%'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>
          Preciznost koja pravi razliku
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
          Vrhunska usluga rezanja i kantiranja iverice po meri, uz širok asortiman okova za vaš savršen enterijer.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#services" className="btn btn-primary">Naše Usluge</a>
          <a href="#contact" className="btn" style={{ border: '2px solid white', color: 'white' }}>Kontaktirajte Nas</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          h1 { fontSize: '2.5rem' !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
