import ButtonForm from '../../components/input/global/ButtonForm';
import { useDispatch } from 'react-redux';
import { resetAuth } from '../../redux/features/auth/authSlice';

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  return (
    <div className='p-2'>
      <ButtonForm text='Logout' onClick={handleLogout} />
      <p>Home</p>
    </div>
  );
}

export default Home;
