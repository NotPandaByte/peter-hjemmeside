# 🎨 AutoUniqa Logo & Favicon Guide

## 📁 **Filer Oprettet:**

### **SVG Logo (Vektor format):**
- `public/logo/autouniqa-logo.svg` - Skalerbar vektor version
- **Størrelse:** 256x256 pixels
- **Format:** SVG (vektor)

### **PNG Logo (Raster format):**
- `public/logo/autouniqa-logo-256.png` - PNG version til favicon
- **Størrelse:** 256x256 pixels
- **Format:** PNG

## 🔄 **Hvordan Konvertere SVG til PNG:**

### **Online Værktøjer (Gratis):**
1. **Convertio.co**
   - Gå til [convertio.co/svg-png/](https://convertio.co/svg-png/)
   - Upload `autouniqa-logo.svg`
   - Vælg 256x256 pixels
   - Download som PNG

2. **CloudConvert.com**
   - Gå til [cloudconvert.com/svg-to-png](https://cloudconvert.com/svg-to-png)
   - Upload SVG filen
   - Indstil størrelse til 256x256
   - Konverter og download

3. **SVG to PNG Converter**
   - Gå til [svgtopng.com](https://svgtopng.com)
   - Upload SVG filen
   - Vælg 256x256 pixels
   - Download PNG

### **Desktop Værktøjer:**
- **GIMP** (Gratis)
- **Photoshop** (Betalt)
- **Inkscape** (Gratis)
- **Sketch** (Mac)

### **Kommandolinje (hvis du har ImageMagick):**
```bash
convert autouniqa-logo.svg -resize 256x256 autouniqa-logo-256.png
```

## 📱 **Favicon Implementering:**

### **Automatisk Konfigureret:**
- ✅ SVG favicon til moderne browsere
- ✅ PNG favicon (256x256) til alle browsere
- ✅ Apple Touch Icon til iOS enheder
- ✅ Open Graph billede til sociale medier
- ✅ Twitter Card billede

### **Metadata Opdateret:**
- **Titel:** "AutoUniqa - Land Rover & 4x4 Specialister i Danmark"
- **Beskrivelse:** Dansk beskrivelse af virksomheden
- **Forfatter:** "AutoUniqa"
- **Logo:** Inkluderet i alle sociale medier previews

## 🎯 **Logo Design:**

### **Farver:**
- **Baggrund:** #0a0a0a (sort)
- **Kant:** #8b8b8b (grå)
- **Tekst:** #ffffff (hvid)
- **Sekundær tekst:** #8b8b8b (grå)

### **Elementer:**
- **Cirkulær design** med dobbelt kant
- **"AutoUniqa"** som hovedtekst
- **"LAND ROVER"** som undertitel
- **"4x4 SPECIALIST"** som tagline
- **Dekorative punkter** i hjørnerne

## 📋 **Trin til Implementering:**

### **1. Konverter SVG til PNG:**
- Brug en af de online værktøjer ovenfor
- Gem som `autouniqa-logo-256.png` i `public/logo/` mappen

### **2. Test Favicon:**
```bash
npm run dev
```
- Åbn `http://localhost:3000`
- Tjek at favicon vises i browser tab
- Tjek at logo vises i bookmarks

### **3. Test på Mobil:**
- Tilføj siden til hjemmeskærm på mobil
- Verificer at Apple Touch Icon vises korrekt

## 🔧 **Fejlfinding:**

### **Hvis favicon ikke vises:**
1. **Ryd browser cache** (Ctrl+F5 eller Cmd+Shift+R)
2. **Tjek filnavne** - de skal matche præcist
3. **Tjek filstier** - `/logo/autouniqa-logo-256.png`
4. **Genstart udviklingsserveren**

### **Hvis logo ser pixeleret ud:**
1. **Brug SVG versionen** - den er skalerbar
2. **Øg PNG opløsning** til 512x512 eller højere
3. **Tjek at PNG er i høj kvalitet**

### **Hvis sociale medier ikke viser logo:**
1. **Brug Facebook Debugger** til at teste Open Graph
2. **Brug Twitter Card Validator** til at teste Twitter
3. **Vent 24 timer** - cache kan tage tid at opdatere

## 🌐 **Browser Support:**

### **SVG Favicon:**
- ✅ Chrome 4+
- ✅ Firefox 3+
- ✅ Safari 4+
- ✅ Edge 12+

### **PNG Favicon:**
- ✅ Alle browsere
- ✅ iOS Safari
- ✅ Android Chrome

## 📊 **Optimerings Tips:**

### **Filstørrelse:**
- **SVG:** ~2-5KB
- **PNG:** ~10-30KB (256x256)
- **Maksimum:** 50KB for favicon

### **Farver:**
- **Baggrund:** Sort (#0a0a0a) matcher siden
- **Kontrast:** Hvid tekst på sort baggrund
- **Tilgængelighed:** God kontrast ratio

---

**Når PNG filen er konverteret og placeret korrekt, vil AutoUniqa logoet vises som favicon i alle browsere!** 🚗✨ 