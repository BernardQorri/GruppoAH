var map = L.map('map').setView([41.8902, 12.4922], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

aggiungiMonumenti(map);

mostraStatisticheMonumenti();