import React from 'react';

const Gallery: React.FC = () => {
  const brands = [
    { name: 'Egger', img: 'https://www.egger.com/images/logo.png' },
    { name: 'Kronospan', img: 'https://www.kronospan-express.com/img/logo.png' },
    { name: 'Falco', img: 'https://www.falco-woodindustry.com/static/img/logo.png' }
  ];

  return (
    <section id="gallery" style={{ backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>Dekori i Partneri</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
        Sarađujemo sa vodećim svetskim proizvođačima pločastih materijala kako bismo vam ponudili najširi izbor dezena.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '40px',
        alignItems: 'center',
        justifyItems: 'center'
      }}>
        {/* Ovde bismo obično stavili logo-e, ali pošto nemamo prave slike, koristićemo placeholder-e sa imenima */}
        {brands.map((b, i) => (
          <div key={i} style={{ 
            padding: '20px', 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#7f8c8d',
            border: '2px solid #eee',
            borderRadius: '8px',
            width: '100%',
            textAlign: 'center'
          }}>
            {b.name}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {/* Placeholder slike dekora */}
        {[1,2,3,4].map(i => (
          <div key={i} style={{ 
            height: '200px', 
            backgroundColor: '#ddd', 
            borderRadius: '10px',
            background: `url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400&h=300")`,
            backgroundSize: 'cover'
          }}></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
