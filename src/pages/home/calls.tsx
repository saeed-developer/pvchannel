import { CallData } from './callsData';
import UserCall from './userCall';
import { BsFillTelephonePlusFill, BsSearch } from 'react-icons/bs';

function Calls() {
  return (
    <div className='overflow-hidden relative w-full'>
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
      {/* <div className='fixed bottom-10  w-16 h-16 rounded-full bg-primary-600 z-10'>
        dddd
      </div> */}
      <div className='fixed bottom-10 left-[63vh] w-16 h-16 rounded-full bg-primary-600 z-10 flex align-center justify-center cursor-pointer'>
        <BsFillTelephonePlusFill className='text-center m-auto text-2xl' />
      </div>
    </div>
  );
}

export default Calls;
