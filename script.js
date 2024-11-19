// Function to create the chart
function createChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Time labels (months)
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: [25, 24, 23, 22, 20], // Temperature data for each month
                    borderColor: 'blue',
                    fill: false
                },
                {
                    label: 'Humidity (%)',
                    data: [45, 48, 52, 55, 50], // Humidity data for each month
                    borderColor: 'green',
                    fill: false
                },
                {
                    label: 'PM2.5 (µg/m³)',
                    data: [12, 14, 10, 8, 7], // PM2.5 data for each month
                    borderColor: 'orange',
                    fill: false
                },
                {
                    label: 'PM10 (µg/m³)',
                    data: [30, 35, 32, 29, 28], // PM10 data for each month
                    borderColor: 'red',
                    fill: false
                },
                {
                    label: 'NOx (ppb)',
                    data: [20, 18, 25, 22, 19], // NOx data for each month
                    borderColor: 'purple',
                    fill: false
                },
                {
                    label: 'NH3 (ppb)',
                    data: [50, 48, 55, 60, 58], // NH3 data for each month
                    borderColor: 'brown',
                    fill: false
                },
                {
                    label: 'CO2 (ppm)',
                    data: [400, 410, 420, 430, 440], // CO2 data for each month
                    borderColor: 'grey',
                    fill: false
                },
                {
                    label: 'SO2 (ppb)',
                    data: [3, 4, 5, 4, 3], // SO2 data for each month
                    borderColor: 'blueviolet',
                    fill: false
                },
                {
                    label: 'VOC (ppb)',
                    data: [50, 55, 60, 65, 70], // VOC data for each month
                    borderColor: 'pink',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true, // Ensures y-axis starts at 0
                    title: {
                        display: true,
                        text: 'Concentration'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Months'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}

// JavaScript for navigation and creating the chart only when appropriate
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Add 'active' class to the clicked section
        const id = this.id.replace('-link', '-section');
        document.getElementById(id).classList.add('active');

        // Create the chart only for Yearly, Monthly, or Daily sections
        if (id === 'yearly-section' || id === 'monthly-section' || id === 'daily-section') {
            // Check if the chart already exists, if yes, destroy it first
            if (window.chartInstance) {
                window.chartInstance.destroy();
            }
            // Create the chart
            createChart();
        }
    });
});
