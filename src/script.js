

(async function takeCoordenates (){
    const url = `http://api.open-notify.org/iss-now.json`;
    const data = await fetch(url);
    const coordenates = await data.json();
    
    var latitude = coordenates.iss_position.latitude;
    var longitude = coordenates.iss_position.longitude;
    
    var map = L.map('map').setView([latitude, longitude], 1.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
    .bindPopup('O satélite da ISS está sobrevoando esta região')
    .openPopup();
}) ();



