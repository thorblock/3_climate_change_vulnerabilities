document.addEventListener("DOMContentLoaded", function () {
    const zipCodesSelect = document.getElementById("zip-codes");
    const chartCanvas = document.getElementById("myChart").getContext("2d");

    let chartData = [];

    // Load data from by_zip.json
    fetch("by_zip.json")
        .then((response) => response.json())
        .then((data) => {
            chartData = data.data;
            const zipCodes = data.columns.slice(1); // Extract ZIP codes from the columns

            // Populate the dropdown with ZIP codes
            zipCodes.forEach((zipCode) => {
                const option = document.createElement("option");
                option.value = zipCode;
                option.text = zipCode;
                zipCodesSelect.appendChild(option);
            });

            // Set the default selection to "None"
            zipCodesSelect.value = "-";

            // Create a Chart.js chart with the default selection
            createChart("-");
        });

    zipCodesSelect.addEventListener("change", () => {
        createChart(zipCodesSelect.value);
    });

    let myChart = null; // Track the chart instance

    function createChart(selectedZipCode) {
        const zipCodeIndex = zipCodesSelect.selectedIndex;

        // Filter out the "Canopy" row data
        const filteredChartData = chartData.filter((entry) => entry[0] !== "Canopy");

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(chartCanvas, {
            type: "bar",
            data: {
                labels: filteredChartData.map((entry) => entry[0]),
                datasets: [
                    {
                        label: selectedZipCode,
                        data: filteredChartData.map((entry) => entry[zipCodeIndex]),
                        backgroundColor: "rgba(30, 130, 76, 0.2)",
                        borderColor: "rgba(30, 130, 76, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 55,
                    },
                },
                plugins: {
                    datalabels: {
                        display: true,
                        color: "black",
                        anchor: "end",
                        align: "end",
                    },
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            const label = data.datasets[tooltipItem.datasetIndex].label || "";
                            const value = tooltipItem.yLabel;
                            return `${label}: ${value}`;
                        },
                    },
                },
            },
        });

        // Find the "Canopy" row data
        const canopyData = chartData.find((entry) => entry[0] === "Canopy");


    }
});

document.addEventListener("DOMContentLoaded", function () {
    const chartCanvas = document.getElementById("lineChart").getContext("2d");

    let lineChartData = [];

    // Load data from by_zip.json
    fetch("by_zip.json")
        .then((response) => response.json())
        .then((data) => {
            lineChartData = data;

            // Create the stacked line chart
            createLineChart();
        });

    function createLineChart() {
        const lineColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
        const labels = lineChartData.columns.slice(1);
        const datasets = [];

        for (let i = 0; i < lineChartData.data.length; i++) {
            const rowData = lineChartData.data[i];
            if (rowData[0] !== "Canopy") {
                const dataset = {
                    label: rowData[0],
                    data: rowData.slice(0),
                    borderColor: lineColors[i],
                    fill: false,
                };
                datasets.push(dataset);
            }
        }

        const chart = new Chart(chartCanvas, {
            type: "line",
            data: {
                labels: labels,
                datasets: datasets,
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: "Zip Code",
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: "Temperature (Fahrenheit)",
                        },
                        beginAtZero: false,
                        
                    },
                },
            },
        });
    }
});
