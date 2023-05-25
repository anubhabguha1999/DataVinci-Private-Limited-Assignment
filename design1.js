var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Perfomance of BitCoin',
            data: [2360, 1685, 2256, 2456, 1800, 1600, 2545, 1991, 2240, 1594, 2458, 2625],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(100, 50, 0)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});