/*
 * ============================================================
 *  CONFIGURA QUI I TUOI VIDEO GOOGLE DRIVE
 *  driveId: se il link è https://drive.google.com/file/d/1ABC123xyz/view
 *  l'ID è: 1ABC123xyz
 *  Ricorda di impostare la condivisione su "Chiunque abbia il link".
 * ============================================================
 */
const videos = {
  SpigazioneRack: {
    title: 'Spiegazione Rack',
    driveId: '1DnjSaHFb66pRz6v_3JRNXFZnRKqob_ke'  
  },
  SpiegazioneMicrofonoGelato: {
    title: 'Spiegazione Microfono Gelato',
    driveId: '1PtwOwzMSP6cMP5sxUyCnqYbiXsxsIMN3'   
  },
  SpiegazioneMicrofonoRode: {
    title: 'Spiegazione Microfono Rode',
    driveId: '1yHA3yju5pQ-dx1biU0b59FABcKXdhhJr'   
  },
  SpiegazionePC: {
    title: 'Spiegazione PC',
    driveId: '1E3sPo-KLKFkAiRSywDTvW-SnLbjKOuow'   
  },
  DaModificare: {
    title: 'Da modificare',
    driveId: '1cvAmaojV1jsGHWGr33J9x8yo5IthljBe'   
  },
  ProblematicheComuni: {
    title: 'Problematiche Comuni',
    driveId: '10KxAvmrITAHyzWHiLzLYcvHuCrNSsJLP'   
  }
  ,
  SpiegazioneAperturaCHiusura: {
    title: 'Spiegazione Apertura e Chiusura',
    driveId: '1gZj2QOnrWiI4O-Xqn5DtpBvoOvOAXYeM'   
  }
};

function openModal(key) {
  const video = videos[key];
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

// Chiudi con tasto ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
