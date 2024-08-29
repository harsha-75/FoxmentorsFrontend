import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero1 from '../../assets/Hero.jpg'; // Replace with your image URLs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import priyansha from '../../assets/Priyesha Somaiya.jpeg'
import onkarimage from '../../assets/onkar.jpg'
import sameerimage from '../../assets/Sameer damani pic.jpeg'
const topInstructors = [
  {
    id: 1,
    name: 'Priyesha Somaiya',
    description: 'At Fox Mentors, Priyesha is a guidance mentor who tries her best to help upcoming MBA aspirants throughout their preparation, she believes it to be her way of paying back to the society, to the seniors and community mentors who helped reach this height.',
    imageUrl: priyansha,
    linkedin: '/linkedin',
    instagram: '/instagram'
  },
  {
    id: 2,
    name: 'Onkar Kasture',
    description: 'In my opinion, what sets Fox mentors apart is its personalized attention, not everyone has doubts which can be covered by a simple sheet of FAQs. Here at TFM we try our best to provide you with relevant mentors from your background and interest to guide you throughout the process.',
    imageUrl: onkarimage,
    linkedin: '/linkedin',
    instagram: '/instagram'
  },
  {
    id: 3,
    name: 'Sameer Damani',
    description: 'TFM is a student driven community which doesnt only guide mba aspirants in their exam preparation but goes one step ahead by providing them with insights to make the right B-school choice and build profile which Bridges the gap between their skill sets and targeted career paths',
    imageUrl: sameerimage,
    linkedin: '/linkedin',
    instagram: '/instagram'
  }
  // Add more instructors as needed
];

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div style={{ display: "block", width: "30px", height: "30px", background: "#ccc", borderRadius: "50%", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: "10" }}>&gt;</div>,
    prevArrow: <div style={{ display: "block", width: "30px", height: "30px", background: "#ccc", borderRadius: "50%", position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: "10" }}>&lt;</div>
  };

  return (
    <div className="">
      <div className="container mx-auto py-10 mb-5 pb-10">
        {/* Hero Slider */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <Slider {...sliderSettings}>
            {/* Slide 1 - Powered by Community */}
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                  <img src={Hero1} alt="Fox Mentors" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center items-center">
                  <div>
                    <h2 className="text-gray-800 text-4xl font-bold mb-4">Welcome To Fox Mentors</h2>
                    <h3 className="text-gray-600 mb-4">Empowering Your Journey with Personalized Mentorship - Beyond Exams, Into Your Future.</h3>         
                    <div className="flex justify-center md:justify-start">
                      <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/courses">
                        Explore Courses
                      </Link>
                      <Link className='bg-green-500 text-white px-4 py-2 rounded-md ml-5' to="/sessions">
                        Book a Session
                      </Link>
                    </div>
                    <div className="flex justify-center md:justify-start mt-5">
                      <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 hover:text-blue-500">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                      </Link>
                      <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 hover:text-blue-500">
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                      </Link>
                      <Link to="https://www.telegram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 hover:text-blue-500">
                        <FontAwesomeIcon icon={faTelegram} className="text-2xl" />
                      </Link>
                      <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-800 hover:text-blue-500">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Book a Session */}
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                  <img src={Hero1} alt="Book a Session" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center items-center">
                  <div>
                    <h2 className="text-gray-800 text-4xl font-bold mb-4">Book a Session</h2>
                    <p className="text-gray-600 mb-4">
                      Connect with mentors and book personalized sessions to enhance your learning experience.
                    </p>
                    <div className="flex justify-center">
                      <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/sessions">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 - About Fox Mentors */}
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                  <img src={Hero1} alt="About Fox Mentors" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center items-center">
                  <div>
                    <h2 className="text-gray-800 text-4xl font-bold mb-4">About Fox Mentors</h2>
                    <p className="text-gray-600 mb-4">
                      Learn more about Fox Mentors and our mission to provide personalized learning experiences.
                    </p>
                    <div className="flex justify-center">
                      <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/about">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* Top Instructors Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">Top Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topInstructors.map((instructor) => (
              <div key={instructor.id} className="bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center">
                <img src={instructor.imageUrl} alt={instructor.name} className="w-32 h-32 rounded-full mb-4" />
                <h3 className="text-gray-800 text-xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-gray-600 mb-4">{instructor.description}</p>
          
                <div className="flex justify-center space-x-4 mb-4">
                  
                  <Link to={instructor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                  </Link>
                  <Link to={instructor.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                  </Link>
                </div>
                {/* <Link className="bg-blue-500 text-white px-4 py-2 rounded-md" to={`/instructors/${instructor.id}`}>
                  View Profile
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
