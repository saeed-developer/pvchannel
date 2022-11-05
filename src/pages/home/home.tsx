import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

function Home() {
  const queryClient = useQueryClient();
  return (
    <div>
      <button
        type='submit'
        className='bg-yellow-700 m-3'
        onClick={localStorage.clear()}
      >
        Logout
      </button>
      <p>Home</p>
    </div>
  );
}

export default Home;
