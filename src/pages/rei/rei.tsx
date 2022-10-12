import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useMutation } from 'react-query';
import { login } from '../../services/loginApi';
import { api } from '../../services/api';
import { LOGIN } from '../../services/endpoints';

function rei() {
  // //FetchApi.js

  // async function fetchPosts() {
  //   const { data } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/users',
  //   );
  //   return data;
  // }

  // const { data, error, isError, isLoading } = useQuery('users', fetchPosts);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (isError) {
  //   return <div>Error! {error.message}</div>;
  // }

  // return (
  //   <div className=''>
  //     <h1 className='container'>Users Name</h1>
  //     {data.map((users, id) => {
  //       return (
  //         <li className='container' key={id}>
  //           {users.name}
  //         </li>
  //       );
  //     })}
  //   </div>
  // );

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // const { isLoading, isError, error, mutate } = useMutation(login, {
  //   onSuccess: (successData) => {
  //     //   queryClient.invalidateQueries('auth');
  //     console.log(successData);
  //   },
  // });

  // const Create = () => {
  //   mutate({
  //     username: 'johnd',
  //     password: 'm38rmF$',
  //   });
  // };

  async function createName() {
    try {
      const response = await api.post('auth/login', {
        username: 'Finn',
        password: 'Williams',
      });
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
    // const response = await api
    //   .post('auth/login', {
    //     username: 'Finn',
    //     password: 'Williams',
    //   })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //   );
  }

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className=''>
        <h1>Name</h1>
        <label>List of Names:</label>
        <input type='text' value={name} onChange={onChange} />
        <button onClick={createName}>Create</button>
        {/* <button onClick={Create}>Create</button> */}
        <p> Created a new Name ID: {message && message.id}</p>

        {/* <div className=''>
          {isLoading ? 'updating...' : ''}
          {isError ? error.message : ''}
        </div> */}
      </div>
    </>
  );
}

export default rei;
