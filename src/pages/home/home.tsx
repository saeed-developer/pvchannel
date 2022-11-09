import ButtonForm from '../../components/input/global/ButtonForm';
import { useDispatch } from 'react-redux';
import { resetAuth } from '../../redux/features/auth/authSlice';

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  return (
    <div className='w-full h-[100vh] p-2'>
      <ButtonForm text='Logout' onClick={handleLogout} />
      <p>Home</p>
      <div className='grid'>
        <ButtonForm text='all' />
        <ButtonForm text='add' />
        <ButtonForm text='find' />
        <ButtonForm text='delete' />
      </div>
    </div>
  );
}

export default Home;
