import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  bs: {
    translation: {
      nav: { home: 'Početna', services: 'Usluge', gallery: 'Partneri', contact: 'Kontakt' },
      hero: { title: 'Preciznost koja pravi razliku', subtitle: 'Vrhunska usluga rezanja i kantiranja iverice po mjeri, uz širok asortiman okova za vaš savršen enterijer.', btnServices: 'Naše Usluge', btnContact: 'Kontaktirajte Nas' },
      promo: { 
        title: 'PROMO SEDMICA', 
        text: 'Besplatno kantiranje za sve narudžbe pločastih materijala preko 500 KM! Akcija traje do isteka zaliha.',
        btn: 'Iskoristi Akciju'
      },
      services: { title: 'Naše Usluge', cutting: 'Precizno Rezanje', cuttingDesc: 'Savremeno rezanje iverice na najsavremenijim mašinama po vašim tačnim mjerama.', edging: 'Kantiranje', edgingDesc: 'Kvalitetno kantiranje ABS i PVC trakama za dugovječnost i estetski savršen finiš.', fittings: 'Prodaja Okova', fittingsDesc: 'Širok izbor šarki, klizača, ručica i ostalih komponenti vrhunskih brendova.' },
      gallery: { 
        title: 'Naši Partneri', 
        subtitle: 'Sarađujemo sa vodećim svjetskim proizvođačima pločastih materijala i okova.',
        clickHint: 'Kliknite na logo za pregled kataloga'
      },
      catalogs: {
        title: 'Katalozi Partnera',
        subtitle: 'Prelistajte online kataloge naših partnera i pronađite idealan materijal za vaš dom ili poslovni prostor.',
        viewEgger: 'EGGER Kolekcija',
        viewKastamonu: 'KASTAMONU Program',
        btnView: 'Pogledaj Katalog'
      },
      contact: { 
        title: 'Kontaktirajte Nas', 
        info: 'Informacije', 
        office: 'Kancelarija', 
        factory: 'Fabrika & Rezanje', 
        address: 'Adresa', 
        phone: 'Telefon', 
        email: 'Email', 
        hours: 'Radno vrijeme', 
        name: 'Vaše Ime', 
        subject: 'Tema', 
        message: 'Vaša Poruka', 
        send: 'Pošaljite Poruku',
        success: 'Hvala vam! Vaša poruka je uspješno poslana.',
        error: 'Došlo je do greške. Molimo pokušajte ponovo.'
      }
    }
  },
  sl: {
    translation: {
      nav: { home: 'Domov', services: 'Storitve', gallery: 'Partnerji', contact: 'Kontakt' },
      hero: { title: 'Natančnost, ki naredi razliko', subtitle: 'Vrhunska storitev razreza in robljenja ivernih plošč po meri, s široko ponudbo okovja za vaš popoln interier.', btnServices: 'Naše Storitve', btnContact: 'Kontaktirajte Nas' },
      promo: { 
        title: 'PROMO TEDEN', 
        text: 'Brezplačno robljenje za vsa naročila ploščatih materialov nad 500 KM! Akcija velja do razprodaje zalog.',
        btn: 'Izkoristi Akcijo'
      },
      services: { title: 'Naše Storitve', cutting: 'Natančen Razrez', cuttingDesc: 'Sodobno razrezovanje ivernih plošč na najsodobnejših strojih po vaših točnih merah.', edging: 'Robljenje', edgingDesc: 'Kakovostno robljenje z ABS in PVC trakovi za dolgotrajnost in estetsko popoln zaključek.', fittings: 'Prodaja Okovja', fittingsDesc: 'Širok izbor spon, vodil, ročajev in ostalih komponent vrhunskih blagovnih znamk.' },
      gallery: { 
        title: 'Naši Partnerji', 
        subtitle: 'Sodelujemo z vodilnimi svetovnimi proizvajalci ploščatih materialov in okovja.',
        clickHint: 'Kliknite na logotip za ogled kataloga'
      },
      contact: { 
        title: 'Kontaktirajte Nas', 
        info: 'Informacije', 
        office: 'Pisarna', 
        factory: 'Tovarna & Razrez', 
        address: 'Naslov', 
        phone: 'Telefon', 
        email: 'E-pošta', 
        hours: 'Delovni čas', 
        name: 'Vaše Ime', 
        subject: 'Zadeva', 
        message: 'Vaše Sporočilo', 
        send: 'Pošlji Sporočilo',
        success: 'Hvala! Vaše sporočilo je bilo uspešno poslano.',
        error: 'Prišlo je do napake. Prosimo, poskusite znova.'
      }
    }
  },
  de: {
    translation: {
      nav: { home: 'Startseite', services: 'Leistungen', gallery: 'Partner', contact: 'Kontakt' },
      hero: { title: 'Präzision, die den Unterschied macht', subtitle: 'Erstklassiger Service für den Zuschnitt und die Bekantung von Spanplatten nach Maß, mit einer breiten Palette an Beschlägen für Ihr perfektes Interieur.', btnServices: 'Unsere Leistungen', btnContact: 'Kontaktieren Sie uns' },
      promo: { 
        title: 'PROMO WOCHE', 
        text: 'Kostenlose Bekantung für alle Bestellungen von Plattenmaterialien über 500 KM! Aktion gültig solange der Vorrat reicht.',
        btn: 'Angebot Nutzen'
      },
      services: { title: 'Unsere Leistungen', cutting: 'Präziser Zuschnitt', cuttingDesc: 'Moderner Zuschnitt von Spanplatten na modernsten Maschinen nach Ihren genauen Maßen.', edging: 'Bekantung', edgingDesc: 'Hochwertige Bekantung mit ABS- und PVC-Bändern für Langlebigkeit und ein ästhetisch perfektes Finish.', fittings: 'Beschlagverkauf', fittingsDesc: 'Große Auswahl an Scharnieren, Auszügen, Griffen und anderen Komponenten führender Marken.' },
      gallery: { 
        title: 'Unsere Partner', 
        subtitle: 'Wir arbeiten mit weltweit führenden Herstellern von Plattenmaterialien und Beschlägen zusammen.',
        clickHint: 'Klicken Sie auf das Logo, um den Katalog anzusehen'
      },
      contact: { 
        title: 'Kontaktieren Sie uns', 
        info: 'Informationen', 
        office: 'Büro', 
        factory: 'Werk & Zuschnitt', 
        address: 'Adresse', 
        phone: 'Telefon', 
        email: 'E-Mail', 
        hours: 'Öffnungszeiten', 
        name: 'Ihr Name', 
        subject: 'Betreff', 
        message: 'Ihr Nachricht', 
        send: 'Nachricht Senden',
        success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
        error: 'Es ist unvorhergesehener Fehler opgetreten. Bitte versuchen Sie es erneut.'
      }
    }
  },
  en: {
    translation: {
      nav: { home: 'Home', services: 'Services', gallery: 'Partners', contact: 'Contact' },
      hero: { title: 'Precision That Makes a Difference', subtitle: 'Top-quality particle board cutting and edging service, with a wide range of fittings for your perfect interior.', btnServices: 'Our Services', btnContact: 'Contact Us' },
      promo: { 
        title: 'PROMO WEEK', 
        text: 'Free edging for all orders of board materials over 500 KM! Promotion valid while stocks last.',
        btn: 'Use Promotion'
      },
      services: { title: 'Our Services', cutting: 'Precision Cutting', cuttingDesc: 'Modern particle board cutting on state-of-the-art machines according to your exact measurements.', edging: 'Edging', edgingDesc: 'High-quality ABS and PVC edging for durability and an aesthetically perfect finish.', fittings: 'Fittings Sales', fittingsDesc: 'Wide selection of hinges, slides, handles, and other components from top brands.' },
      gallery: { 
        title: 'Our Partners', 
        subtitle: 'We collaborate with the world\'s leading panel and hardware manufacturers.',
        clickHint: 'Click on the logo to view the catalog'
      },
      contact: { 
        title: 'Contact Us', 
        info: 'Information', 
        office: 'Office', 
        factory: 'Factory & Cutting', 
        address: 'Address', 
        phone: 'Phone', 
        email: 'Email', 
        hours: 'Business Hours', 
        name: 'Your Name', 
        subject: 'Subject', 
        message: 'Your Message', 
        send: 'Send Message',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'An error occurred. Please try again.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'bs',
    fallbackLng: 'bs',
    interpolation: { escapeValue: false }
  });

export default i18n;
