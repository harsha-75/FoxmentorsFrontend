import React from 'react';
import basicbundleimage from '../../assets/coachingone.jpeg';
import enhancedbundleimage from '../../assets/courseimagetwo.jpg';
import sectionalbundleimage from '../../assets/courseimagethree.jpg';

function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "GDWATPI Basic Bundle",
      description: "5 Mock PI, 5 GD, 3 WAT Classes + Personal evaluation. Get Interviewed by top B-school mentors. Price: Rs 1499 (Original price Rs 4999, save 70%).",
      price: "Rs 1499",
      originalPrice: "Rs 4999",
      discount: "Save 70%",
      image: basicbundleimage,
    },
    {
      id: 2,
      title: "GDWATPI Enhanced Bundle",
      description: "10 Mock PI, 10 GD, 3 WAT Classes + Extensive WAT prep. Personal mentorship from top B-school mentors. Price: Rs 2499 (Original price Rs 8330, save 70%).",
      price: "Rs 2499",
      originalPrice: "Rs 8330",
      discount: "Save 70%",
      image: enhancedbundleimage,
    },
    {
      id: 3,
      title: "CAT24 Sectionals Bundle",
      description:(
        <>
          <p>Past 5 years CAT papers in the form of mocks (Free).</p>
          <p>Sectionals bundle: 15 mocks (5 QA, 5 LRDI, 5 VARC). Price: Rs 99.</p>
          <p></p>
        </>
      ),
      price: "Rs 99",
      originalPrice: "Free",
      discount: "Sectionals Only",
      image: sectionalbundleimage,
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-100 transition-all duration-300"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-gray-800 font-bold mb-4">Price: {course.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    View More
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
