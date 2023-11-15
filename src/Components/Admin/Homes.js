import React from 'react'
// import Sidebar from './Sidebar';
const homesData = [
  { id: 1, name: 'Cozy Cottage',  description: 'A charming cottage in a peaceful location.', },
  { id: 2, name: 'Mwangaza Childrens Home',  description: 'Let Us Make A Change Together.', },
  { id: 3,  name: 'Delulu Childrens Centre', description: 'Lets make a difference together.'},
  { id: 4,  name: 'St.Josephs Care Centre',  description: 'Your heart reaches our home'},
];


const Homes = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}

      <div className="ml-8 w-full"> {/* Adjust ml-8 as needed to separate the sidebar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Homes</h2>
            <a href="/admin/homes_list" className="text-blue-500 hover:underline">
              View More
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {homesData.slice(0, 4).map((home) => (
              <div key={home.id} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{home.name}</h3>
                <p>{home.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;