import React from "react";

const ClassroomCard = () => {
  return (
    <div className='bg-purple-50 rounded-md p-5 m-2 flex'>
      <div className='mx-2 flex flex-col'>Long Vertical Content</div>
      <div className='mx-2 flex flex-col'>
        <div className='flex'>
          <div></div>
        </div>
        <div className='flex'>Horizontal Content</div>
        <div className='flex'>Horizontal Content</div>
      </div>
    </div>
  );
};

export default ClassroomCard;
