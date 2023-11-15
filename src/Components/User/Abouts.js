import React from 'react';


const About = () => {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <p className="text-xl mb-4">We are a NGO that is centered on helping Children’s homes and orphanages.It champions the key values of probity, transparency, accountability, justice and good governance, Climate change, Health, Gender and development, Children’s rights, poverty alleviation, Peace, Population, Training, Counselling small scale enterprises, disability and any other issues that affect society at large. We enhance the self-regulation of our NGOs and assist them to realize their potential in improving services that improve the socio-economic status of Kenyan society in pursuit of sustainable development.</p>
        <a href="/about" className="text-blue-500 hover:underline block mb-8">Learn More</a>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img src="https://www.friendsofchildren.ca/application/themes/foc/images/homepage.jpg" alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Our Mission</div>
            <p className="text-gray-700 text-base">
            It is every child’s right to receive the <br></br>love, care and attention of their family,<br></br> community, or even a stranger.

            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src="https://www.wvi.org/sites/default/files/2021-11/Children%20Bill.JPG" alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Our Vision</div>
            <p className="text-gray-700 text-base">
            Striving to provide helpless children <br></br> with basic necessities through programs.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src="https://www.keepingchildrensafe.global/wp-content/uploads/2022/03/OBFD7G0-scaled-1.jpg" alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Our Story</div>
            <p className="text-gray-700 text-base">
            "Hearts to Homes is about taking action <br></br>by expressing and receiving gratitude <br></br> to accomplish our Mission."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
