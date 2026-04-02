# Kendic Fenster doo - Web Stranica

## Pregled Projekta
Ovo je zvanična veb stranica za firmu **Kendic Fenster doo**, koja se bavi uslugama rezanja i kantiranja iverice, kao i prodajom okova. Sajt je dizajniran da bude moderan, brz i višejezičan, sa fokusom na profesionalnu prezentaciju usluga i lak kontakt sa klijentima.

**STATUS: PROJEKAT ZAVRŠEN (Mart 2026)**

### Tehnološki Stek
- **Frontend**: React 19 sa TypeScript-om.
- **Build Alat**: Vite 8.
- **Internacionalizacija (i18n)**: i18next (podržani jezici: BS, SL, DE, EN).
- **Ikonice**: Lucide React.
- **Stilizovanje**: Vanilla CSS (moderni Flexbox i Grid) + Inline React stilovi za specifične UI elemente.
- **Kontakt Forma**: Formspree (sa AJAX integracijom i validacijom).

## Struktura Projekta
- `src/components/`: Sadrži sve UI komponente (Navbar, Hero, Services, Gallery, Contact, Footer, JobApplication).
- `src/assets/images/`: Folder sa originalnim fotografijama radova i logotipom firme.
- `src/i18n.ts`: Centralna konfiguracija za prevode svih tekstova na sajtu (kompletno internacionalizovano).
- `src/App.tsx`: Glavna komponenta koja spaja sve sekcije u jednu stranicu (SPA).

## Ključne Ispravke i Optimizacije (Završna Faza)
- **Internacionalizacija**: Svi statički tekstovi (uključujući footer linkove, radno vrijeme, promo tagove i gumbe u galeriji) su prebačeni u `i18n.ts`.
- **UI/UX Mobilna Optimizacija**: 
  - Hamburger meni linkovi su vizuelno ujednačeni (posebno dugme "Zaposlenje").
  - Radno vrijeme u footeru i kontaktu je formatirano u dva reda sa pravilnim poravnanjem.
  - Hero sekcija dugmad su optimizovana za mobilni prikaz.
- **Performanse**: Uklonjeni neiskorišteni importi i varijable (TS6133) radi bržeg i čistijeg builda na Netlify-u.
- **SEO/Favicon poboljšanja**: Implementirana podrška za `favicon.ico` i `favicon.png` za bolju vidljivost u Google pretrazi i ostalim servisima.

## Pokretanje i Build
- **Razvojni mod**: `npm run dev` (pokreće lokalni server).
- **Mrežni pristup (za telefone)**: `npx vite --host` (omogućava testiranje na istoj WiFi mreži).
- **Build za produkciju**: `npm run build` (generiše statičke fajlove u `dist/` folderu).

## Razvojne Konvencije
- **Komponente**: Koristiti funkcionalne komponente sa TypeScript tipovima.
- **Višejezičnost**: Svaki novi tekst mora biti dodat u `src/i18n.ts` pod odgovarajućim ključem za sva četiri jezika.
- **Slike**: Nove slike radova dodavati u `src/assets/images/` ili preko Netlify CMS-a (Admin panel).

## Specifične Funkcionalnosti
- **Zapošljavanje**: Interaktivna forma za prijavu posla (`JobApplication.tsx`) sa Formspree integracijom.
- **Dinamički Katalozi**: Interaktivni logotipi partnera vode na online kataloge (Egger, Kastamonu, GTV, Falco).
- **Kontakt**: Jasno razdvajanje Kancelarije i Fabrike sa zasebnim brojevima i mapom.

*Posljednji put ažurirano: 26. Mart 2026. (Projekat finalizovan)*