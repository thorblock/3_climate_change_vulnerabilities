// starting map object
var map = L.map("map", {
  center: [45.5230, -122.6764],
  zoom: 11
});

// add basemap layer using openstreet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// now let's try adding 
// create and store second var
var geoJSONheat;

// define the color scale using Chroma.js .. yellow, orange, red
var colorScale = chroma.scale('YlGn').domain([0, 50]);

function style(features) {
    // Replace 'population' with the property you want to use
    var propertyValue = features.properties.mean_canopy;
    var fillColor = colorScale(propertyValue).hex();
    
    return {
        fillColor: fillColor,
        color: 'purple',
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.7
    };
}

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
            style: style
        }).addTo(map);
        });
// ------------------
