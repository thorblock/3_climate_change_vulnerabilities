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
