import React from "react";
import NewAssignments from "./NewAssignments";
import GradedAssignments from "./GradedAssignments";
import Calendar from "react-calendar";

const Home = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col w-1/3'>
        <NewAssignments />
      </div>
      <div className='flex flex-col w-1/3'>
        <GradedAssignments />
      </div>
      <div className='flex flex-col w-1/3'>
        <div className='h-1/2 flex flex-col items-center'>
          <Calendar />
          <button className='bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 my-2 px-4 rounded'>
            See Assignments
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
