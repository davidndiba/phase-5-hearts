import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import building from '../../assets/images/building_homes.jpg';

const OneHome = () => {
  const { id } = useParams();
  const history = useNavigate();

  const homeData = [
    {
      id: 1,
      name: 'Cozy Cottage',
      image: building,
      description: 'A charming cottage in a peaceful location.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 2,
      name: 'Mwangaza Childrens Home',
      image: "https://newstartchildrenshome.org/wp-content/uploads/2020/03/cropped-IMG_0039.jpg",
      description: 'Let Us Make A Change Together.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 3,
      name: 'Lions Care Home',
      image: "https://www.movingmountainstrust.org/media/660339/what-you-lookin-at-ulamba-kids-strike-a-pose_5049967433_o.jpg",
      description: 'Join The Team.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 4,
      name: 'Delulu Childrens Centre',
      image: "https://s3.amazonaws.com/cache.salvationarmy.org/8052f34b-0b64-496f-bc72-5f62e1531e3e_70605756-2938-42b6-bfa1-3df4ffbb9cc7_3036906031487640395_mch18.jpg",
      description: 'Lets make a difference together.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 5,
      name: 'St.Josephs Care Centre',
      image: "https://images.squarespace-cdn.com/content/v1/56b0d6d4e707eb68892b71c1/1467410554974-02C8YROH7YQUW24RTZ82/image-asset.jpeg?format=2500w",
      description: 'A charming cottage in a peaceful location.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 6,
      name: 'Mwangaza Childrens Home',
      image: "https://www.superfoam.co.ke/wp-content/uploads/k-west-3.jpg",
      description: 'A charming cottage in a peaceful location.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 7,
      name: 'Carol And Homes',
      image: "https://www.goodsamaritanmathare.co.ke/assets/images/gscpics/allabout.jpg",
      description: 'Lets Put A Smile On A Dull Face.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    {
      id: 8,
      name: 'Rascetrack Centre For The Homeless',
      image: "https://media.licdn.com/dms/image/C4D22AQEbsWX_CNrKJg/feedshare-shrink_800/0/1594585545555?e=2147483647&v=beta&t=oc8AIr46XPYhNH-A9wyG68pipzSl1NJ4JPUdDMljKyI",
      description: 'Help put a roof on someone elses head..',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
  ];

  const selectedHome = homeData.find((home) => home.id === parseInt(id));

  const handleSetVisitDate = (homeId) => {
    // Logic to set visit date for the selected home
    console.log(`Set visit date for home ${homeId}`);
    history('/schedule_visit');
  };

  const handleMakeDonation = (homeId) => {
    // Logic to make a donation for the selected home
    console.log(`Make donation for home ${homeId}`);
    history('/donate');
  };

  return (
    <div className="container mx-auto mt-16 p-4 max-w-2xl">
      {selectedHome && (
        <div className="flex gap-8">
          <div className="flex-shrink-0 w-1/2">
            <img src={selectedHome.image} alt={selectedHome.name} className="w-full h-auto" />
          </div>
          <div className="flex-grow">
            <h2 className="text-3xl font-semibold mb-4">{selectedHome.name}</h2>
            <p className="text-gray-700">{selectedHome.description}</p>
            {!selectedHome.visitDate ? (
              <button
                onClick={() => handleSetVisitDate(selectedHome.id)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Set Visit Date
              </button>
            ) : (
              <p className="mt-4">Visit Date: {selectedHome.visitDate}</p>
            )}
            {!selectedHome.donationMade ? (
              <button
                onClick={() => handleMakeDonation(selectedHome.id)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Make Donation
              </button>
            ) : (
              <p className="mt-4">Donation Made</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OneHome;