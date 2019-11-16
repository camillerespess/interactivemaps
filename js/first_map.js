let firstmap = L.map('firstmap').setView([29.636, -82.304], 11.90);

L.tileLayer('https://api.mapbox.com/styles/v1/camillerespess/ck2xivw6b0js61cpfjtohyyfj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FtaWxsZXJlc3Blc3MiLCJhIjoiY2syeGhoMGF6MGJnMjNnbjViNzlwdzU2biJ9.vcBWmc0RbX8U-nf0VPxRJg', {
  	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  	maxZoom: 18
  }).addTo(firstmap);

let coffeeculture = L.marker([29.672127, -82.339246]).addTo(firstmap);
let patticakes = L.marker([29.607327, -82.438420]).addTo(firstmap);
let opus = L.marker([29.650572, -82.333426]).addTo(firstmap);
let wyatts = L.marker([29.650560, -82.323694]).addTo(firstmap);

coffeeculture.bindPopup("Coffee Culture is a lowkey, dimly lit shop that attracts both Gainesville locals and college students. With eclectic decorations and music set to just the right playlist, Coffee Culture is a staple in this town.");
patticakes.bindPopup("Twenty minutes from UF's campus, Patticakes in the Village is a bright, open-concept establishment that is well worth the drive. With a long coffee menu, sandwiches and even ice cream, Patticakes is a great place to spend the day.");
opus.bindPopup("Opus recently opened its newest location in the Innovation Center. Their extensive cold brew menu is not for the faint of heart. With large tables and floor to ceiling windows, Opus makes for an ideal study spot.");
wyatts.bindPopup("Wyatt's is a downtown Gainesville classic. It's small and popular, so scoring a seat there feels like an ultimate win.");
