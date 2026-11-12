/*
 * ============================================================
 *  CONFIGURA QUI I TUOI VIDEO
 *  oneDriveUrl: link del video su OneDrive (Condividi → "Persone in
 *  Roma Tre" → Copia collegamento). Il video si apre in una nuova
 *  scheda, dove si accede con l'account Roma Tre.
 *  driveId: vecchio ID Google Drive, usato solo se oneDriveUrl è vuoto.
 * ============================================================
 */
const videos = {
  SpiegazioneAperturaChiusura: {
    title: 'Spiegazione Apertura e Chiusura',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQB2Q-6kTN02TrUz2m-YOO6CAd1oZbBUQ8BHaZVuwFcXFFk?e=YfJlHZ',
    driveId: '1EeGNAHPkdqgylvHb4OxI4E0OaeogWCTn'  
  },
  Aule1234Magna: {
    title: 'Aule 1-2-3-4 e Magna',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDbbYvT9Mz8R65orHknjkKaAVSl3zcr706eT6Noh1-qR6A?e=48lr2H'
  },
  DisposizioneScrivania: {
    title: 'Disposizione Scrivania',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDqyg2n4yp0TL3mgvs_Ww_oAQ-74nVTFcS42ygg3mWXiHk?e=33iOHZ',
    driveId: '11mZrwbDLOKrbwoyv4NtFK9vTQL0QbE95'   
  },
  Rack: {
    title: 'Rack',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDXvJbXYylDTqlyxhjhCdVRAWOPElfPppt5iQG4_zKTTas?e=uJdp6W',
    driveId: '1cJo5erQtOpxgEdi8a-3gp-uF6GoXpNlU'   
  },
  PCAula: {
    title: 'PC di aula',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQBMaYgDQjiaSrX54gBQWFNOAWRKULsQacQg03YNtPIDnuA?e=aVdXsO',
    driveId: '1ZnR_mSeh6_gbcdE8oVIyflf0kVCgZX8P'   
  },
  KVM: {
    title: 'KVM',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQCGrcATcTgrTKb-p1slow68AapFwcokW2JIlEXfUzvN5tU?e=jCE2Gt',
    driveId: '19sB17kisRz2iZ-5nTR04QQdCgeic6iYv'   
  },
  RetroSmartHub: {
    title: 'RetroSmartHub',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQB_HeHTgAw6QpdvVgKPAB70AadV_H3fl4WFjHfojdH2jDA?e=iqEFjh',
    driveId: '16-o94QuNkMHXUBQXHtzA7K6q6bLrqghX'   
  },
  lavagnaLuminosa: {
    title: 'lavagnaLuminosa',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDR2OFJgpHBQ5C1yFB4DXk2ARcJRJQWy9QtblyHRbzGnIE?e=ZFyKXe',
    driveId: '1U3kOJAVYn2v2Kc629Frzes4jZ-6Rv1mF'   
  },
  SmartHubNonFunzionante: {
    title: 'SmartHub Non Funzionante',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQBR8TluGXBhTKKF-PuYi3CBAZ-nLn8imcOcH-ACd1fTQkc?e=H03Aii',
    driveId: '1mA7YknPU8NS8_XPXQ0yb-8vZQV45cT5T'   
  },
  WebCamNonFunzionante: {
    title: 'WebCam Non Funzionante',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDfYT3g7xiwQ6Tv4zx4grnfAd64KdIwgaMAI4XmBQdVmK4?e=J9aEGi',
    driveId: '16dhkd2RoVXCp6__mtU9FjMN6UbVwtdw6'   
  },
  MouseTastieraNonFunzionante: {
    title: 'Mouse e Tastiera Non Funzionanti',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDkYJcsA4pPR77pnadm8LeaAZvVL71Hl4OksYB6WBjvhsc?e=y4rCa6',
    driveId: '1chc9zI_qcRMMNsgDyrj0XQ0GuohZFwk2'   
  },
  PulsanteBluNonFunzionante: {
    title: 'Pulsante Blu Non Funzionante',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQBUUMJCs1J3Soe9H99MQSoXAYVY4tsrKEWfH0pZvnFI8H4?e=g3KHYy',
    driveId: '1bf39t9oduUoSFDtZwa3XJleBHtyoO4el'   
  },
  ProienzionePcProf: {
    title: 'Proiezione PC Professore',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQBAlriXg8aXTa_BhXjXd6r9AU6C6vx5tev2kcd5mG0Y9kA?e=9rUfkn',
    driveId: '1Rm1XEhJXF-WZd871WLpd-YWjrbXFUPv9'   
  },
  MicrofonoGelato: {
    title: 'Microfono Gelato',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDpfk2XGGbbR5KmD00urqzIAePpBUq4sAEUOFTssBODevI?e=eePLHe',
    driveId: '1ooxdE5EQsD_FFocvMPo8L1uowigt_6tG'   
  },
  MicrofonoRode: {
    title: 'Microfono Rode',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQBPSfXYH-auSqd2uG8Xb8Z8AV9G8-AIgIhSA9peLRa7Zgg?e=hgAQeY',
    driveId: '1ol-NVtO-blFT4nnUysyt6IZaZmWMHNtF'   
  },
  AudioPCAulaNonFunzionante: {
    title: 'Audio PC di aula Non Funzionante',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDrlos22kBwSqI8U_2MUMmZAaq5TGerlkrmKz0Ao8-c7d8?e=5Q8WVX',
    driveId: '1ymNc5vSsHuCVUCnu5lqeyVZ-tC28VfxU'   
  },
  AudioPCCollegatoNonFunzionante: {
    title: 'Audio PC collegato Non Funzionante',
    oneDriveUrl: 'https://uniroma3-my.sharepoint.com/:v:/g/personal/mciccarini_os_uniroma3_it/IQDrlos22kBwSqI8U_2MUMmZAaq5TGerlkrmKz0Ao8-c7d8?e=JpODdK',
    driveId: '1ymNc5vSsHuCVUCnu5lqeyVZ-tC28VfxU'   
  }
};

