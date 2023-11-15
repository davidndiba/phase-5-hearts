import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Analytics = ({ homes }) => {
  // First, ensure that `homes` is an array before attempting to map over it
  if (!Array.isArray(homes)) {
    // If homes is not an array, return null or some placeholder content
    return <div>Loading...</div>;
  }

  // Now we can safely map over homes because we have confirmed it's an array
  const data = {
    labels: homes.map(home => home.name),
    datasets: [
      {
        label: 'Visits',
        data: homes.map(home => home.visits),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Donations Needed',
        data: homes.map(home => home.totalDonationsNeeded - home.donations),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  // If you want to check the content of `homes`, make sure to log it correctly
  console.log(homes);

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Analytics</h3>
      <div className='h-2/3 w-2/3 mb-36'>
      <Bar data={data} />
      </div>
    </div>
  );
};

export default Analytics;
