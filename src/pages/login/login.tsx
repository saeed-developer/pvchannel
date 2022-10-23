import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/input';
// import { useMutation, useQueryClient } from 'react-query';
// import { api } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/features/auth/action';
import { AppDispatch, RootState } from '../../redux/store/store';

//

function Login() {
  const { t } = useTranslation();
  type FormValues = {
    userName: string;
    password: string;
  };

  const dispatch: AppDispatch = useDispatch();
  const { error, isLoading } = useSelector((state: RootState) => state.user);

  // if (error) {
  //   console.log('some thing is wrong');
  //   // return 'some thing is wrong';
  // }
  if (error) {
    console.log('some thingggg is wrong');
    // return 'some thing is wrong';
  }
  console.log('error', error);
  console.log('isLoading', isLoading);

  // async function createName(data) {
  //   try {
  //     const response = await api.post('auth/login', {
  //       username: data.username,
  //       password: data.password,
  //       // username: 'Finn',
  //       // password: 'Williams',
  //     });
  //     console.log(data);
  //     console.log('data', response.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // }

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  // post data
  // const queryClient = useQueryClient();
  // // const addTodoMutation = useMutation(login,{})

  // const { mutate, isLoading, isError } = useMutation(createName, {
  //   onSuccess: (successData) => {
  //     queryClient.invalidateQueries('auth');
  //     console.log('successData', successData);
  //   },
  // });

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Something is wrong</p>;
  // }

  //
  return (
    <div className='w-full h-[100vh] flex text-black'>
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            username: data.userName,
            password: data.password,
          };
          dispatch(userLogin(employee));
          if (error) {
            console.log('some thing is wrong', data);
            // return 'some thing is wrong';
          }
        })}
        className='h-2/4 my-auto mr-10 p-2 flex-1'
      >
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-yellow-500 w-fit'>
          {t('login')}
        </h2>
        <Controller
          name='userName'
          control={control}
          rules={{ required: 'this is requerd' }}
          render={(props) => (
            <Input {...props} type='userName' placeholder={t('userName')} />
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={{
            required: 'this is requerd',
            maxLength: { value: 8, message: 'You exceeded the max length' },
          }}
          render={(props) => (
            <Input {...props} type='password' placeholder={t('password')} />
          )}
        />
        <input
          type='submit'
          value={t('login')}
          className='bg-yellow-500 py-1 px-2 w-52 text-xl mt-6 cursor-pointer rounded-md text-gray-900'
        />
      </form>
      <div className='flex-3 bg-yellow-500 w-8/12 h-full clip-style'></div>
    </div>
  );
}

export default Login;
