import React from "react";

const Grades = () => {
  return (
    <table className='min-w-full leading-normal m-2'>
      <thead>
        <tr>
          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
            Module Name
          </th>
          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
            Locked
          </th>
          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
            Score
          </th>
          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
            Total
          </th>
          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className='flex items-center'>
              <div className='ml-3'>
                <p className='cursor-pointer text-blue-400 hover:underline hover:text-blue-400 whitespace-no-wrap'>
                  Chapter 2, Assignment - Reading
                </p>
              </div>
            </div>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>No</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>?</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>43</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
              <span
                aria-hidden
                className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
              ></span>
              <span className='relative'>In Progess</span>
            </span>
          </td>
        </tr>
        <tr>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className='flex items-center'>
              <div className='ml-3'>
                <p className='cursor-pointer text-blue-400 hover:underline hover:text-blue-400 whitespace-no-wrap'>
                  Chapter 2, Assignment - Listening
                </p>
              </div>
            </div>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>No</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>?</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>77</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
              <span
                aria-hidden
                className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
              ></span>
              <span className='relative'>In Progess</span>
            </span>
          </td>
        </tr>
        <tr>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className='flex items-center'>
              <div className='ml-3'>
                <p className='cursor-pointer text-blue-400 hover:underline hover:text-blue-400 whitespace-no-wrap'>
                  Chapter 1, Vocabulary
                </p>
              </div>
            </div>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>Yes</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>54</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>64</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <span className='relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight'>
              <span
                aria-hidden
                className='absolute inset-0 bg-orange-200 opacity-50 rounded-full'
              ></span>
              <span className='relative'>Completed</span>
            </span>
          </td>
        </tr>
        <tr>
          <td className='px-5 py-5 bg-white text-sm'>
            <div className='flex items-center'>
              <div className='ml-3'>
                <p className='cursor-pointer text-blue-400 hover:underline hover:text-blue-400 whitespace-no-wrap'>
                  Chapter 1, Reading
                </p>
              </div>
            </div>
          </td>
          <td className='px-5 py-5 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>No</p>
          </td>
          <td className='px-5 py-5 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>70</p>
          </td>
          <td className='px-5 py-5 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>70</p>
          </td>
          <td className='px-5 py-5 bg-white text-sm'>
            <span className='relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight'>
              <span
                aria-hidden
                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
              ></span>
              <span className='relative'>Graded</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Grades;
