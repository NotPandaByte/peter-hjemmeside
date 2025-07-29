# 🚀 cPanel Upload Guide - AutoUniqa Hjemmeside

## ✅ **Build Status: FÆRDIG!**

Din hjemmeside er nu klar til upload til cPanel. Alle statiske filer er genereret i `out/` mappen.

## 📁 **Filer til Upload:**

### **Hovedfiler:**
- `out/index.html` - Forside
- `out/About/index.html` - Om os side
- `out/Contact/index.html` - Kontakt side
- `out/Shop/index.html` - Shop side
- `out/robots.txt` - SEO fil
- `out/sitemap.xml` - Sitemap
- `out/favicon.ico` - Favicon

### **Mappestruktur:**
- `out/Images/` - Alle billeder
- `out/logo/` - Logo filer
- `out/_next/` - Next.js assets
- `out/[alle-sider]/` - Alle undersider

## 🔧 **cPanel Upload Trin:**

### **Trin 1: Log ind på cPanel**
1. Gå til din hosting providers cPanel
2. Log ind med dine credentials
3. Find "File Manager" eller "Filer"

### **Trin 2: Naviger til public_html**
1. Åbn File Manager
2. Gå til `public_html` mappen
3. Dette er roden af din hjemmeside

### **Trin 3: Upload filer**
1. **Metode A - Drag & Drop:**
   - Åbn `out/` mappen på din computer
   - Træk alle filer og mapper til cPanel File Manager
   - Slip dem i `public_html` mappen

2. **Metode B - Upload knap:**
   - Klik "Upload" i cPanel
   - Vælg alle filer fra `out/` mappen
   - Upload til `public_html`

### **Trin 4: Verificer struktur**
Efter upload skal din `public_html` mappe indeholde:
```
public_html/
├── index.html
├── About/
├── Contact/
├── Shop/
├── Images/
├── logo/
├── _next/
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

## 🌐 **Domæne Konfiguration:**

### **Hvis du har et domæne:**
1. Gå til "Domains" i cPanel
2. Tilføj dit domæne (f.eks. `autouniqa.dk`)
3. Point det til `public_html`

### **Hvis du bruger subdomæne:**
1. Gå til "Subdomains" i cPanel
2. Opret subdomæne (f.eks. `www`)
3. Point det til `public_html`

## 🔍 **Test din hjemmeside:**

### **Efter upload:**
1. Gå til din domæne URL
2. Test alle sider og funktioner
3. Tjek at billeder vises korrekt
4. Verificer at links virker

### **Hvis noget ikke virker:**
- Tjek filrettigheder (644 for filer, 755 for mapper)
- Verificer at alle filer er uploadet
- Kontroller .htaccess fil (hvis nødvendig)

## 📧 **Email Konfiguration:**

### **Hvis du vil bruge domæne email:**
1. Gå til "Email Accounts" i cPanel
2. Opret `peter@autouniqa.dk`
3. Konfigurer email klient

## 🔒 **Sikkerhed:**

### **Anbefalede sikkerhedsforanstaltninger:**
1. **SSL Certificate:**
   - Gå til "SSL/TLS" i cPanel
   - Aktiver gratis Let's Encrypt SSL
   - Dette giver HTTPS

2. **Backup:**
   - Gå til "Backup" i cPanel
   - Lav backup af hele hjemmesiden

3. **File Permissions:**
   - Filer: 644
   - Mapper: 755
   - Dette sikrer korrekt adgang

## 🚀 **Performance Tips:**

### **For bedre hastighed:**
1. **Enable Gzip:**
   - Gå til "Optimize Website" i cPanel
   - Aktiver Gzip komprimering

2. **Browser Caching:**
   - Tilføj cache headers for statiske filer
   - Dette forbedrer loading tid

3. **CDN (Valgfrit):**
   - Overvej Cloudflare for global hastighed
   - Gratis plan er tilstrækkelig

## 📱 **Mobile Test:**

### **Test på forskellige enheder:**
1. **Desktop browser**
2. **Mobile telefon**
3. **Tablet**
4. **Forskellige browsere** (Chrome, Safari, Firefox)

## 🔧 **Fejlfinding:**

### **Almindelige problemer:**

**1. Hjemmeside vises ikke:**
- Tjek at `index.html` er i `public_html`
- Verificer domæne DNS indstillinger

**2. Billeder vises ikke:**
- Tjek at `Images/` mappen er uploadet
- Verificer filrettigheder

**3. Links virker ikke:**
- Tjek at alle HTML filer er uploadet
- Verificer mappestruktur

**4. SSL fejl:**
- Aktiver SSL certifikat i cPanel
- Vent 24 timer på propagation

## 📞 **Support:**

### **Hvis du har problemer:**
1. **Hosting Support:** Kontakt din hosting provider
2. **cPanel Support:** Brug cPanel dokumentation
3. **DNS Support:** Kontakt domæne registrar

## 🎉 **Færdig!**

Efter upload og test er din AutoUniqa hjemmeside live på internettet!

### **Næste skridt:**
1. **Google Analytics** tilføjelse
2. **Google Search Console** setup
3. **Social Media** integration
4. **Email marketing** setup

**Din professionelle Land Rover hjemmeside er nu klar til at imponere kunder!** 🚗✨ 