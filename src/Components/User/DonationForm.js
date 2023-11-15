import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonationForm = ({ handleMakeDonation }) => {
  const [username, setUsername] = useState('');
  const [childrensHome, setChildrensHome] = useState('');
  const [donatedItem, setDonatedItem] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const navigate = useNavigate();

  // const handleDonate = () => {
  //   handleMakeDonation({
  //     username,
  //     childrensHome,
  //     donatedItem,
  //     donationAmount,
  //   });
  //   navigate('/donations');
  // };
  const handleDonate = async () => {
    try {
      // Fetch user data using the username
      const userDataResponse = await fetch(`http://127.0.0.1:8000/api/user/?username=${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (userDataResponse.ok) {
        const userData = await userDataResponse.json();
  
        // You might want to handle the case where multiple users have the same username
        if (userData.length === 1) {
          const user = userData[0];
  
          // Now you have the user data, you can use it in your donation request
          const donationData = {
            username: user.username,
            childrensHome,
            donatedItem,
            donationAmount,
          };
  
          // Make a donation using the user data
          const response = await fetch('http://127.0.0.1:8000/api/make_donation/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(donationData),
          });
  
          if (response.ok) {
            alert('Donation successful!');
            navigate('/donations');
          } else {
            alert('Error making donation');
          }
        } else {
          alert('Error fetching user data');
        }
      }
    } catch (error) {
      console.error('Donation error:', error);
    }
  };
  

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <form className="bg-zinc-300 flex flex-col px-6 py-8 rounded-md max-w-md">
        <div className="text-black text-4xl font-bold text-center mb-8">Donate</div>

        <div className="text-black text-xl mb-4">Username:</div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white flex flex-col h-12 mb-4 rounded-xl p-4"
        />

        <div className="text-black text-xl mb-6">Children’s Home:</div>
        <input
          type="text"
          placeholder="Enter children's home details"
          value={childrensHome}
          onChange={(e) => setChildrensHome(e.target.value)}
          className="bg-white flex flex-col h-12 mb-4 rounded-xl p-4"
        />

        <div className="text-black text-xl mb-6">Donated Item:</div>
        <input
          type="text"
          placeholder="Enter donated item"
          value={donatedItem}
          onChange={(e) => setDonatedItem(e.target.value)}
          className="bg-white flex flex-col h-9 mb-3.5 rounded-xl p-4"
        />

        <div className="text-black text-xl mb-6">Amount:</div>
        <input
          type="number"
          placeholder="Donation Amount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          className="bg-white flex flex-col h-12 mb-6 rounded-xl p-4"
        />

        <button
          type="button"
          onClick={handleDonate}
          style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
          className="bg-black text-white text-xl rounded-xl py-4 mb-4"
        >
          Donate
        </button>

        <button
          type="button"
          onClick={handleCancel}
          style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
          className="bg-black text-white text-xl rounded-xl py-4"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DonationForm;