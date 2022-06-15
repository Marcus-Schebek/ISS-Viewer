

(async function takeCoordenates (){
    const url = `https://api.wheretheiss.at/v1/satellites/25544`;
    const data = await fetch(url);
    const coordenates = await data.json();
    
    var latitude = coordenates.latitude;
    var longitude = coordenates.longitude;
    
    var map = L.map('map').setView([latitude, longitude], 1.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
    .bindPopup('The ISS satellite is flying over this region')
    .openPopup();
}) ();



