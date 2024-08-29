import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faBookOpen,
  faLaptopCode,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/foxmentors.png'; // Ensure the logo path is correct

const Header = () => {
  const location = useLocation();

  // Function to check if the current path matches the provided route
  const logoTextColor = location.pathname === '/' ? 'text-blue-500' : 'text-lightblue-500';
  const pathMatch = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-black';
  };

  const iconColor = (path, color) => {
    return location.pathname === path ? color : 'text-black';
  };

  return (
    <header className="bg-white text-black shadow-md">
      {/* Desktop View - Header */}
      <div className="hidden lg:flex justify-between items-center container mx-auto py-5">
        {/* Logo as clickable link */}
        <Link to="/" className={`flex items-center`}>
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-12 rounded-full inline-block bg-white p-2 shadow-lg"
          /> 
          <span className={`text-blue-500 text-3xl font-bold ml-3 ${logoTextColor}`}>Fox Mentors</span>
        </Link>
        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <ul className="flex space-x-8">
            <li className="flex items-center">
              <Link to="/practicehub" className={`flex items-center hover:text-blue-500 rounded-full p-3 transition ease-in-out duration-200 ${pathMatch('/practicehub')}`}>
                <FontAwesomeIcon icon={faLaptopCode} className="mr-3 bg-white text-purple-500 p-2 rounded-full shadow-md" />
                Practice Hub
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/courses" className={`flex items-center hover:text-blue-500 rounded-full p-3 transition ease-in-out duration-200 ${pathMatch('/courses')}`}>
                <FontAwesomeIcon icon={faBookOpen} className="mr-3 bg-white text-pink-500 p-2 rounded-full shadow-md" />
                Courses
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/sessions" className={`flex items-center hover:text-blue-500 rounded-full p-3 transition ease-in-out duration-200 ${pathMatch('/sessions')}`}>
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3 bg-white text-green-500 p-2 rounded-full shadow-md" />
                Sessions
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/about" className={`flex items-center hover:text-blue-500 rounded-full p-3 transition ease-in-out duration-200 ${pathMatch('/about')}`}>
                <FontAwesomeIcon icon={faUserAlt} className="mr-3 bg-white text-blue-500 p-2 rounded-full shadow-md" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile View - Footer */}
      <footer className="block lg:hidden bg-white text-black fixed inset-x-0 bottom-0 p-4 shadow-lg">
        <div className="flex justify-around items-center text-xl">
          <Link to="/" className={`flex items-center ${pathMatch('/')}`}>
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-12 rounded-full bg-white p-2 shadow-lg"
            />
          </Link>
          <Link to="/practicehub" className="flex items-center">
            <FontAwesomeIcon icon={faLaptopCode} className={`text-2xl p-3 rounded-full shadow-md ${iconColor('/practicehub', 'text-purple-500')}`} />
          </Link>
          <Link to="/courses" className="flex items-center">
            <FontAwesomeIcon icon={faBookOpen} className={`text-2xl p-3 rounded-full shadow-md ${iconColor('/courses', 'text-pink-500')}`} />
          </Link>
          <Link to="/sessions" className="flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className={`text-2xl p-3 rounded-full shadow-md ${iconColor('/sessions', 'text-green-500')}`} />
          </Link>
          <Link to="/signin" className="flex items-center">
            <FontAwesomeIcon icon={faUserAlt} className={`text-2xl p-3 rounded-full shadow-md ${iconColor('/signin', 'text-blue-500')}`} />
          </Link>
        </div>
      </footer>
    </header>
  );
};

export default Header;
