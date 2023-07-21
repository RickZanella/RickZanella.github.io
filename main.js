let ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['blouses', 'sale', 'skirts', 'trousers'],
    datasets: [{
      data: [59, 82, 34, 43],
      borderWidth: 2,
      bordercolor: rgba(77,166,253,0.85),
      backgroundColor: 'transparent',
    }]
  },
  options: {
    title: {
      display: true,
      fontSize: 20,
      text: 'Modelos de Roupas',
    },
    labels: {
      fonsStyle: 'bold'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});