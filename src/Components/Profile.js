import React from "react";

const Profile = () => {
  return (
    <div className='flex m-2 p-4 bg-gray-50 border rounded-md w-full items-center'>
      <img
        className='w-14 h-14 rounded-full'
        alt='avatar'
        src='https://www.w3schools.com/howto/img_avatar.png'
      />
      <div className='mx-2 flex flex-col w-full'>
        <div>
          <div className='text-xl font-normal text-gray-700'>
            Andrew Sanchez
          </div>
          <div className='text-sm font-normal text-gray-700'>21501AL11215</div>
        </div>
      </div>
      <div className='underline text-blue-500 cursor-pointer'>
        Andrew.Sanchez@dliflc.edu
      </div>
    </div>
  );
};

export default Profile;
