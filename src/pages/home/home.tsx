// import ButtonForm from '../../components/global/ButtonForm';
// import { useDispatch } from 'react-redux';
// import { resetAuth } from '../../redux/features/auth/authSlice';
// import { Link } from 'react-router-dom';
import Sidebar from '../../components/global/sidebar';
import Calls from './calls';

function Home() {
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(resetAuth());
  // };

  return (
    <div className='w-full h-[100vh]'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='bg-gray-100 ml-20 p-3 w-4/12'>
          <Calls />
        </div>
        <div className='bg-red  w-8/12'>fffffffffffffffffffffffff</div>
      </div>
      {/* <ButtonForm text='Logout' onClick={() => handleLogout()} />
      <p>Home</p>
      <div className='grid'>
        <Link to='./all-contacts'>
          <ButtonForm text='all' />
        </Link>

        <Link to='./add-contacts'>
          <ButtonForm text='add' />
        </Link>
        <ButtonForm text='find' />
        <ButtonForm text='delete' /> 
      </div>*/}
    </div>
  );
}

export default Home;
