# 🚪 Escape Room - Code Verifikator Implementierungsplan

## 📋 Anforderungen (Zusammenfassung)
- **Code-Format**: 5 numerische Ziffern (0-9)
- **Richtiger Code**: `47329`
- **Tür-Design**: SVG-Grafik
- **Fehlerbehandlung**: Animation + Vibration beim falschen Code
- **Partikel-Effekt**: 50-100 Gold-Partikel ("Regen")
- **Styling**: Vanilla CSS
- **Animationen**: motion-react Library
- **Erfolgs-Nachricht**: "Bravo, vous avez réussi"

---

## 🏗️ Architektur & Komponenten

### 1. **CodeVerificator.tsx** (Haupt-Komponente)
- State-Management: `inputs` (Array von 5 strings), `isCorrect`, `isVerifying`
- Event-Handler: Input-Change, Enter-Key, Submit
- Fehlerbehandlung: Validation bei zu viel Input, nur Zahlen erlaubt

### 2. **CodeInputs.tsx** (Input-Felder)
- 5 getrennte Input-Felder in einer Reihe
- Auto-focus auf nächstes Feld bei Eingabe
- Backspace: Focus auf vorheriges Feld
- Shake-Animation bei falschen Code (motion-react)
- Stack-Layout über der Tür

### 3. **Door.tsx** (SVG-Tür)
- Einfache SVG-Grafik (Rechteck mit Türgriff-Icon)
- Animierte Öffnung (Rotation 90°) mit motion-react
- **Z-Index**: Hinter den Input-Feldern positioniert

### 4. **SuccessScreen.tsx** (Erfolgs-Anzeige)
- Text: "Bravo, vous avez réussi"
- Fade-In Animation bei Erfolg
- Erscheint über der Tür

### 5. **GoldParticles.tsx** (Partikel-Effekt)
- 50-100 CSS-basierte div-Elemente
- Motion-react für Fall-Animation
- Random-Positionen bei Start
- Duration: ~2-3 Sekunden

### 6. **App.css** (Styling)
- Container als Flex-Layout (Center-Align)
- Input-Feld Styling: Border, Focus-State, Disabled-State
- Door SVG: Größe, Position
- Gold-Partikel: Kreis-Shape, Gold-Farbe
- Responsive Design

---

## 📝 Detaillierte Implementierungs-Schritte

### Phase 1: Setup & Komponenten-Struktur
- [ ] Neue Komponenten-Dateien erstellen:
  - `src/components/CodeVerificator.tsx`
  - `src/components/CodeInputs.tsx`
  - `src/components/Door.tsx`
  - `src/components/SuccessScreen.tsx`
  - `src/components/GoldParticles.tsx`

### Phase 2: Input-Verarbeitung
- [ ] CodeInputs-Component: 
  - 5 Input-Felder rendern
  - Input-Value nur auf 1 Charakter beschränken (0-9)
  - Enter-Key Detection
  - Auto-focus auf nächstes Feld
  - Backspace-Navigation

### Phase 3: Validierungs-Logik
- [ ] In CodeVerificator:
  - Check: Alle 5 Felder gefüllt?
  - Vergleich mit Zielcode `"47329"`
  - Fehler-Counter (optional)
  - Korrekt/Falsch State setzen

### Phase 4: Animationen (motion-react)
- [ ] **Falscher Code**: Shake-Animation auf Input-Felder + Vibration
- [ ] **Richtiger Code**:
  - [ ] Input-Felder fade-out
  - [ ] Door: SVG rotiert zu "offen" (90°-Rotation)
  - [ ] SuccessScreen: Fade-in mit Text
  - [ ] GoldParticles: Start der Regen-Animation

### Phase 5: Tür-SVG & Door.tsx
- [ ] Einfache SVG-Tür erstellen (Rechteck + Griff)
- [ ] Motion-react `AnimatePresence` + `motion.svg`
- [ ] Rotation von 0° zu -100° (nach links öffnen)
- [ ] Dauer: ~1.5 Sekunden

### Phase 6: Gold-Partikel-Effect
- [ ] GoldParticles.tsx:
  - [ ] 50-100 Divs mit Gold-Farbe (z.B. `#FFD700`)
  - [ ] Random X-Position (-50% bis 150% vom Container)
  - [ ] Start Y: -20px (über dem Viewport)
  - [ ] End Y: Viewport-Höhe + 100px
  - [ ] Motion-Animation: `y: -20px → viewportHeight + 100px`
  - [ ] Duration: 2-3 Sekunden
  - [ ] Staggered Start (versetzter Start)

