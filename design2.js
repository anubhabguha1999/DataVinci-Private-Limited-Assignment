var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Bit-Coin', 'Etherium', 'Shiba Inu', 'Others'],

        datasets: [{
            label: 'Coins perfomance',
            data: [30, 30, 20, 20],
            backgroundColor: [
                'rgba(412, 155, 99, 1)',
                'rgba(54, 12, 235, 1)',
                'rgba(25, 206, 856, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgba(412, 155, 99, 1)',
                'rgba(54, 12, 235, 1)',
                'rgba(25, 206, 856, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});