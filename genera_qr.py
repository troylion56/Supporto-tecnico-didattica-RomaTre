"""
Genera il QR Code che punta alla tua pagina di formazione.

ISTRUZIONI:
1. Pubblica la cartella su GitHub Pages (vedi README.md per i passaggi).
2. Sostituisci l'URL qui sotto con il tuo URL reale.
3. Esegui questo script: python genera_qr.py
4. Stampa il file 'qrcode_formazione.png' generato.
"""

import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer

# ============================================================
#  MODIFICA QUI IL TUO URL (dopo aver pubblicato su GitHub Pages)
#  Esempio: "https://tuonome.github.io/app-formazione/"
# ============================================================
URL = "https://tuonome.github.io/app-formazione/"

OUTPUT_FILE = "qrcode_formazione.png"

def genera():
    qr = qrcode.QRCode(
        version=None,           # dimensione automatica
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        back_color=(255, 255, 255),
        fill_color=(30, 64, 175),   # blu scuro
    )

    img.save(OUTPUT_FILE)
    print(f"QR Code salvato in: {OUTPUT_FILE}")
    print(f"URL codificato: {URL}")

if __name__ == "__main__":
    genera()
