# Supporto tecnico didattica — RomaTre

## Struttura file

```
Supporto tecnico didattica-RomaTre/
├── index.html         ← Pagina web con le card video
├── genera_qr.py       ← Script per generare il QR Code
└── README.md          ← Questa guida
```

---

## Passo 1 — Inserisci i tuoi video Google Drive in index.html

Apri `index.html` e trova questa sezione:

```js
const videos = {
  prova1: {
    title: 'Prova 1',
    driveId: 'FILE_ID_QUI'   // <-- metti qui l'ID del file Google Drive
  },
  prova2: {
    title: 'Prova 2',
    driveId: 'FILE_ID_QUI'   // <-- metti qui l'ID del file Google Drive
  }
};
```

**Come trovare l'ID Google Drive:**  
Apri il video su Google Drive → guarda l'URL:  
`https://drive.google.com/file/d/` **`1ABC123xyz`** `/view`  
La parte tra `/d/` e `/view` è l'ID (es. `1ABC123xyz`).

**Importante:** per ogni video vai su Google Drive → tasto destro → **Condividi** → **Chiunque abbia il link** (Visualizzatore).

---

## Passo 2 — Genera il QR Code

```powershell
& ".venv\Scripts\python.exe" genera_qr.py
```

Verrà creato il file `qrcode_formazione.png` → stampalo e usalo!  

---

## Aggiungere nuove card video in futuro

1. In `index.html`, aggiungi una card nel `<div class="grid">`:
   ```html
   <div class="card" onclick="openModal('prova3')">
     <div class="icon">📹</div>
     <h2>Prova 3</h2>
     <p>Clicca per guardare il video</p>
   </div>
   ```
2. Aggiungi il video nell'oggetto `videos`:
   ```js
   prova3: {
     title: 'Prova 3',
     driveId: 'ID_DEL_FILE_DRIVE'
   }
   ```
3. Fai commit e push su GitHub.

---

## Note tecniche

- I video vengono riprodotti tramite iframe con l'URL `https://drive.google.com/file/d/ID/preview`
- Il QR code è generato con la libreria `qrcode` (moduli arrotondati, colore blu scuro)
- Dipendenze Python: `qrcode[pil]`
