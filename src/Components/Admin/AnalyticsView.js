import React from 'react';
import { Pie } from 'react-chartjs-2';

const AnalyticsView = () => {
  const mostVisitedHomesData = {
    labels: ['Home A', 'Home B', 'Home C'],
    datasets: [
      {
        label: 'Most Visited Homes',
        data: [300, 200, 150],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2>Most Visited Homes</h2>
      <div style={{ width: '400px', height: '400px' }}>
        <Pie data={mostVisitedHomesData} />
      </div>
    </div>
  );
};

export default AnalyticsView;
