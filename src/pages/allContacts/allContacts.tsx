import { useQuery } from 'react-query';
import {
  allContacts,
  deleteContact,
  TIdContact,
} from '../../services/chatContactsSrv';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AllContacts() {
  // useEffect(()=>{

  // },[]);
  const nav = useNavigate();
  const { data, status, error } = useQuery('getAllContacts', allContacts);
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

  const mutation = useMutation((body: TIdContact) => deleteContact(body), {
    onSuccess: (data) => {
      console.log('error in data contact', data);
      nav('/all-contacts', { replace: true });
      toast.success('delete this contact successfully');
      //   nav('/login', { replace: true });
    },
    onError(error) {
      console.log('error in post contact', error);
      if ((error as any).request.status === 500) {
        toast.error('something was wrong');
      }
    },
  });

  const handlerDeleteContact = (user_id: any) => {
    mutation.mutate({ id: user_id });
  };

  return (
    <div>
      <Link to='/'>back</Link>
      {data?.data.length > 0 ? (
        data?.data.map((contact: any) => (
          // eslint-disable-next-line react/jsx-key
          <div key={contact.user_id}>
            <span className='mx-5'>firstName: {contact.first_name}</span>
            <span className='mx-5'>lastName: {contact.last_name}</span>
            <span className='mx-5'>userName: {contact.username}</span>
            <span
              className='mx-5 cursor-pointer'
              onClick={() => handlerDeleteContact(contact.user_id)}
            >
              delete
            </span>
          </div>
        ))
      ) : (
        <p>no user find</p>
      )}
    </div>
  );
}

export default AllContacts;
