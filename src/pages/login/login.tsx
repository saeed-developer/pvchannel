import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/input/global/input';
import { ToastContainer } from 'react-toastify';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { login, TLogin } from '../../services/authSrv';
import { setAuth } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const mutation = useMutation((body: TLogin) => login(body), {
    onSuccess: (data) => {
      // dispatch(setLogin(true));
      // dispatch(setToken(data.data));
      dispatch(setAuth({ isLogin: true, token: data.data }));
      nav('/', { replace: true });
    },
  });
  type FormValues = {
    userName: string;
    password: string;
  };

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  return (
    <div className='w-full h-[100vh] flex text-black'>
      <ToastContainer />
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            username: data.userName,
            password: data.password,
          };
          mutation.mutate(employee);
        })}
        className='h-2/4 my-auto mx-10 p-2 flex-1'
      >
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-yellow-500 w-fit'>
          {t('login')}
        </h2>
        <Controller
          name='userName'
          control={control}
          rules={{ required: `${t('required')}` }}
          render={(props) => (
            <Input {...props} type='userName' placeholder={t('userName')} />
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={{
            required: `${t('required')}`,
            maxLength: { value: 8, message: `${t('maxLength')}` },
          }}
          render={(props) => (
            <Input {...props} type='password' placeholder={t('password')} />
          )}
        />
        <input
          type='submit'
          value={t('login')}
          className='bg-yellow-500 py-1 px-2 w-52 text-xl mt-6 cursor-pointer rounded-md text-gray-900'
          style={mutation.isLoading ? { opacity: 0.7 } : { opacity: 1 }}
        />
      </form>
      <div
        className={`flex-3 bg-yellow-500 w-8/12 h-full ${
          document.body.dir === 'rtl' ? 'clip-rtl-style' : 'clip-ltr-style'
        } `}
      ></div>
    </div>
  );
}

export default Login;
