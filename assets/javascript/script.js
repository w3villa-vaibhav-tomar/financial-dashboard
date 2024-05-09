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

const sidebar = document.querySelector('.profile-column');

   const mainContent1 = document.querySelector('.main-content');
 
  document.getElementById('sidebarToggleBtn').addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
      mainContent1.classList.toggle('main-content-expanded',)
      mainContent1.classList.toggle('main-content-expanded-responsive')
      
  });
