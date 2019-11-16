let map = L.map('secondmap').setView([29.670, -82.304], 10.50);

L.tileLayer('https://api.mapbox.com/styles/v1/camillerespess/ck2xivw6b0js61cpfjtohyyfj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FtaWxsZXJlc3Blc3MiLCJhIjoiY2syeGhoMGF6MGJnMjNnbjViNzlwdzU2biJ9.vcBWmc0RbX8U-nf0VPxRJg', {
  	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  	maxZoom: 18
  }).addTo(map);

  for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places [i].longitude ])
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].descrip + '</p')
    .addTo ( map );
}
