# Kendic Fenster doo - Web Stranica

## Pregled Projekta
Ovo je zvanična veb stranica za firmu **Kendic Fenster doo**, koja se bavi uslugama rezanja i kantiranja iverice, kao i prodajom okova. Sajt je dizajniran da bude moderan, brz i višejezičan, sa fokusom na profesionalnu prezentaciju usluga i lak kontakt sa klijentima.

### Tehnološki Stek
- **Frontend**: React 19 sa TypeScript-om.
- **Build Alat**: Vite 8.
- **Internacionalizacija (i18n)**: i18next (podržani jezici: BS, SL, DE, EN).
- **Ikonice**: Lucide React.
- **Stilizovanje**: Vanilla CSS (moderni Flexbox i Grid).
- **Kontakt Forma**: Formspree (sa AJAX integracijom).

## Struktura Projekta
- `src/components/`: Sadrži sve UI komponente (Navbar, Hero, Services, Gallery, Contact, Footer).
- `src/assets/images/`: Folder sa originalnim fotografijama radova i logotipom firme.
- `src/i18n.ts`: Centralna konfiguracija za prevode svih tekstova na sajtu.
- `src/App.tsx`: Glavna komponenta koja spaja sve sekcije u jednu stranicu (Single Page Application).

## Pokretanje i Build
- **Razvojni mod**: `npm run dev` (pokreće lokalni server).
- **Mrežni pristup (za telefone)**: `npx vite --host` (omogućava testiranje na istoj WiFi mreži).
- **Build za produkciju**: `npm run build` (generiše statičke fajlove u `dist/` folderu).

## Razvojne Konvencije
- **Komponente**: Koristiti funkcionalne komponente sa TypeScript tipovima.
- **Višejezičnost**: Svaki novi tekst mora biti dodat u `src/i18n.ts` pod odgovarajućim ključem za sva četiri jezika.
- **Stilizovanje**: Preferira se "inline" stilizovanje za specifične komponente radi brzine izrade, ili `index.css` za globalne stilove.
- **Slike**: Sve nove slike radova dodavati u `src/assets/images/` i uvoziti ih direktno u komponente.

## Specifične Funkcionalnosti
- **Dinamički Katalozi**: Logotipi partnera (Egger, Kastamonu, GTV) su interaktivni i vode direktno na njihove online kataloge.
- **Dve Lokacije**: Kontakt sekcija jasno razdvaja Kancelariju i Fabriku sa zasebnim brojevima telefona i mapom centriranom na proizvodnju.
- **Moderno Slanje**: Kontakt forma ne osvežava stranicu, već koristi AJAX za diskretno slanje poruka i prikazivanje poruke o uspehu.

---
*Poslednji put ažurirano: 23. Mart 2026.*
