import { MdOutlineCallReceived } from 'react-icons/md';
import { FaPhoneAlt, FaVideo } from 'react-icons/fa';

function UserCall({ call }) {
  return (
    <div className='flex align-center justify-between my-2 py-2 pr-4'>
      <div className='flex'>
        <div className='relative'>
          {call?.online && (
            <div className='absolute top-0 right-0 w-4 h-4 border border-white border-2 rounded-full bg-online'></div>
          )}
          <img
            className='w-16 rounded-full'
            src={call?.image}
            alt={call?.name}
          />
        </div>
        <div className='ml-3 py-2'>
          <div className='text-black'>{call?.name}</div>
          <div className='flex align-center mt-3'>
            <MdOutlineCallReceived
              className={`text-2xl ${
                call?.success ? 'text-online' : 'text-red'
              }`}
            />
            <div className='text-gray-500'>{call?.date}</div>
          </div>
        </div>
      </div>
      <div className='text-center my-auto'>
        {call?.type === 'video' ? (
          <FaVideo className='text-2xl text-secondary-300' />
        ) : (
          <FaPhoneAlt className='text-2xl text-secondary-300' />
        )}
      </div>
    </div>
  );
}

export default UserCall;
