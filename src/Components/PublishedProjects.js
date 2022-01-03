import React from "react";
import ProjectCard from "./ProjectCard";
import { FaSearch } from "react-icons/fa";

const PublishedProjects = () => {
  const renderProjectCards = () => {
    let projectCardsArray = [];
    for (let i = 0; i < 8; i++) {
      projectCardsArray.push(<ProjectCard />);
    }
    return projectCardsArray;
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='m-2 p-2 border-b-2 relative flex items-center'>
        <input
          type='text'
          className='pl-6 py-2 m2'
          placeholder='Search anything...'
        />
        <div className='absolute'>
          <FaSearch />
        </div>
      </div>
      <div className='h-3/6 overflow-y-scroll'>
        <div className='flex flex-wrap'>{renderProjectCards()}</div>
      </div>
    </div>
  );
};

export default PublishedProjects;
