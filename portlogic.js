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
var geoJSONzip;

// brandish style object before var call
var customStyle = {
    color: 'purple', // border color
    fillColor: 'grey',  
    weight: 1.5,         // border width
    opacity: 0.8,        // border opacity
    fillOpacity: 0.2   // fill opacity
};

// read and display local zip geojson
fetch("/data/ZIP_Codes_Portland.geojson")
    .then((response) => response.json())
    .then((data) => {
        // reference declaration
        geoJSONzip = data;
        // create geoJson layer, implement custom style created beforehand
        L.geoJSON(geoJSONzip, {
            // style goes here
            style: customStyle
        }).addTo(map);
        });

// ------------------
// now let's try adding 
// create and store second var
var geoJSONheat;

// manifest custom style beforehand
var customStyle2 = {
    color: 'red', // border color
    fillColor: 'orange',  
    weight: 1,         // border width
    opacity: 0.8,        // border opacity
    fillOpacity: 0.2   // fill opacity
};

//fetch and display
fetch("/data/Urban_Heat_Island_Mapping.geojson")
    .then((response) => response.json())
    .then((data) => {
        // reference declaration
        geoJSONheat = data;

        // second layer group var
        heatLayer = L.layerGroup();

        // create geoJson layer, implement custom style created beforehand
        L.geoJSON(geoJSONheat, {
            // style goes here
            style: customStyle2
        }).addTo(map);
        });
// ------------------
