import React from "react";
import {
  FaHome,
  FaCalendar,
  FaBook,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const Sidebar = ({ setActiveSidebarIndex }) => {
  const clickHandler = (e, index) => {
    e.preventDefault();
    setActiveSidebarIndex(index);
  };

  return (
    <div class='bg-gray-200 rounded p-3 shadow-lg h-screen'>
      <div class='flex items-center flex-col space-x-4 p-2 mb-5'>
        <img
          class='h-12'
          src='https://www.dliflc.edu/wp-content/uploads/2020/05/DLIFLC_Logo@0.5x.png'
        />
      </div>
      <ul class='space-y-2 text-sm'>
        <li onClick={(e) => clickHandler(e, 0)}>
          <a
            href='#'
            class='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline'
          >
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li onClick={(e) => clickHandler(e, 1)}>
          <a
            href='#'
            class='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline'
          >
            <span class='text-gray-600'>
              <FaBook />
            </span>
            <span>My Classroom</span>
          </a>
        </li>
        <li onClick={(e) => clickHandler(e, 2)}>
          <a
            href='#'
            class='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline'
          >
            <span class='text-gray-600'>
              <FaCalendar />
            </span>
            <span>My Schedule</span>
          </a>
        </li>
        <li onClick={(e) => clickHandler(e, 3)}>
          <a
            href='#'
            class='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline'
          >
            <span class='text-gray-600'>
              <FaGraduationCap />
            </span>
            <span>My Grades</span>
          </a>
        </li>
        <li onClick={(e) => clickHandler(e, 4)}>
          <a
            href='#'
            class='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline'
          >
            <span class='text-gray-600'>
              <FaProjectDiagram />
            </span>
            <span>Published Projects</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
