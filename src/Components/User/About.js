import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const About = () => {
  
  const largeTextStyle = {
    fontSize: '36px',  // Adjust the font size as needed
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px', // Spacing between the text
};

const smallTextStyle = {
    fontSize: '24px',  // Adjust the font size as needed
    textAlign: 'center',
};

  const projectData = [
    {
      id: 1,
      title: 'Fundraising For Children',
      imageUrl: "https://i.pinimg.com/564x/8a/ae/89/8aae89e3001a337ee1a634308f82c2dc.jpg",
      description: 'Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.',
    },
    {
      id: 2,
      title: 'Volunteer For A Cause',
      imageUrl: "https://i.pinimg.com/564x/46/fd/e0/46fde097add6854642563b004b68bd3f.jpg",
      description: 'If you’re interested in joining our cause, simply contact us and communicate the days and times when you are available. You may also include any additional personal information you like to share, including your skills, interests, projects, or areas of service. We’ll go through your application and get back to you as soon as possible!',
    },
    {
      id: 3,
      title: 'Education Impact',
      imageUrl: "https://i.pinimg.com/564x/a7/b8/b8/a7b8b84fcfd0eb033b4de938d0b95ba9.jpg",
      description: 'Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling',
    },
  ];

  const aboutUs = [
    {
      id: 1,
      title: 'Our Mission',
      imageUrl: "https://i.pinimg.com/564x/05/4c/f3/054cf3b65f0bdb00d2b0662130d2e3fc.jpg",
      description: 'Hearts to homes strives to provide helpless children with basic necessities, education, and reliable health services. But without your support and donations, we won’t be able to do what we do today! Yes, with the fundraising option, you can convince more people to participate in the cause of meeting the needs of the orphans!',
    },
    {
      id: 2,
      title: 'Our Vision',
      imageUrl: "https://i.pinimg.com/564x/35/66/b7/3566b7467bc35f6cd57a30af3d4f6be8.jpg",
      description: 'Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.',
    },
    {
      id: 3,
      title: 'Our Values',
      imageUrl: "https://i.pinimg.com/564x/dc/17/de/dc17de177f4b22d1d0b5b1eb206e6468.jpg",
      description: 'Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.',
    },
  ];

  const locationData = [
    {
      id: 1,
      city: 'City 1',
      country: 'Country 1',
    },
    {
      id: 2,
      city: 'City 2',
      country: 'Country 2',
    },
    {
      id: 3,
      city: 'City 3',
      country: 'Country 3',
    },
    {
      id: 4,
      city: 'City 4',
      country: 'Country 4',
    },
    {
      id: 5,
      city: 'City 5',
      country: 'Country 5',
    },
  ];

  return (
    <>
     <div className="intro-image">
                <marquee behavior="" direction="">
                    <img src="https://zinginstruments.com/wp-content/uploads/family-on-a-beach.jpg" alt="Welcome to Our Home"  />
                </marquee>
                
            </div>

      <div className="text-center mt-10">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <p className="text-xl mb-4">When You Loose A Parent,You Realise How Important They Are To The Foundation Of Your Life.</p>
        <a href="/about" className="text-blue-500 hover:underline block mb-8">Help Us Put A Smile On A DUll Face.</a>
      </div>

      <section className="text-center w-full my-10">
        <p className="text-3xl font-bold mb-4">WHAT WE DO.!!</p>
        <div className="flex flex-wrap justify-center">
          {aboutUs.map((aboutUs) => (
            <div key={aboutUs.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
              <img src={aboutUs.imageUrl} alt={aboutUs.title} className="w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
                <p>{aboutUs.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center w-full my-10">
        <p className="text-3xl font-bold mb-4">Projects</p>
        <div className="flex flex-wrap justify-center">
          {projectData.map((project) => (
            <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
              <img src={project.imageUrl} alt={project.title} className="w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center w-full my-10">
  <p className="text-3xl font-bold mb-4">Location</p>
  <p className="text-lg mb-2">Regions Covered...</p>
  <p className="text-sm mb-4">Our organisation operates in the following regions...</p>
  <div className="flex justify-center mb-8">
    <div className="w-full max-w-[700px]">
      {locationData.map((location, index) => (
        <div key={location.id} className="bg-white p-4 mb-4 rounded shadow-lg">
          <p className="text-xl font-semibold mb-2">Name:</p>
          <p className="text-lg mb-2">Location: {location.city}, {location.country}</p>
          {index !== locationData.length - 1 && <hr className="border-t-2 border-gray-300 my-4" />}
        </div>
      ))}
    </div>
  </div>
</section>

      
      <section className="text-center bg-gray-200 py-10 flex justify-between items-center">
        <div>
          <p className="text-4xl font-bold mb-4">Donate Now</p>
          <p>Support us and make a difference.</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Donate</button>
        </div>
      </section>
    </>
  );
};

export default About;