const themeToggleButton = document.getElementById('theme-toggle');
const themeStorageKey = 'supporto-theme';

function updateThemeButton(theme) {
  if (!themeToggleButton) {
    return;
  }

  const darkModeEnabled = theme === 'dark';
  themeToggleButton.textContent = darkModeEnabled ? 'Modalita chiara' : 'Modalita scura';
  themeToggleButton.setAttribute(
    'aria-label',
    darkModeEnabled ? 'Attiva modalita chiara' : 'Attiva modalita scura'
  );
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  updateThemeButton(theme);
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(themeStorageKey);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

applyTheme(getPreferredTheme());

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', function () {
    const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
}

function openModal(key) {
  const video = videos[key];
  if (!video) {
    console.error('Video non trovato per la chiave:', key);
    return;
  }
  if (video.oneDriveUrl) {
    // OneDrive richiede il login Roma Tre, che spesso non funziona dentro un iframe
    window.open(video.oneDriveUrl, '_blank', 'noopener');
    return;
  }
  document.getElementById('modal-title').textContent = video.title;
  document.getElementById('yt-player').src =
    'https://drive.google.com/file/d/' + video.driveId + '/preview';
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.getElementById('yt-player').src = ''; // ferma il video
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function filterCards(query) {
  const normalizedQuery = normalizeText(query.trim());
  const cards = document.querySelectorAll('.card');
  let visibleCards = 0;

  cards.forEach(function (card) {
    const cardText = normalizeText(card.textContent);
    const isVisible = normalizedQuery === '' || cardText.includes(normalizedQuery);

    card.classList.toggle('hidden', !isVisible);
    if (isVisible) {
      visibleCards += 1;
    }
  });

  document.getElementById('no-results').hidden = visibleCards !== 0;

  const resultsCount = document.getElementById('results-count');
  if (resultsCount) {
    resultsCount.textContent =
      visibleCards === cards.length
        ? visibleCards + ' guide disponibili'
        : visibleCards + ' risultati trovati';
  }
}

const searchInput = document.getElementById('card-search');

if (searchInput) {
  searchInput.addEventListener('input', function (event) {
    filterCards(event.target.value);
  });
}

// Chiudi con tasto ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
