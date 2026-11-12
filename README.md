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

## Passo 1 — Inserisci i tuoi video OneDrive in sito/script.js

Per ogni video su OneDrive/SharePoint:

1. Tasto destro → **Condividi** → impostazioni del collegamento → **Persone in Roma Tre**, **Può visualizzare** → **Applica**.
2. **Copia collegamento**.
3. In `sito/script.js` incolla il link nel campo `oneDriveUrl` del video:

```js
const videos = {
  Rack: {
    title: 'Rack',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/...',
    driveId: '1cJo5erQtOpxgEdi8a-3gp-uF6GoXpNlU'  // vecchio Google Drive, usato solo se oneDriveUrl è vuoto
  },
  // ... altri video
};
```

Cliccando la card, il video si apre in una nuova scheda: serve l'accesso con l'account Roma Tre.

---

## Passo 2 — Genera il QR Code

Il QR Code punta alla cartella `sito/` su GitHub Pages, in modo da aprire correttamente l'interfaccia con i video invece di questo Readme.

Apri il terminale, entra nella cartella Python ed esegui lo script:
```powershell
cd script_python
python genera_qr.py
```

### QR Code e indirizzamento sito

Scansiona il QR Code oppure usa il link diretto qui sotto:

![QR Code sito](qrcode_formazione.png)

[Indirizzamneto sito](https://troylion56.github.io/Supporto-tecnico-didattica-RomaTre/sito/)

---

## Aggiungere nuove card video in futuro

1. In `sito/index.html`, aggiungi una nuova card nel `<div class="grid">`:
   ```html
   <div class="card" onclick="openModal('nuovovideo')">
     <h2>Nuovo Video</h2>
     <p>Clicca per guardare il video</p>
   </div>
   ```
2. Aggiungi il video nell'oggetto `videos` dentro a `sito/script.js`:
   ```js
   nuovovideo: {
     title: 'Nuovo Video',
     oneDriveUrl: 'LINK_ONEDRIVE_DEL_VIDEO'
   }
   ```
3. Fai commit e push dei file modificati su GitHub.

---

## Note tecniche

- Dipendenze Python: `qrcode` e `pillow` (per installare: `pip install qrcode[pil]`)
