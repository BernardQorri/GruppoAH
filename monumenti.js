const monumenti = [
    { nome: "Colosseo", lat: 41.8902, lng: 12.4922 },
    { nome: "Pantheon", lat: 41.8986, lng: 12.4768 },
    { nome: "Fontana di Trevi", lat: 41.9009, lng: 12.4833 },
    { nome: "Piazza Navona", lat: 41.8992, lng: 12.4731 }
];

function aggiungiMonumenti(mappa) {
    monumenti.forEach(monumento => {
        new google.maps.Marker({
            position: { lat: monumento.lat, lng: monumento.lng },
            map: mappa,
            title: monumento.nome
        });
    });
}

function mostraStatisticheMonumenti() {
    alert("Numero di monumenti: " + monumenti.length);
}