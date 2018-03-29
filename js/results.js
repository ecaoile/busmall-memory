'use strict'

// var productChart = new Chart(context, {
//   type: 'bar',
//   data: {
//     labels: productNames,
//     datasets: [
//       {
//         label: "Clicks on Product",
//         data: productClicks,
//         backgroundColor: arrayOfColors,
//       }]
//     // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           stepSize: 1,
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// });

// var results= document.getElementById("results-chart").getContext("2d");

var results = document.getElementById("resultsChart").getContext("2d")
var usableJsonWins = 0;
var usableJsonLosses = 0;
var usableJsonTimes = 0;

function getFromLocalStorage() {
  var jsonWins = localStorage.getItem('busmall.wins');
  var storedJsonWins = JSON.parse(jsonWins);
  console.log(jsonWins);

  var jsonLosses = localStorage.getItem('busmall.losses');
  var storedJsonLosses = JSON.parse(jsonLosses);
  console.log(jsonLosses);

  var jsonTimes = localStorage.getItem('busmall.winTimes');
  var storedJsonTimes = JSON.parse(jsonTimes);
  console.log(jsonTimes);

  if (storedJsonWins) {
    usableJsonWins = storedJsonWins;
    console.log('usableJsonWins ' + usableJsonWins);
  }

  if (storedJsonLosses) {
    usableJsonLosses = storedJsonLosses;
    console.log('usableJsonLosses ' + usableJsonLosses);
  }
  return usableJsonWins, usableJsonLosses;
}

getFromLocalStorage();

var resultsChart = new Chart(results, {
  type: "doughnut",
  data: {
    labels: ["Total Wins", "Total Losses"],
    datasets: [
      {
        label: "Total Wins vs Total Losses",
        data: [usableJsonWins, usableJsonLosses],
        backgroundColor: [
          '#87BBA2', '#415a77']
      }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
        }
      }]
    }
  }
});

