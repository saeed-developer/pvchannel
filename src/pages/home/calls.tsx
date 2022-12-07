import { CallData } from './callsData';
import UserCall from './userCall';
import { BsSearch } from 'react-icons/bs';

function Calls() {
  return (
    <div className='overflow-hidden'>
      <div className='flex align-center w-11/12 m-auto p-4 rounded-3xl bg-white mt-4 text-gray-500'>
        <BsSearch className='text-xl my-auto mr-2' />
        <input
          className='w-full outline-none'
          type='text'
          placeholder='Search'
        />
      </div>
      <h2 className='text-gray-500 mt-6 text-2xl'>Call</h2>
      <div className='h-[85vh] overflow-auto'>
        {CallData?.length > 0 &&
          CallData.map((call, index) => <UserCall key={index} call={call} />)}
      </div>
    </div>
  );
}

export default Calls;
