import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myknqqjk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>{t('contact.title')}</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '50px',
        marginBottom: '60px'
      }}>
        <div>
          <h3 style={{ marginBottom: '30px' }}>{t('contact.info')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <MapPin style={{ color: '#e67e22' }} />
              <div>
                <strong>{t('contact.office')}:</strong><br />
                Industrijska br. 13, 77230 Velika Kladuša, BiH<br />
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                  <Phone size={14} color="#e67e22" /> +387 37 773 201
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <MapPin style={{ color: '#e67e22', strokeWidth: 3 }} />
              <div>
                <strong>{t('contact.factory')}:</strong><br />
                Vejinac bb, 77230 Velika Kladuša, BiH<br />
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                  <Phone size={14} color="#e67e22" /> +387 62 653 292
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <Mail style={{ color: '#e67e22' }} />
              <div>
                <strong>{t('contact.email')}:</strong><br />
                amir@kendic.ba
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <Clock style={{ color: '#e67e22' }} />
              <div>
                <strong>{t('contact.hours')}:</strong><br />
                Pon - Pet: 08:00 - 16:00<br />
                Subota i Nedjelja: Neradni
              </div>
            </div>
          </div>
        </div>

        <div>
          {status === 'success' ? (
            <div style={{ 
              padding: '40px', 
              backgroundColor: '#d4edda', 
              color: '#155724', 
              borderRadius: '10px', 
              textAlign: 'center',
              border: '1px solid #c3e6cb'
            }}>
              <h3 style={{ color: '#155724', marginBottom: '10px' }}>{t('contact.success')}</h3>
              <button 
                onClick={() => setStatus('idle')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#155724', 
                  textDecoration: 'underline', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Pošaljite novu poruku
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder={t('contact.name')} 
                style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} 
              />
              <input 
                type="email" 
                name="email" 
                required 
                placeholder={t('contact.email')} 
                style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} 
              />
              <input 
                type="text" 
                name="subject" 
                placeholder={t('contact.subject')} 
                style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} 
              />
              <textarea 
                name="message" 
                required 
                placeholder={t('contact.message')} 
                rows={5} 
                style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
              ></textarea>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={status === 'submitting'}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                {status === 'submitting' && <Loader2 className="animate-spin" size={20} />}
                {t('contact.send')}
              </button>

              {status === 'error' && (
                <p style={{ color: '#721c24', fontSize: '0.9rem', marginTop: '10px' }}>
                  {t('contact.error')}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <div style={{ 
        width: '100%', 
        height: '400px', 
        borderRadius: '10px', 
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        <iframe 
          title="Kendic Fenster Factory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.41235489745!2d15.828456!3d45.152431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4763df9f90211111%3A0x222222222222222!2sVejinac%2C%20Bosna%20i%20Hercegovina!5e0!3m2!1sen!2s!4v1711185000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
