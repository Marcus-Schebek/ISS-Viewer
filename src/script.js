

(async function takeCoordenates (){
    const url = `https://api.wheretheiss.at/v1/satellites/25544`;
    const data = await fetch(url);
    const coordenates = await data.json();
    
    var latitude = coordenates.latitude;
    var longitude = coordenates.longitude;

    
    var map = L.map('map').setView([latitude, longitude], 1.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

var leafletIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/FP_Satellite_icon.svg/1200px-FP_Satellite_icon.svg.png',
    iconSize: [30,30]

})

L.marker([latitude, longitude], {icon:leafletIcon}).addTo(map)
    .bindPopup('O satélite da ISS está sobrevoando esta região')
    .openPopup();
}) ();



