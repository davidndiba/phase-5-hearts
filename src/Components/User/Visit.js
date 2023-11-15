import React from 'react';

const VisitComponent = ({ isLoggedIn }) => {
  const visits = [
    { id: 1, date: '2023-11-05', home: 'Home A', visitor: 'John Doe' },
    { id: 2, date: '2023-11-06', home: 'Home B', visitor: 'Jane Smith' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-10 mt-10 ml-6">
      {visits.map((visit) => (
        <div key={visit.id} className="bg-white p-4 rounded-md shadow-md">
          <p className="font-bold mb-2">Visit {visit.id} </p>
          <p className="mb-2">Date: {visit.date}</p>
          <p className="mb-2">Home: {visit.home}</p>
          <p>Visitor: {visit.visitor}</p>
        </div>
      ))}
      {!isLoggedIn && (
        <div className="col-span-3 text-center mt-4 text-red-500">
          Please log in to see and set visit dates.
        </div>
      )}
    </div>
  );
};

export default VisitComponent;