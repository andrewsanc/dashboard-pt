import React from "react";
import moment from "moment";

const NewAssignments = () => {
  return (
    <div>
      <div className='m-2'>
        <h5 className='text-xl font-semibold text-gray-700 border-b-2 border-gray-400'>
          Today's Assignments
        </h5>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>
            ICPT 102A Reading Test
          </div>
          <div className='status-container group'>
            <div className='cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-green-500 shadow-sm animate-pulse'></div>
            <span className='status-tooltip group-hover:scale-100'>
              {"tooltip 💡"}
            </span>
          </div>
        </div>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>
            RU Lesson 5 VOCABULARY
          </div>
          <div className='ml-auto cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-green-500 shadow-sm animate-pulse'></div>
        </div>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>Chinese PROFIPT I</div>
          <div className='ml-auto cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-yellow-500 shadow-sm'></div>
        </div>
      </div>

      {/* Next Day */}
      <div className='my-6 mx-2'>
        <h5 className='text-xl font-semibold text-gray-700 border-b-2 border-gray-400'>
          {moment().add(1, "days").format("LL")} Assignments
        </h5>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>
            AS Unit 5 Speaking Test
          </div>
          <div className='ml-auto cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-red-500 shadow-sm'></div>
        </div>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>
            Chinese Basic Course Unit 11 Reading Test
          </div>
          <div className='ml-auto cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-red-500 shadow-sm'></div>
        </div>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>Chinese PROFIPT I</div>
          <div className='ml-auto cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-red-500 shadow-sm'></div>
        </div>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full hover:underline hover:text-blue-400'>
          <div className='cursor-pointer text-blue-400'>
            PV Semester - III Unit-32 Quiz
          </div>
          <div className='ml-auto cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-red-500 shadow-sm'></div>
        </div>
      </div>
      {/* Day After Next */}
      <div className='my-6 mx-2'>
        <h5 className='text-xl font-semibold text-gray-700 border-b-2 border-gray-400'>
          {moment().add(2, "days").format("LL")} Assignments
        </h5>
        <div className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full'>
          No Assignments Scheduled
        </div>
      </div>
    </div>
  );
};

export default NewAssignments;
