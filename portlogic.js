// starting map object
var map = L.map("map", {
  center: [45.5230, -122.6764],
  zoom: 11
});

// add basemap layer using openstreet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// store the fetch result as a variable so that we can manipulate backend
var geoJSONzip = null;

// read and display local zip geojson
fetch("/data/ZIP_Codes_Portland.geojson")
    .then((response) => response.json())
    .then((data) => {
        L.geoJSON(data).addTo(map);
        });

