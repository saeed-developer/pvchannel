import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { allContacts } from '../../services/chatContactsSrv';
import { Link } from 'react-router-dom';

function AllContacts() {
  // useEffect(()=>{

  // },[]);
  const { data, status, error } = useQuery('contacts', allContacts);
  console.log('data', data);
  console.log('status', status);
  console.log('error', error);
  //   const mutation = useMutation(() => allContacts(), {
  //     onSuccess: (data) => {
  //       toast.success(`${(data as any)?.data?.message?.english}`);
  //       nav('/login', { replace: true });
  //     },
  //     onError(error) {
  //       toast.error(`${(error as any)?.response?.data?.message?.english}`);
  //     },
  //   });
  return (
    <div>
      <Link to='/'>back</Link>
      {data?.data.length > 0 ? (
        data?.data.map((contact) => (
          // eslint-disable-next-line react/jsx-key
          <table>
            <tr>
              <th>firstName: {contact.first_name}</th>
              <th>lastName: {contact.last_name}</th>
              <th>userName: {contact.username}</th>
            </tr>
          </table>
        ))
      ) : (
        <p>no user find</p>
      )}
    </div>
  );
}

export default AllContacts;
