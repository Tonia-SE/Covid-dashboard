import Chart from 'chart.js';

export const graph = document.createElement('div');
graph.className = 'container-fluid';
graph.innerHTML = `
<canvas class="my-4 chartjs-render-monitor" id="myChart" width="500" height="300" style="display: block; width: 500px; height: 300px;"></canvas>
`
var myChart = new Chart(graph, {
type: 'line',
data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
    data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: 4,
    pointBackgroundColor: '#007bff'
    }]
},
options: {
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true
        }
    }]
    },
    legend: {
    display: true,
    }
}
});