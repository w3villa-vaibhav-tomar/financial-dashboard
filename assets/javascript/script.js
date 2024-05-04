  document.addEventListener('DOMContentLoaded', function () {
    
      const data = {
        categories: ['January', 'February', 'March', 'April', 'May'],
        series: [{
          name: 'Sales',
          data: [150, 200, 250, 180, 300]
        }]
      };

      const options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Monthly Sales'
        },
        xAxis: {
          categories: data.categories
        },
        yAxis: {
          title: {
            text: 'Sales'
          }
        },
        series: data.series
      };

      Highcharts.chart('chartContainer', options);
    });
