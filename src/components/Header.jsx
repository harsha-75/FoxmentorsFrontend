import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faChalkboardTeacher,
  faInfoCircle,
  faClipboardList,
  faSignIn,
  faPeopleRoof,
  faPersonArrowUpFromLine,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/foxmentors.png'; // Ensure the logo path is correct
import { faPersonRifle } from '@fortawesome/free-solid-svg-icons/faPersonRifle';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt';

const Header = () => {
  return (
    <header className="lg:bg-gradient-to-r from-gray-100 via-gray-200 to-white lg:p-6">
      {/* Desktop View - Header */}
      <div className="hidden lg:flex justify-between items-center container mx-auto">
        {/* Logo as clickable link */}
        <Link to="/" className="text-black text-3xl font-bold">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-12 rounded-full inline-block bg-white p-2 shadow-lg"
          /> Fox Mentors
        </Link>
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-gray-800 text-xl">
          <ul className="flex space-x-8">
            <li className="flex items-center">
              <Link to="/practicehub" className="flex items-center hover:bg-gray-300 hover:text-gray-700 rounded-full p-3 transition ease-in-out duration-200">
                <FontAwesomeIcon icon={faClipboardList} className="mr-3 bg-white text-purple-500 p-2 rounded-full shadow-md" />
                Practice Hub
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/courses" className="flex items-center hover:bg-gray-300 hover:text-gray-700 rounded-full p-3 transition ease-in-out duration-200">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-3 bg-white text-pink-500 p-2 rounded-full shadow-md" />
                Courses
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/sessions" className="flex items-center hover:bg-gray-300 hover:text-gray-700 rounded-full p-3 transition ease-in-out duration-200">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3 bg-white text-green-500 p-2 rounded-full shadow-md" />
                Sessions
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/about" className="flex items-center hover:bg-gray-300 hover:text-gray-700 rounded-full p-3 transition ease-in-out duration-200">
                <FontAwesomeIcon icon={faUserAlt} className="mr-3 bg-white text-blue-500 p-2 rounded-full shadow-md" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile View - Footer */}
      <footer className="block lg:hidden bg-gradient-to-r from-gray-100 via-gray-200 to-white fixed inset-x-0 bottom-0 p-4 shadow-lg">
        <div className="flex justify-around items-center text-gray-800 text-xl">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-12 rounded-full bg-white p-2 shadow-lg"
            />
          </Link>
          <Link to="/practicehub" className="flex items-center">
            <FontAwesomeIcon icon={faClipboardList} className="text-3xl bg-white text-purple-500 p-3 rounded-full shadow-md" />
          </Link>
          <Link to="/courses" className="flex items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="text-3xl bg-white text-pink-500 p-3 rounded-full shadow-md" />
          </Link>
          <Link to="/sessions" className="flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl bg-white text-green-500 p-3 rounded-full shadow-md" />
          </Link>
          <Link to="/signin" className="flex items-center">
            <FontAwesomeIcon icon={faUserAlt} className="text-3xl bg-white text-blue-500 p-3 rounded-full shadow-md" />
          </Link>
        </div>
      </footer>
    </header>
  );
};

export default Header;
