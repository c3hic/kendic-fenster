import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  bs: {
    translation: {
      nav: { home: 'Početna', services: 'Usluge', gallery: 'Partneri', career: 'Zaposlenje', contact: 'Kontakt', facebook: 'Facebook stranica' },
      hero: { title: 'Obrada pločastih materijala i prodaja okova', subtitle: 'Vrhunska usluga rezanja i kantiranja iverice po mjeri, uz širok asortiman okova za vaš savršen enterijer.', btnServices: 'Naše Usluge', btnContact: 'Kontaktirajte Nas' },
      promo: { 
        tag: 'PROMO AKCIJA',
        title: 'PROMO SEDMICA', 
        text: 'Besplatno kantiranje za sve narudžbe pločastih materijala preko 500 KM! Akcija traje do isteka zaliha.',
        btn: 'Iskoristi Akciju'
      },
      services: { title: 'Naše Usluge', cutting: 'Precizno Rezanje', cuttingDesc: 'Savremeno rezanje iverice na najsavremenijim mašinama po vašim tačnim mjerama.', edging: 'Kantiranje', edgingDesc: 'Kvalitetno kantiranje ABS i PVC trakama za dugovječnost i estetski savršen finiš.', fittings: 'Prodaja Okova', fittingsDesc: 'Širok izbor šarki, klizača, ručica i ostalih komponenti vrhunskih brendova.' },
      gallery: { 
        title: 'Naši Partneri', 
        subtitle: 'Sarađujemo sa vodećim svjetskim proizvođačima pločastih materijala i okova.',
        clickHint: 'Kliknite na logo za pregled kataloga',
        viewAll: 'Pogledaj sve radove'
      },
      footer: {
        quickLinks: 'Brzi Linkovi',
        joinTeam: 'Postani dio tima',
        contactTitle: 'Kontakt'
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
        hours: 'Pon - Pet: 08:00 - 16:00\nSubota i Nedjelja: Neradni',
        hoursLabel: 'Radno vrijeme',
        name: 'Vaše Ime', 
        subject: 'Tema', 
        message: 'Vaša Poruka', 
        send: 'Pošaljite Poruku',
        success: 'Hvala vam! Vaša poruka je uspješno poslana.',
        error: 'Došlo je do greške. Molimo pokušajte ponovo.'
      },
      jobForm: {
        title: 'Prijava za posao 2026',
        successTitle: 'Hvala na prijavi!',
        successText: 'Vaša aplikacija je uspješno poslana. Kontaktirat ćemo vas uskoro.',
        close: 'Zatvori',
        sectionCandidate: 'Podaci o kandidatu',
        namePlaceholder: 'Ime i prezime',
        phonePlaceholder: 'Broj telefona',
        birthPlacePlaceholder: 'Godište i državljanstvo',
        addressPlaceholder: 'Adresa stanovanja',
        educationPlaceholder: 'Završena škola',
        computerSkillsPlaceholder: 'Poznavanje rada na računaru (programi kojima vladate)',
        languagesPlaceholder: 'Poznavanje stranih jezika (navedite koje)',
        sectionExperience: 'Radno iskustvo',
        experiencePlaceholder: 'Prethodno radno iskustvo (poslodavac i pozicija)',
        jobDescPlaceholder: 'Opis poslova koje ste obavljali',
        sectionAdditional: 'Dodatne informacije',
        drivingLicensePlaceholder: 'Vozačka dozvola (kategorije)',
        maritalStatusPlaceholder: 'Bračni status',
        childrenPlaceholder: 'Broj djece',
        workHoursPlaceholder: 'Željeno radno vrijeme (npr. rad u noćnoj smjeni)',
        substancesPlaceholder: 'Konzumacija alkohola ili drugih opojnih sredstava',
        criminalRecordPlaceholder: 'Da li ste osuđivani ili krivično gonjeni?',
        expectedSalaryPlaceholder: 'Kolikom platom biste bili zadovoljni?',
        healthPlaceholder: 'Historija težih oboljenja',
        housingLabel: 'Stambeno pitanje',
        housingOptionDefault: 'Odaberite opciju',
        housingOptionOwned: 'Stan/kuća u vlasništvu',
        housingOptionParents: 'Sa roditeljima',
        housingOptionTenant: 'Podstanar',
        housingOptionOther: 'Drugo',
        carPlaceholder: 'Da li posjedujete automobil?',
        unemploymentOfficePlaceholder: 'Da li ste prijavljeni na biro rada?',
        interestReasonPlaceholder: 'Razlog interesovanja za posao',
        expectationsPlaceholder: 'Od poslodavca očekujem',
        fiveYearPlanPlaceholder: 'Gdje se vidite za 5 godina?',
        warningIncomplete: 'Aplikacije koje nisu u potpunosti popunjene ne uzimaju se u razmatranje!',
        warningSpecialist: 'Ukoliko ste radili kao stolar ili na poslovima lakiranja i imate dovoljno iskustva za samostalan rad, OBAVEZNO to naznačite u aplikaciji.',
        submitBtn: 'Pošalji Prijavu',
        errorMsg: 'Došlo je do greške. Molimo pokušajte ponovo.'
      }
    }
  },
  sl: {
    translation: {
      nav: { home: 'Domov', services: 'Storitve', gallery: 'Partnerji', career: 'Zaposlitev', contact: 'Kontakt', facebook: 'Facebook stran' },
      hero: { title: 'Natančnost, ki naredi razliko', subtitle: 'Vrhunska storitev razreza in robljenja ivernih plošč po meri, s široko ponudbo okovja za vaš popoln interier.', btnServices: 'Naše Storitve', btnContact: 'Kontaktirajte Nas' },
      promo: { 
        tag: 'PROMO PONUDBA',
        title: 'PROMO TEDEN', 
        text: 'Brezplačno robljenje za vsa naročila ploščatih materialov nad 500 KM! Akcija velja do razprodaje zalog.',
        btn: 'Izkoristi Akcijo'
      },
      services: { title: 'Naše Storitve', cutting: 'Natančen Razrez', cuttingDesc: 'Sodobno razrezovanje ivernih plošč na najsodobnejših strojih po vaših točnih merah.', edging: 'Robljenje', edgingDesc: 'Kakovostno robljenje z ABS in PVC trakovi za dolgotrajnost in estetsko popoln zaključek.', fittings: 'Prodaja Okovja', fittingsDesc: 'Širok izbor spon, vodil, ročajev in ostalih komponent vrhunskih blagovnih znamk.' },
      gallery: { 
        title: 'Naši Partnerji', 
        subtitle: 'Sodelujemo z vodilnimi svetovnimi proizvajalci ploščatih materialov in okovja.',
        clickHint: 'Kliknite na logotip za ogled kataloga',
        viewAll: 'Oglejte si vsa dela'
      },
      footer: {
        quickLinks: 'Hitre Povezave',
        joinTeam: 'Postani del ekipe',
        contactTitle: 'Kontakt'
      },
      catalogs: {
        title: 'Katalogi Partnerjev',
        subtitle: 'Prebrskajte spletne kataloge naših partnerjev in poiščite idealen material za vaš dom ali poslovni prostor.',
        viewEgger: 'EGGER Kolekcija',
        viewKastamonu: 'KASTAMONU Program',
        btnView: 'Ogled Kataloga'
      },
      contact: { 
        title: 'Kontaktirajte Nas', 
        info: 'Informacije', 
        office: 'Pisarna', 
        factory: 'Tovarna & Razrez', 
        address: 'Naslov', 
        phone: 'Telefon', 
        email: 'E-pošta', 
        hours: 'Pon - Pet: 08:00 - 16:00\nSobota in Nedelja: Zaprto',
        hoursLabel: 'Delovni čas',
        name: 'Vaše Ime', 
        subject: 'Zadeva', 
        message: 'Vaše Sporočilo', 
        send: 'Pošlji Sporočilo',
        success: 'Hvala! Vaše sporočilo je bilo uspešno poslano.',
        error: 'Prišlo je do napake. Prosimo, poskusite znova.'
      },
      jobForm: {
        title: 'Prijava za delo 2026',
        successTitle: 'Hvala za prijavo!',
        successText: 'Vaša prijava je bila uspešno poslana. Kmalu vas bomo kontaktirali.',
        close: 'Zapri',
        sectionCandidate: 'Podatki o kandidatu',
        namePlaceholder: 'Ime in priimek',
        phonePlaceholder: 'Telefonska številka',
        birthPlacePlaceholder: 'Leto rojstva in državljanstvo',
        addressPlaceholder: 'Naslov bivanja',
        educationPlaceholder: 'Končana šola',
        computerSkillsPlaceholder: 'Znanje računalništva (programi, ki jih obvladate)',
        languagesPlaceholder: 'Znanje tujih jezikov (navedite katere)',
        sectionExperience: 'Delovne izkušnje',
        experiencePlaceholder: 'Prejšnje delovne izkušnje (delodajalec in delovno mesto)',
        jobDescPlaceholder: 'Opis nalog, ki ste jih opravljali',
        sectionAdditional: 'Dodatne informacije',
        drivingLicensePlaceholder: 'Vozniško dovoljenje (kategorije)',
        maritalStatusPlaceholder: 'Zakonski stan',
        childrenPlaceholder: 'Število otrok',
        workHoursPlaceholder: 'Želeni delovni čas (npr. delo v nočni izmeni)',
        substancesPlaceholder: 'Uživanje alkohola ali drugih opojnih snovi',
        criminalRecordPlaceholder: 'Ali ste bili obsojeni ali kazensko preganjani?',
        expectedSalaryPlaceholder: 'S kakšno plačo bi bili zadovoljni?',
        healthPlaceholder: 'Zgodovina težjih bolezni',
        housingLabel: 'Stanovanjsko vprašanje',
        housingOptionDefault: 'Izberite možnost',
        housingOptionOwned: 'Stanovanje/hiša v lasti',
        housingOptionParents: 'S starši',
        housingOptionTenant: 'Najemnik',
        housingOptionOther: 'Drugo',
        carPlaceholder: 'Ali imate avtomobil?',
        unemploymentOfficePlaceholder: 'Ali ste prijavljeni na zavodu za zaposlovanje?',
        interestReasonPlaceholder: 'Razlog za zanimanje za delo',
        expectationsPlaceholder: 'Od delodajalca pričakujem',
        fiveYearPlanPlaceholder: 'Kje se vidite čez 5 let?',
        warningIncomplete: 'Nepopolne prijave ne bodo obravnavane!',
        warningSpecialist: 'Če ste delali kot mizar ali na področju lakiranja in imate dovolj izkušenj za samostojno delo, to OBVEZNO navedite v prijavi.',
        submitBtn: 'Pošlji prijavo',
        errorMsg: 'Prišlo je do napake. Prosimo, poskusite znova.'
      }
    }
  },
  de: {
    translation: {
      nav: { home: 'Startseite', services: 'Leistungen', gallery: 'Partner', career: 'Karriere', contact: 'Kontakt', facebook: 'Facebook Seite' },
      hero: { title: 'Präzision, die den Unterschied macht', subtitle: 'Erstklassiger Service für den Zuschnitt und die Bekantung von Spanplatten nach Maß, with einer breiten Palette an Beschlägen für Ihr perfektes Interieur.', btnServices: 'Unsere Leistungen', btnContact: 'Kontaktieren Sie uns' },
      promo: { 
        tag: 'PROMO ANGEBOT',
        title: 'PROMO WOCHE', 
        text: 'Kostenlose Bekantung für alle Bestellungen von Plattenmaterialien über 500 KM! Aktion gültig solange der Vorrat reicht.',
        btn: 'Angebot Nutzen'
      },
      services: { title: 'Unsere Leistungen', cutting: 'Präziser Zuschnitt', cuttingDesc: 'Moderner Zuschnitt von Spanplatten na modernsten Maschinen nach Ihren genauen Maßen.', edging: 'Bekantung', edgingDesc: 'Hochwertige Bekantung mit ABS- und PVC-Bändern for Langlebigkeit und ein ästhetisch perfektes Finish.', fittings: 'Beschlagverkauf', fittingsDesc: 'Große Auswahl an Scharnieren, Auszügen, Griffen und anderen Komponenten führender Marken.' },
      gallery: { 
        title: 'Unsere Partner', 
        subtitle: 'Wir arbeiten mit weltweit führenden Herstellern von Plattenmaterialien und Beschlägen zusammen.',
        clickHint: 'Klicken Sie auf das Logo, um den Katalog anzusehen',
        viewAll: 'Alle Arbeiten ansehen'
      },
      footer: {
        quickLinks: 'Schnelllinks',
        joinTeam: 'Werde Teil des Teams',
        contactTitle: 'Kontakt'
      },
      catalogs: {
        title: 'Partnerkataloge',
        subtitle: 'Durchsuchen Sie die Online-Kataloge unserer Partner und finden Sie das ideale Material für Ihr Zuhause oder Ihre Geschäftsräume.',
        viewEgger: 'EGGER Kollektion',
        viewKastamonu: 'KASTAMONU Program',
        btnView: 'Katalog ansehen'
      },
      contact: { 
        title: 'Kontaktieren Sie uns', 
        info: 'Informationen', 
        office: 'Büro', 
        factory: 'Werk & Zuschnitt', 
        address: 'Adresse', 
        phone: 'Telefon', 
        email: 'E-Mail', 
        hours: 'Mo - Fr: 08:00 - 16:00\nSamstag & Sonntag: Geschlossen',
        hoursLabel: 'Öffnungszeiten',
        name: 'Ihr Name', 
        subject: 'Betreff', 
        message: 'Ihr Nachricht', 
        send: 'Nachricht Senden',
        success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
        error: 'Es ist unvorhergesehener Fehler opgetreten. Bitte versuchen Sie es erneut.'
      },
      jobForm: {
        title: 'Bewerbung für 2026',
        successTitle: 'Vielen Dank für Ihre Bewerbung!',
        successText: 'Ihre Bewerbung wurde erfolgreich versendet. Wir werden uns in Kürze bei Ihnen melden.',
        close: 'Schließen',
        sectionCandidate: 'Kandidatendaten',
        namePlaceholder: 'Vor- und Nachname',
        phonePlaceholder: 'Telefonnummer',
        birthPlacePlaceholder: 'Geburtsjahr und Staatsangehörigkeit',
        addressPlaceholder: 'Wohnadresse',
        educationPlaceholder: 'Abgeschlossene Ausbildung',
        computerSkillsPlaceholder: 'Computerkenntnisse (Programme, die Sie beherrschen)',
        languagesPlaceholder: 'Fremdsprachenkenntnisse (bitte angeben)',
        sectionExperience: 'Berufserfahrung',
        experiencePlaceholder: 'Bisherige Berufserfahrung (Arbeitgeber und Position)',
        jobDescPlaceholder: 'Beschreibung der ausgeübten Tätigkeiten',
        sectionAdditional: 'Zusätzliche Informationen',
        drivingLicensePlaceholder: 'Führerschein (Kategorien)',
        maritalStatusPlaceholder: 'Familienstand',
        childrenPlaceholder: 'Anzahl der Kinder',
        workHoursPlaceholder: 'Gewünschte Arbeitszeit (z.B. Nachtschicht)',
        substancesPlaceholder: 'Konsum von Alkohol oder anderen berauschenden Mitteln',
        criminalRecordPlaceholder: 'Sind Sie vorbestraft oder strafrechtlich verfolgt worden?',
        expectedSalaryPlaceholder: 'Mit welchem Gehalt wären Sie zufrieden?',
        healthPlaceholder: 'Vorgeschichte schwerer Krankheiten',
        housingLabel: 'Wohnsituation',
        housingOptionDefault: 'Option wählen',
        housingOptionOwned: 'Eigenes Haus/Wohnung',
        housingOptionParents: 'Bei den Eltern',
        housingOptionTenant: 'Mieter',
        housingOptionOther: 'Sonstiges',
        carPlaceholder: 'Besitzen Sie ein Auto?',
        unemploymentOfficePlaceholder: 'Sind Sie beim Arbeitsamt gemeldet?',
        interestReasonPlaceholder: 'Grund für das Interesse an der Stelle',
        expectationsPlaceholder: 'Was ich vom Arbeitgeber erwarte',
        fiveYearPlanPlaceholder: 'Wo sehen Sie sich in 5 Jahren?',
        warningIncomplete: 'Unvollständige Bewerbungen werden nicht berücksichtigt!',
        warningSpecialist: 'Wenn Sie als Tischler oder in der Lackierung gearbeitet haben und über ausreichende Erfahrung für selbstständiges Arbeiten verfügen, geben Sie dies UNBEDINGT in der Bewerbung an.',
        submitBtn: 'Bewerbung absenden',
        errorMsg: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      }
    }
  },
  en: {
    translation: {
      nav: { home: 'Home', services: 'Services', gallery: 'Partners', career: 'Careers', contact: 'Contact', facebook: 'Facebook page' },
      hero: { title: 'Precision That Makes a Difference', subtitle: 'Top-quality particle board cutting and edging service, with a wide range of fittings for your perfect interior.', btnServices: 'Our Services', btnContact: 'Contact Us' },
      promo: { 
        tag: 'PROMO OFFER',
        title: 'PROMO WEEK', 
        text: 'Free edging for all orders of board materials over 500 KM! Promotion valid while stocks last.',
        btn: 'Use Promotion'
      },
      services: { title: 'Our Services', cutting: 'Precision Cutting', cuttingDesc: 'Modern particle board cutting on state-of-the-art machines according to your exact measurements.', edging: 'Edging', edgingDesc: 'High-quality ABS and PVC edging for durability and an aesthetically perfect finish.', fittings: 'Fittings Sales', fittingsDesc: 'Wide selection of hinges, slides, handles, and other components from top brands.' },
      gallery: { 
        title: 'Our Partners', 
        subtitle: 'We collaborate with the world\'s leading panel and hardware manufacturers.',
        clickHint: 'Click on the logo to view the catalog',
        viewAll: 'View all works'
      },
      footer: {
        quickLinks: 'Quick Links',
        joinTeam: 'Join the team',
        contactTitle: 'Contact'
      },
      catalogs: {
        title: 'Partner Catalogs',
        subtitle: 'Browse our partners\' online catalogs and find the ideal material for your home or business space.',
        viewEgger: 'EGGER Collection',
        viewKastamonu: 'KASTAMONU Program',
        btnView: 'View Catalog'
      },
      contact: { 
        title: 'Contact Us', 
        info: 'Information', 
        office: 'Office', 
        factory: 'Factory & Cutting', 
        address: 'Address', 
        phone: 'Phone', 
        email: 'Email', 
        hours: 'Mon - Fri: 08:00 - 16:00\nSat & Sun: Closed',
        hoursLabel: 'Business Hours',
        name: 'Your Name', 
        subject: 'Subject', 
        message: 'Your Message', 
        send: 'Send Message',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'An error occurred. Please try again.'
      },
      jobForm: {
        title: 'Job Application 2026',
        successTitle: 'Thank you for applying!',
        successText: 'Your application has been successfully sent. We will contact you soon.',
        close: 'Close',
        sectionCandidate: 'Candidate Information',
        namePlaceholder: 'First and Last Name',
        phonePlaceholder: 'Phone Number',
        birthPlacePlaceholder: 'Year of Birth and Citizenship',
        addressPlaceholder: 'Home Address',
        educationPlaceholder: 'Education',
        computerSkillsPlaceholder: 'Computer Skills (programs you master)',
        languagesPlaceholder: 'Foreign Languages (please specify)',
        sectionExperience: 'Work Experience',
        experiencePlaceholder: 'Previous Work Experience (employer and position)',
        jobDescPlaceholder: 'Description of tasks performed',
        sectionAdditional: 'Additional Information',
        drivingLicensePlaceholder: 'Driving License (categories)',
        maritalStatusPlaceholder: 'Marital Status',
        childrenPlaceholder: 'Number of Children',
        workHoursPlaceholder: 'Desired Work Hours (e.g., night shift)',
        substancesPlaceholder: 'Consumption of alcohol or other substances',
        criminalRecordPlaceholder: 'Have you been convicted or prosecuted?',
        expectedSalaryPlaceholder: 'What salary would you be satisfied with?',
        healthPlaceholder: 'History of serious illnesses',
        housingLabel: 'Housing Situation',
        housingOptionDefault: 'Select an option',
        housingOptionOwned: 'Owned house/apartment',
        housingOptionParents: 'With parents',
        housingOptionTenant: 'Tenant',
        housingOptionOther: 'Other',
        carPlaceholder: 'Do you own a car?',
        unemploymentOfficePlaceholder: 'Are you registered with the employment office?',
        interestReasonPlaceholder: 'Reason for interest in the job',
        expectationsPlaceholder: 'I expect from the employer',
        fiveYearPlanPlaceholder: 'Where do you see yourself in 5 years?',
        warningIncomplete: 'Incomplete applications will not be considered!',
        warningSpecialist: 'If you have worked as a carpenter or in painting and have enough experience for independent work, MANDATORY specify this in the application.',
        submitBtn: 'Submit Application',
        errorMsg: 'An error occurred. Please try again.'
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
