# Supporto tecnico didattica — RomaTre

## Struttura file

```
Supporto tecnico didattica-RomaTre/
├── sito/
│   ├── index.html         ← Pagina web con le card video
│   ├── script.js          ← File contenente gli ID dei video (JavaScript)
│   └── style.css          ← Foglio di stile CSS
├── script_python/
│   └── genera_qr.py       ← Script per generare il QR Code
└── README.md              ← Questa guida
```

---

## Passo 1 — Inserisci i tuoi video Google Drive in sito/script.js

Apri il file `sito/script.js` e trova l'oggetto `videos`:

```js
const videos = {
  SpigazioneRack: {
    title: 'Spiegazione Rack',
    driveId: '1DnjSaHFb66pRz6v_3JRNXFZnRKqob_ke'  // <-- metti qui l'ID
  },
  // ... altri video
};
```

**Come trovare l'ID Google Drive:**  
Apri il video su Google Drive → guarda l'URL:  
`https://drive.google.com/file/d/` **`1ABC123xyz`** `/view`  
La parte tra `/d/` e `/view` è l'ID (es. `1ABC123xyz`).

**Importante:** per ogni video vai su Google Drive → tasto destro → **Condividi** → **Chiunque abbia il link** (Visualizzatore).

---

## Passo 2 — Genera il QR Code

Il QR Code punta alla cartella `sito/` su GitHub Pages, in modo da aprire correttamente l'interfaccia con i video invece di questo Readme.

Apri il terminale, entra nella cartella Python ed esegui lo script:
```powershell
cd script_python
python genera_qr.py
```

Verrà creato il file `qrcode_formazione.png` → stampalo e usalo!  

![QR Code generato](qrcode_formazione.png)

---

## Aggiungere nuove card video in futuro

1. In `sito/index.html`, aggiungi una nuova card nel `<div class="grid">`:
   ```html
   <div class="card" onclick="openModal('nuovovideo')">
     <div class="icon">📹</div>
     <h2>Nuovo Video</h2>
     <p>Clicca per guardare il video</p>
   </div>
   ```
2. Aggiungi il video nell'oggetto `videos` dentro a `sito/script.js`:
   ```js
   nuovovideo: {
     title: 'Nuovo Video',
     driveId: 'ID_DEL_FILE_DRIVE'
   }
   ```
3. Fai commit e push dei file modificati su GitHub.

---

## Note tecniche

- L'URL generato nel QR Code deve terminare con `/sito/` (es: `https://troylion56.github.io/Supporto-tecnico-didattica-RomaTre/sito/`) affinché carichi direttamente `index.html`.
- I video vengono riprodotti tramite iframe con l'URL `https://drive.google.com/file/d/ID/preview`
- Il QR code è generato con la libreria `qrcode` (moduli arrotondati, colore blu scuro)
- Dipendenze Python: `qrcode` e `pillow` (per installare: `pip install qrcode[pil]`)
