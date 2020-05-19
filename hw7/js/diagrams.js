var chart = new Chartist.Line('.diagram', {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    series: [
      [0, 1.5, 2.5, 1, 4, 3, 2]
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 20
    },
    low: 0
  });
  