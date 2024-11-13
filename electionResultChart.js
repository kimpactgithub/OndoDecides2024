// document.addEventListener("DOMContentLoaded", function () {
//   var ResultChart = document.getElementById("electionResultChart");

//   // var options = {
//   //   series: [
//   //     {
//   //       data: [
//   //         {
//   //           "x": "PDP",
//   //           "y": 623000,
//   //           fillColor: '#EC2637',
//   //           strokeColor: '#C23829'
//   //         },
//   //         {
//   //           "x": "APC",
//   //           "y": 453000,
//   //           fillColor: '#08C5E0',
//   //           strokeColor: '#C23829'            
//   //         },
//   //         {
//   //           "x": "SDP",
//   //           "y": 230000,
//   //           fillColor: '#F69336',
//   //           strokeColor: '#C23829'
//   //         },
//   //         {
//   //           "x": "AA",
//   //           "y": 30000
//   //         },
//   //         {
//   //           "x": "ADP",
//   //           "y": 24058
//   //         },
//   //         {
//   //           "x": "APM",
//   //           "y": 1800
//   //         },
//   //         {
//   //           "x": "NNPP",
//   //           "y": 456
//   //         },
//   //         {
//   //           "x": "ZLP",
//   //           "y": 354
//   //         },
//   //         {
//   //           "x": "AAC",
//   //           "y": 333
//   //         },
//   //         {
//   //           "x": "APP",
//   //           "y": 234
//   //         },
//   //         {
//   //           "x": "YPP",
//   //           "y": 231
//   //         },
//   //         {
//   //           "x": "A",
//   //           "y": 100
//   //         },
//   //         {
//   //           "x": "ADC",
//   //           "y": 80
//   //         },
//   //         {
//   //           "x": "APGA",
//   //           "y": 10
//   //         },
//   //         {
//   //           "x": "LP",
//   //           "y": 10
//   //         },
//   //         {
//   //           "x": "PRP",
//   //           "y": 10
//   //         },
//   //         {
//   //           "x": "YP",
//   //           "y": 10
//   //         }
//   //       ],
//   //     },
//   //   ],
//   //   chart: {
//   //     type: "bar",
//   //     height: "88%",
//   //     width: "100%",
//   //   },
//   //   plotOptions: {
//   //     bar: {
//   //       borderRadius: 0,
//   //       borderRadiusApplication: "end",
//   //       horizontal: true,
//   //     },

//   //     labels: {
//   //       style: {
//   //         fontSize: "12px",
//   //         fontWeight: 900,
//   //         fontFamily: "Helvetica, Arial, sans-serif",
//   //         colors: ["#000000"],
//   //         cssClass: "apexcharts-xaxis-label",
//   //       },
//   //     },
//   //   },
//   //   dataLabels: {
//   //     enabled: false,
//   //   },
//   //   // xaxis: {
//   //   //   categories: [
//   //   //     "A",
//   //   //     "AA",
//   //   //     "AAC",
//   //   //     "ADC",
//   //   //     "ADP",
//   //   //     "APC",
//   //   //     "APGA",
//   //   //     "APM",
//   //   //     "APP",
//   //   //     "LP",
//   //   //     "NNPP",
//   //   //     "PDP",
//   //   //     "PRP",
//   //   //     "SDP",
//   //   //     "YPP",
//   //   //     "YP",
//   //   //     "ZLP",
//   //   //   ],
//   //     // labels: {
//   //     //   style: {
//   //     //     fontSize: "10px",
//   //     //     fontWeight: 600,
//   //     //     fontFamily: "helvetica",
//   //     //     colors: ["#B0B0B0"],
//   //     //     cssClass: "apexcharts-xaxis-label",
//   //     //   },
//   //     // },
//   //   // },
//   //   fill: {
//   //     colors: ["#B0B0B0"]
//   //   },
//   //   grid: {
//   //     row: {
//   //       colors: ['#171A1D']
//   //     },
//   //   },

//   //   markers: {
//   //     colors: ['#FFFFFF']
//   //  }
//   // };

// // Function to get formatted data for a specific LGA
// function getSeriesDataForLGA(lgaId) {
//   const lga = lgaData[lgaId];

//   if (!lga) return [];

//   // Sort candidates by votes in descending order and map to required structure
//   return lga.candidates
//     .sort((a, b) => parseInt(b.votes.replace(",", "")) - parseInt(a.votes.replace(",", "")))
//     .map(candidate => ({
//       x: candidate.name,
//       y: parseInt(candidate.votes.replace(",", "")),
//       fillColor: getPartyColor(candidate.name), // Get color based on party name
//       strokeColor: '#C23829'
//     }));
// }

// // Function to assign color based on party
// function getPartyColor(party) {
//   const colors = {
//     "PDP": "#EC2637",
//     "APC": "#08C5E0",
//     "SDP": "#F69336",
//     // Add colors for other parties as needed
//   };
//   return colors[party] || "#B0B0B0"; // Default color if not specified
// }

// // Function to update chart options dynamically
// function updateChartOptions(lgaId) {
//   const chartData = getSeriesDataForLGA(lgaId);

//   const options = {
//     series: [
//       {
//         data: chartData,
//       },
//     ],
//     chart: {
//       type: "bar",
//       height: "88%",
//       width: "100%",
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 0,
//         borderRadiusApplication: "end",
//         horizontal: true,
//       },
//     },
//     labels: {
//       style: {
//         fontSize: "12px",
//         fontWeight: 900,
//         fontFamily: "Helvetica, Arial, sans-serif",
//         colors: ["#000000"],
//         cssClass: "apexcharts-xaxis-label",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       colors: ["#B0B0B0"],
//     },
//     grid: {
//       row: {
//         colors: ["#171A1D"],
//       },
//     },
//     markers: {
//       colors: ["#FFFFFF"],
//     },
//   };

//   return options;
// }

// // Example usage for Akoko_North_East LGA
// const selectedLGA = "Akoko_North_East";
// const chartOptions = updateChartOptions(selectedLGA);

// // Initialize the chart with the options for the selected LGA
// const chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
// chart.render();


//   // var chart = new ApexCharts(ResultChart, options);
//   // chart.render();
// });
