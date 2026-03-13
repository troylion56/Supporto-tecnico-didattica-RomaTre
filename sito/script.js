/*
 * ============================================================
 *  CONFIGURA QUI I TUOI VIDEO GOOGLE DRIVE
 *  driveId: se il link è https://drive.google.com/file/d/1ABC123xyz/view
 *  l'ID è: 1ABC123xyz
 *  Ricorda di impostare la condivisione su "Chiunque abbia il link".
 * ============================================================
 */
const videos = {
  SpiegazioneAperturaChiusura: {
    title: 'Spiegazione Apertura e Chiusura',
    driveId: '1EeGNAHPkdqgylvHb4OxI4E0OaeogWCTn'  
  },
  DisposizioneScrivania: {
    title: 'Disposizione Scrivania',
    driveId: '11mZrwbDLOKrbwoyv4NtFK9vTQL0QbE95'   
  },
  Rack: {
    title: 'Rack',
    driveId: '1cJo5erQtOpxgEdi8a-3gp-uF6GoXpNlU'   
  },
  PCAula: {
    title: 'PC di aula',
    driveId: '1ZnR_mSeh6_gbcdE8oVIyflf0kVCgZX8P'   
  },
  KVM: {
    title: 'KVM',
    driveId: '19sB17kisRz2iZ-5nTR04QQdCgeic6iYv'   
  },
  RetroSmartHub: {
    title: 'RetroSmartHub',
    driveId: '16-o94QuNkMHXUBQXHtzA7K6q6bLrqghX'   
  },
  SmartHubNonFunzionante: {
    title: 'SmartHub Non Funzionante',
    driveId: '1mA7YknPU8NS8_XPXQ0yb-8vZQV45cT5T'   
  },
  WebCamNonFunzionante: {
    title: 'WebCam Non Funzionante',
    driveId: '16dhkd2RoVXCp6__mtU9FjMN6UbVwtdw6'   
  },
  MouseTastieraNonFunzionante: {
    title: 'Mouse e Tastiera Non Funzionanti',
    driveId: '1chc9zI_qcRMMNsgDyrj0XQ0GuohZFwk2'   
  },
  PulsanteBluNonFunzionante: {
    title: 'Pulsante Blu Non Funzionante',
    driveId: '1bf39t9oduUoSFDtZwa3XJleBHtyoO4el'   
  },
  ProienzionePcProf: {
    title: 'Proiezione PC Professore',
    driveId: '1Rm1XEhJXF-WZd871WLpd-YWjrbXFUPv9'   
  },
  MicrofonoGelato: {
    title: 'Microfono Gelato',
    driveId: '1ooxdE5EQsD_FFocvMPo8L1uowigt_6tG'   
  },
  MicrofonoRode: {
    title: 'Microfono Rode',
    driveId: '1ol-NVtO-blFT4nnUysyt6IZaZmWMHNtF'   
  },
  AudioPCAulaNonFunzionante: {
    title: 'Audio PC di aula Non Funzionante',
    driveId: '1ymNc5vSsHuCVUCnu5lqeyVZ-tC28VfxU'   
  },
  AudioPCCollegatoNonFunzionante: {
    title: 'Audio PC collegato Non Funzionante',
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
