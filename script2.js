// fetch the data using path
fetch('data/dashboard_set.geojson')
  .then(response => response.json())
  .then(data => {
    // update the name, so we reference geojsonData
    geojsonData = data; 
    console.log(geojsonData); // console log to ensure that we got our shtuff

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
    for (const feature of geojsonData.features) {
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
    console.log(zipcodes[0])
    console.log(hispanic[0])
    console.log(white)
    console.log(black)
    console.log(native)
    console.log(nhpi)

 // need a way of searching zip codes and assigning zip codes to index identifiers, such that when one
 // zip code is selected the correct index is used for all the other arrays.
    entryIndex = []
    for (let i = 0; i < zipcodes.length; i++) {
        const entry = [i];
        entryIndex.push(entry);
    }
    console.log(entryIndex)
// this is probably super convoluted, but i need to knit entryIndex with zipcodes forming some kind of faux-reference
    referenceTable = []
    for (let i = 0; i < zipcodes.length; i++) {
        referenceTable[zipcodes[i]] = entryIndex[i];
    }
    console.log(referenceTable);


    // Initialize arrays to store data for selected ZIP code
    let selectedZipcode = '97210'; // Default ZIP code
    let selectedData = getData(selectedZipcode);

    // Function to get racial data for a specific ZIP code
    function getData(zipcode) {
        // Implement logic to extract data for the selected ZIP code from geojsonData
        // Return an object with data for the selected ZIP code
        return {
            zipcode: zipcode,
            hispanic_percent: s,
            white_percent: s,
            black_percent: s,
            asian_percent: s,
            
        };
    }


 //...//
    // Declare selected ZIP code
    let selectedZipCode;

    // Function to populate the dropdown menu with ZIP codes
    function populateDropdown() {
    const zipCodeSelect = document.getElementById('zipCodeSelect');

    for (const feature of geojsonData.features) {
        const zipcode = feature.properties.ZIPCODE;
        const option = document.createElement('option');
        option.value = zipcode;
        option.textContent = zipcode;
        zipCodeSelect.appendChild(option);
    }

    // Add an event listener to the dropdown for ZIP code selection
    zipCodeSelect.addEventListener('change', function () {
        selectedZipCode = zipCodeSelect.value;
        updateVisualizations();
    });

    // Initialize with the first ZIP code
    selectedZipCode = zipCodeSelect.options[0].value;
    updateVisualizations();
    }
 //...//
    // Function to update map and charts based on selected ZIP code
    function updateVisualizations(selectedZipCode) {
        racePieChart(selectedZipCode);
        incomeBarChart(selectedZipCode);
        educationAttainmentBarChart(selectedZipCode);
        heatMapNotation(selectedZipCode);
    }
 //...//
    // Function to initialize the map and charts
    function initializeMapAndCharts() {
    // Get a reference to the canvas element
    const ctx = document.getElementById('chartname').getContext('2d');

    // Create the bar chart
    new Chart(ctx, {
        type: 'bar', // Specify the chart type
        data: {
            labels: cities, // Labels for the X-axis
            datasets: [{
                label: 'Population',
                data: population, // Data for the Y-axis
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1 // Border width
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Start Y-axis at 0
                }
            }
        }
    });

    }
 //...//
    // Call the initializeMapAndCharts function when the page loads
    window.onload = initializeMapAndCharts;

    // Call the populateDropdown function when the page loads
    window.onload = populateDropdown;




})
  .catch(error => {
    console.error('Error fetching GeoJSON data:', error);
  });