### Phase 7: CSS-Styling
- [ ] Container-Layout: Flexbox, Center-Aligned
- [ ] Input-Feld Styling:
  - [ ] Border: 2px solid
  - [ ] Größe: 50px x 60px
  - [ ] Font-Size: 24px, Bold
  - [ ] Focus-State: Box-Shadow, Background-Color
  - [ ] Transition: 0.3s
- [ ] Door-Container: Größe, Position
- [ ] GoldParticle: Border-Radius: 50%, Größe: 8-12px
- [ ] Responsive: Media Queries für mobile

### Phase 8: Integration & Testing
- [ ] Alle Komponenten in `App.tsx` integrieren
- [ ] Korrekter Code eingeben → Erfolg verifizieren
- [ ] Falscher Code → Shake-Animation + Vibration
- [ ] Fehlerbehandlung Edge-Cases
- [ ] Performance: Check auf Smooth Animations

---

## 🎨 Design Specifications

### Color Palette
- **Input-Feld**: Weiß mit dunkelgrauem Border
- **Input-Fokus**: Light-Blue Background, Blue Border
- **Button/Submit**: Nicht nötig (Enter-Key)
- **Gold-Partikel**: `#FFD700` (Gold)
- **Erfolgs-Text**: Grün oder Gold
- **Tür**: Braun/Grau SVG

### Typography
- **Input-Felder**: Monospace, 24px, Bold
- **Erfolgs-Text**: Sans-Serif, 48px, Bold
- **Allgemein**: System-Font oder Open Sans

### Layout
```
┌─────────────────────────────────┐
│      [5] [4] [7] [3] [2]        │   ← Input-Felder
│                                 │
│           [🚪 SVG]              │   ← Tür
│                                 │
│   Bravo, vous avez réussi       │   ← Erfolgs-Nachricht
└─────────────────────────────────┘
```

---

## 🚀 Tech-Stack
- **Framework**: React 19 + TypeScript
- **Animation**: motion (v12)
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (kein CSS-in-JS)
- **State Management**: React useState Hook

---

## ⚠️ Edge Cases & Validierung
- [ ] Input: Nur Zahlen 0-9 erlauben (andere Inputs ignorieren)
- [ ] Input: Max 1 Charakter pro Feld
- [ ] Input: Leerzeichen & Sonderzeichen filtern
- [ ] Fehler-Animation: Sollte auch auf Backspace reagieren, wenn Code falsch ist
- [ ] Mobile: Input-Fields responsiv + größer auf Mobile
- [ ] Accessibility: ARIA-Labels, Keyboard Navigation funktioniert

---

## 📋 Datei-Struktur (Nach Implementierung)
```
src/
├── App.tsx (Main mit CodeVerificator)
├── App.css (Globales Styling)
├── components/
│   ├── CodeVerificator.tsx
│   ├── CodeInputs.tsx
│   ├── Door.tsx
│   ├── SuccessScreen.tsx
│   ├── GoldParticles.tsx
│   └── CodeVerificator.css (Lokales Styling)
├── main.tsx
└── ...
```

---

## 🎯 Definition of Done (DoD)
- ✅ Alle 5 Input-Felder funktionieren (Input, Focus-Navigation, Validation)
- ✅ Korrekter Code (47329) triggert Success-State
- ✅ Falscher Code zeigt Shake-Animation + Vibration
- ✅ Tür öffnet sich mit motion-react Animation
- ✅ Success-Screen mit Gold-Regen-Partikel-Effekt
- ✅ Kontext "Bravo, vous avez réussi" wird angezeigt
- ✅ Responsive Design (Desktop + Mobile)
- ✅ Keine Console-Errors
- ✅ Code Review: Clean Code, gute TypeScript-Typen

---

## 📌 Mögliche Erweiterungen (Future)
- [ ] Multiple Levels (verschiedene Codes)
- [ ] Leaderboard / Timer
- [ ] Sound-Effekte
- [ ] Hint-System
- [ ] Code resetten per Button
- [ ] Dunkler Modus
- [ ] Mobile-Optimierte Version
