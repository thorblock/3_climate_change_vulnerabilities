// fetch the data using path, run everything within fetch
fetch('data/Portland_Zip_Precise.geojson')
  .then(response => response.json())
  .then(data => {
    // update the name, so we reference geojsonData
    var geojsonData;
    geojsonData = data; 
    console.log(geojsonData); // console log to ensure that we got our shtuff

    // map thing for map make
    var map = L.map('map').setView([45.525, -122.67], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.geoJson(geojsonData) .addTo(map);

    // An array of zipcodes and their locations
    var zipcodes = [
        {
        data: "97229",
        location: [45.55544012600208, -122.79243588656425]
        },
        {
        data: "97210",
        location: [45.533943623052494, -122.71416663249786]
        },
        {
        data: "97233",
        location: [45.51512775249594, -122.5023802945542]
        }
    ];
    
    // An array that will store the created cityMarkers
    var zipMarkers = [];
    
    for (var i = 0; i < zipcodes.length; i++) {
        // loop through the cities array, create a new marker, and push it to the cityMarkers array
        zipMarkers.push(
        L.marker(zipcodes[i].location).addTo(map).bindPopup("<h1>" + zipcodes[i].data + "</h1>")
        );
    }

})
  .catch(error => {
    console.error('Error fetching GeoJSON data:', error);
});

// fetch the data using path, run everything within fetch
fetch('data/dashboard_set.geojson')
  .then(response => response.json())
  .then(data => {
    eval(data);
    // update the name, so we reference dash set
    var dashData;
    dashData = data; 
    console.log(dashData); // console log to ensure that we got our shtuff

    // array time - zipcode
    const zipcodes = [];
    // race composition
    const hispanic = [];
    const white = [];
    const black = [];
    const native = [];
    const asian = [];
    const nhpi = [];
    const other = [];
    // yearly income brackets
    const lessthan5k = [];
    const fivek10k = [];
    const tenk15k = [];
    const fifteenk20k = [];
    const twentyk25k = [];
    const twentyfivek35k = [];
    const thirtyfivek50k = [];
    const fiftyk75k = [];
    const sevenfivek100k = [];
    const hundredk150k = [];
    const onefiftykplus = [];
    // median hhld inc, supp security inc, pubassist/snap inc
    const medianhhld = [];
    const suppsec = [];
    const pubassist = [];
    // education attainment
    const lessthanhigh = [];
    const highorged = [];
    const associateorsomecollege = [];
    const bachorhigher = [];
    // population
    const populations = [];

    // loop through geojson features
    for (const feature of dashData.features) {
        // feature.properties['']
        const zipcode = feature.properties['ZIPCODE'];
        const hispanic_percent = feature.properties['HISP_LAT_%'];
        const white_percent = feature.properties['WHITE_%'];
        const black_percent = feature.properties['BLACK_%'];
        const native_percent = feature.properties['NATIVE_%'];
        const asian_percent = feature.properties['ASIAN_%'];
        const nhpi_percent = feature.properties['NHPI_%'];
        const other_percent = feature.properties['OTHER_%'];
        const lessthan5k_percent = feature.properties['lessthan5k_%'];
        const fivek10k_percent = feature.properties['5k10_%'];
        const tenk15k_percent = feature.properties['10k15k_%'];
        const fifteenk20k_percent = feature.properties['15k20k_%'];
        const twentyk25k_percent = feature.properties['20k25k_%'];
        const twentyfivek35k_percent = feature.properties['25k35k_%'];
        const thirtyfivek50k_percent = feature.properties['35k50k_%'];
        const fiftyk75k_percent = feature.properties['50k75k_%'];
        const sevenfivek100k_percent = feature.properties['75k100k_%'];
        const hundredk150k_percent = feature.properties['100k150k_%'];
        const onefiftykplus_percent = feature.properties['150kormore_%'];
        const medianhhld_percent = feature.properties['MEDIAN_HHLD_INC'];
        const suppsec_percent = feature.properties['SUPPSEC_%'];
        const pubassist_percent = feature.properties['PUBASSIST_%'];
        const lessthanhigh_percent = feature.properties['lessthandhighschooldip_%'];
        const highorged_percent = feature.properties['highschoolorged_%'];
        const associateorsomecollege_percent = feature.properties['somecollegeorassociate_%'];
        const bachorhigher_percent = feature.properties['bachorhigher_%'];
        const population = feature.properties['POPULATION'];
            // split and push
            zipcodes.push(zipcode);
            hispanic.push(hispanic_percent);
            white.push(white_percent);
            black.push(black_percent);
            native.push(native_percent);
            asian.push(asian_percent);
            nhpi.push(nhpi_percent);
            other.push(other_percent);
            lessthan5k.push(lessthan5k_percent);
            fivek10k.push(fivek10k_percent);
            tenk15k.push(tenk15k_percent);
            fifteenk20k.push(fifteenk20k_percent);
            twentyk25k.push(twentyk25k_percent);
            twentyfivek35k.push(twentyfivek35k_percent);
            thirtyfivek50k.push(thirtyfivek50k_percent);
            fiftyk75k.push(fiftyk75k_percent);
            sevenfivek100k.push(sevenfivek100k_percent);
            hundredk150k.push(hundredk150k_percent);
            onefiftykplus.push(onefiftykplus_percent);
            medianhhld.push(medianhhld_percent);
            suppsec.push(suppsec_percent);
            pubassist.push(pubassist_percent);
            lessthanhigh.push(lessthanhigh_percent);
            highorged.push(highorged_percent);
            associateorsomecollege.push(associateorsomecollege_percent);
            bachorhigher.push(bachorhigher_percent);
            populations.push(population);
    };

    const suspiciousArray = [zipcodes,hispanic, white, black, native, asian, nhpi, other]
    console.log(suspiciousArray);

    let labels = Object.keys('97210', '97229', '97233');

    // Display the default plot
    function init() {
        let data = [{
        values: zipcodes,
        labels: labels,
        type: "pie"
        }];
    
        let layout = {
        height: 600,
        width: 800
        };
    
        Plotly.newPlot("pie", data, layout);
    }


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", getData);

// This function is called when a dropdown menu item is selected
function getData() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");


  if (dataset === '97210') {
    data = populations[0];
  }
  else if (dataset === '97229') {
    data = populations[1];
  }
  else if (dataset === '97233') {
    data = populations[2];
  }
    // Call function to update the chart
    updatePlotly(data);

  }
    // Update the restyled plot's values
    function updatePlotly(newdata) {
        Plotly.restyle("pie", "values", [newdata]);
    }
    
    init();

})
  .catch(error => {
    console.error('Error fetching geojson data:', error);
});