import React from 'react';
import building from "../../assets/images/building_homes.jpg";

const Homes = () => {
 
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {homeData.map((home) => (
        <div
          key={home.id}
          className="max-w-[450px] rounded overflow-hidden shadow-lg m-4 bg-zinc-300"
        >
          <img src={home.image} alt={home.name} className="w-full h-56 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{home.name}</div>
            <p className="text-gray-700 text-base">Mission: {home.description}</p>
            <p className="text-gray-700 text-base">Location: {home.location}</p>
            <p className="text-blue-500 text-base hover:underline"><a href={`/home/${home.id}`}>View More</a></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homes;