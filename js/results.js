'use strict'

var usableJsonWins = 0;
var usableJsonLosses = 0;
var usableJsonTimes = 0;

function getFromLocalStorage() {
  var jsonWins = localStorage.getItem('busmall.wins');
  var storedJsonWins = JSON.parse(jsonWins);

  var jsonLosses = localStorage.getItem('busmall.losses');
  var storedJsonLosses = JSON.parse(jsonLosses);

  var jsonTimes = localStorage.getItem('busmall.winTimes');
  var storedJsonTimes = JSON.parse(jsonTimes);

  if (storedJsonWins) {
    usableJsonWins = storedJsonWins;
  }

  if (storedJsonLosses) {
    usableJsonLosses = storedJsonLosses;
  }
  return usableJsonWins, usableJsonLosses;
}

getFromLocalStorage();

var results = document.getElementById('resultsChart');
var ctx = results.getContext('2d');

var resultsChart = new Chart(results, {
  type: 'doughnut',
  data: {
    labels: ['Total Wins', 'Total Losses'],
    datasets: [
      {
        label: 'Total Wins vs Total Losses',
        data: [usableJsonWins, usableJsonLosses],
        backgroundColor: [
          '#87BBA2', '#415a77']
      }]
  },
  options: {
    legend: {
      labels: {
        fontColor: '#171d1c'
      }
    }
  }
});

