import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsBookmark, BsChatDots } from 'react-icons/bs';
import { FiLogOut, FiPhone, FiSettings, FiUsers } from 'react-icons/fi';

function Sidebar() {
  return (
    <div className='bg-primary-600 fixed h-full top-0 w-20 text-white px-2 py-8'>
      <div className='h-full flex flex-col align-center justify-between text-center'>
        <div className='text-center w-auto'>
          <FaRegUserCircle className='mx-auto my-14 text-4xl cursor-pointer' />
          <BsChatDots className='mx-auto my-14 text-4xl cursor-pointer' />
          <FiPhone className='mx-auto my-14 text-4xl cursor-pointer' />
          <BsBookmark className='mx-auto my-14 text-4xl cursor-pointer' />
          <FiUsers className='mx-auto my-14 text-4xl cursor-pointer' />
          <FiSettings className='mx-auto my-14 text-4xl cursor-pointer' />
        </div>
        <FiLogOut className='mx-auto mb-8 text-4xl cursor-pointer' />
      </div>
    </div>
  );
}

export default Sidebar;
