import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero1 from '../../assets/Hero.jpg'; // Replace with your image URLs
import johndoeimage from '../../assets/Johndoe.jpg'
import emilyimage from '../../assets/emilyclarke.jpg'
import { Link } from 'react-router-dom';
// Sample data for reviews and top instructors
const reviews = [
  {
    id: 1,
    name: 'Alice Johnson',
    review: 'This platform has transformed my learning experience. The mentors are top-notch and the courses are well-structured.',
    rating: 5
  },
  {
    id: 2,
    name: 'Bob Smith',
    review: 'A fantastic place to gain new skills. The personalized attention from mentors is invaluable.',
    rating: 4
  },
  // Add more reviews as needed
];

const topInstructors = [
  {
    id: 1,
    name: 'Dr. Emily Clark',
    description: 'Expert in Data Science with over 10 years of experience. Passionate about teaching and helping students excel.',
    imageUrl: emilyimage // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'John Doe',
    description: 'Renowned software engineer specializing in web development. Known for his engaging teaching style and real-world insights.',
    imageUrl: johndoeimage // Replace with actual image URLs
  },
  // Add more instructors as needed
];

function Home() {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div style={{display: "block", width: "30px", height: "30px", background: "#ccc", borderRadius: "50%", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: "10"}}>&gt;</div>,
    prevArrow: <div style={{display: "block", width: "30px", height: "30px", background: "#ccc", borderRadius: "50%", position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: "10"}}>&lt;</div>
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
                    <h2 className="text-gray-800 text-4xl font-bold mb-4">Welcome to Fox Mentors</h2>
                    <p className="text-gray-600 mb-4">
                      Fox Mentors is your platform for personalized learning experiences. Whether you want to advance
                      your career or explore new subjects, we provide the best mentors to guide you.
                    </p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Learn More</button> */}
                   
                    <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/sessions">
                    Book Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                  <img src={Hero1} alt="Hero" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center items-center">
                  <div>
                    <h2 className="text-gray-800 text-4xl font-bold mb-4">Powered by Community</h2>
                    <p className="text-gray-600 mb-4">
                      Trust ratings and reviews to make a smarter choice. Get started with our top-rated courses.
                    </p>
                    <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/courses">
                      Explore Courses
                    </Link>
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
                    <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/sessions">
                    Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 - About Fox Mentors */}
            
          </Slider>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">What Our Users Say</h2>
          <div className="flex flex-col space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-2">"{review.review}"</p>
                <p className="font-semibold">{review.name}</p>
                <p className="text-yellow-500">Rating: {'★'.repeat(review.rating)}</p>
              </div>
            ))}
          </div>
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Profile</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
