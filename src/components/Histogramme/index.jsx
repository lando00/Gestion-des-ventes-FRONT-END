import React from 'react';
import { BarElement, CategoryScale, Chart, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const index = () => {

    Chart.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip,
        Title
    );

    const data = {
        labels: ['Rabe', 'Nirina', 'Jean', 'Toto', 'Tutu', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            title:{
                display: true,
                text: ""
            }
        }
    }

  return (
    <Bar data={data} options={options} />
  )
}

export default index