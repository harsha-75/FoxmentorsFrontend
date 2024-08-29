import React from 'react';
import webdevelopmentimage from '../../assets/webdevelopment.jpg';
import digitalmarketing from '../../assets/digitalmarketing.avif';
import datascience from '../../assets/datascience.jpg'
function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      instructor: "John Doe",
      description: "Learn to build full-stack web applications using modern technologies like React, Node.js, and MongoDB.",
      price: "$199",
      image: webdevelopmentimage,
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Jane Smith",
      description: "Become proficient in data analysis and machine learning with Python, Pandas, and Scikit-Learn.",
      price: "$249",
      image: datascience,
    },
    {
      id: 3,
      title: "Digital Marketing",
      instructor: "Tom Brown",
      description: "Master digital marketing strategies, including SEO, SEM, and social media advertising.",
      price: "$149",
      image: digitalmarketing,
    },
  ];

  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-gray-800 font-bold mb-4">{course.price}</p>
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
