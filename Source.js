
// Initial load
document.addEventListener('DOMContentLoaded', updateVideoSource);
// Tablica przechowująca ścieżki do Twoich własnych plików wideo
const videoSources = [
    'Czołówka.mp4.mp4',
    'odc1.mp4',
    'mojeVideo3.mp4'
];

// Tablica przechowująca opisy wideo
const videoDescriptions = [
    '⬇️Czołówkas',
    '⬇️Odcinek Pierwszy',
    'coś będzie'
];

let currentVideoIndex = 0;

function updateVideoSource() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoDescription = document.getElementById('videoDescription');
    
    // Ustawienie nowego źródła wideo na podstawie bieżącego indeksu
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();
    
    // Ustawienie nowego opisu wideo na podstawie bieżącego indeksu
    videoDescription.textContent = videoDescriptions[currentVideoIndex];
}

function nextVideo() {
    // Zwiększenie indeksu bieżącego wideo, powrót do początku listy, gdy indeks jest większy niż liczba wideo
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    // Aktualizacja źródła wideo i opisu
    updateVideoSource();
}

function prevVideo() {
    // Zmniejszenie indeksu bieżącego wideo, powrót na koniec listy, gdy indeks jest mniejszy niż 0
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    // Aktualizacja źródła wideo i opisu
    updateVideoSource();
}

// Dodanie nasłuchiwania na zdarzenie załadowania dokumentu, aby ustawić początkowe wideo i opis przy załadowaniu strony
document.addEventListener('DOMContentLoaded', updateVideoSource);