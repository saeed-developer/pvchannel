import ButtonForm from '../../components/input/global/ButtonForm';
import { useDispatch } from 'react-redux';
import { resetAuth } from '../../redux/features/auth/authSlice';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  return (
    <div className='w-full h-[100vh] p-2'>
      <ButtonForm text='Logout' onClick={() => handleLogout()} />
      <p>Home</p>
      <div className='grid'>
        <Link to='./allContacts'>
          <ButtonForm text='all' />
        </Link>

        <Link to='./postContacts'>
          <ButtonForm text='add' />
        </Link>
        <ButtonForm text='find' />
        <ButtonForm text='delete' />
      </div>
    </div>
  );
}

export default Home;
