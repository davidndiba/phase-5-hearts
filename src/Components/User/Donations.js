import React from 'react'
import { Link } from 'react-router-dom';
import clothes from "../../assets/images/children1.jpg";
import health from "../../assets/images/health.jpg";
import household from "../../assets/images/packedfood.jpg";
import funds from "../../assets/images/helpinghand.jpg";

const Donations = () => {
  const donations = [
    {
      id: 1,
      image: clothes,
      title: 'Donate Cloathes',
      description: 'With this all-voluntary, non-profit program, we plan to collect usable clothing items and shoes and distribute them among orphan children.',
    },
    {
      id: 2,
      image: health,
      title: 'Donate Medicine',
      description: 'There is an extreme shortage of supplies, including food, clean water, clothes, school supplies, face masks, and other basic necessities.Already battling poverty and lack of resources, these children are now burdened with the possibility of deadly and infectious illness. Living in groups, they are at a high risk of disease due to the concentrated population.',
    },
    {
      id: 3,
      image: household,
      title: 'Donate Food',
      description: 'It breaks our heart to witness young children with bright ideas and undying hopes for a better life feel the effect of the turbulence caused by what may possibly be the biggest upheaval of the century. Regardless, the reality is that shelters and orphanages sponsored by Orphan Life Foundation in India continue to take a hit in these difficult times.',
    },
    {
      id: 3,
      image: funds,
      title: 'Donate Funds',
      description: 'The orphans at the hearts to Homes orphanage need your help to make it through these tough times. Help us give them a chance at life they deserve. We request you to come forward and play your part by donating to those who need it the most.You can donate through Amazon, PayPal, and our Facebook page, whatever you find the most convenient. Regardless of the sum you donate, your donation will be greatly appreciated in the humble effort to support the orphan population in India. Every penny counts.Donate now to save lives and spread smiles',
    },
  ];

  return (
    <div className="lg:mx-32 mt-8 lg:mt-16">
      <p className="text-center text-3xl font-bold mb-4">Make A Difference</p>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-lg">Below are donations you can make</p>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {donations.map((donation) => (
          <div key={donation.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={donation.image} alt={donation.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{donation.title}</h3>
              <p className="text-sm mb-4">{donation.description}</p>
              <Link to="/donate" className="block">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" style={{ backgroundColor: '#E57C23', color:' #F8F1F1' }}>
                  Donate
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donations;