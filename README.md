# App Formazione — QR Code + Video

## Struttura file

```
app formazione/
├── index.html         ← Pagina web con le opzioni video
├── genera_qr.py       ← Script per generare il QR Code
└── README.md          ← Questa guida
```

---

## Passo 1 — Inserisci i tuoi video in index.html

Apri `index.html` e trova questa sezione (circa a metà file):

```js
const videos = {
  prova1: {
    title: 'Prova 1',
    youtubeId: 'VIDEO_ID_QUI'   // <-- metti qui l'ID del video YouTube
  },
  prova2: {
    title: 'Prova 2',
    youtubeId: 'VIDEO_ID_QUI'   // <-- metti qui l'ID del video YouTube
  }
};
```

**Come trovare l'ID YouTube:**  
Apri il video su YouTube → guarda l'URL:  
`https://www.youtube.com/watch?v=` **`dQw4w9WgXcQ`**  
La parte dopo `?v=` è l'ID (es. `dQw4w9WgXcQ`).

---

## Passo 2 — Pubblica su GitHub Pages (gratis)

1. Crea un account su [github.com](https://github.com) (se non ce l'hai)
2. Clicca **"New repository"** → dai un nome (es. `app-formazione`) → **Public** → **Create**
3. Carica `index.html` nel repository (trascina il file nella pagina GitHub)
4. Vai su **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` → **Save**
5. Dopo 1-2 minuti il tuo sito sarà su:  
   `https://TUONOME.github.io/app-formazione/`

---

## Passo 3 — Genera il QR Code

1. Apri `genera_qr.py`  
2. Sostituisci l'URL con quello di GitHub Pages:
   ```python
   URL = "https://TUONOME.github.io/app-formazione/"
   ```
3. Esegui:
   ```bash
   python genera_qr.py
   ```
4. Verrà creato il file `qrcode_formazione.png` → stampalo e usalo!

---

## Aggiungere nuove opzioni in futuro

Per aggiungere una terza opzione (es. "Prova 3"):

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
     youtubeId: 'ID_DEL_VIDEO'
   }
   ```
3. Carica di nuovo `index.html` su GitHub.
