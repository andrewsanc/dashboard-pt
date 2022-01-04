import React from "react";
import {
  FaHome,
  FaCalendar,
  FaBook,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const Sidebar = ({ activeSidebarIndex, setActiveSidebarIndex }) => {
  const clickHandler = (e, index) => {
    e.preventDefault();
    setActiveSidebarIndex(index);
  };

  return (
    <div className='bg-gray-200 rounded p-3 shadow-lg h-screen'>
      <div className='flex items-center flex-col space-x-4 p-2 mb-5'>
        <img
          className='h-12'
          src='https://www.dliflc.edu/wp-content/uploads/2020/05/DLIFLC_Logo@0.5x.png'
          alt='dliflc logo'
        />
      </div>
      <ul className='space-y-2 text-sm'>
        <li
          onClick={(e) => clickHandler(e, 0)}
          className={activeSidebarIndex === 0 && "bg-gray-300 rounded-md"}
        >
          <div className='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-white cursor-pointer focus:shadow-outline'>
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </div>
        </li>
        <li
          onClick={(e) => clickHandler(e, 1)}
          className={activeSidebarIndex === 1 && "bg-gray-300 rounded-md"}
        >
          <div className='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-white cursor-pointer focus:shadow-outline'>
            <span className='text-gray-600'>
              <FaBook />
            </span>
            <span>My Classroom</span>
          </div>
        </li>
        <li
          onClick={(e) => clickHandler(e, 2)}
          className={activeSidebarIndex === 2 && "bg-gray-300 rounded-md"}
        >
          <div className='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-white cursor-pointer focus:shadow-outline'>
            <span className='text-gray-600'>
              <FaCalendar />
            </span>
            <span>My Schedule</span>
          </div>
        </li>
        <li
          onClick={(e) => clickHandler(e, 3)}
          className={activeSidebarIndex === 3 && "bg-gray-300 rounded-md"}
        >
          <div className='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-white cursor-pointer focus:shadow-outline'>
            <span className='text-gray-600'>
              <FaGraduationCap />
            </span>
            <span>My Grades</span>
          </div>
        </li>
        <li
          onClick={(e) => clickHandler(e, 4)}
          className={activeSidebarIndex === 4 && "bg-gray-300 rounded-md"}
        >
          <div className='flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-white cursor-pointer focus:shadow-outline'>
            <span className='text-gray-600'>
              <FaProjectDiagram />
            </span>
            <span>Published Projects</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
