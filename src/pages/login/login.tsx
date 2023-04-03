import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/global/input';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { login, TLogin } from '../../services/authSrv';
import { setAuth } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ButtonForm from '../../components/global/ButtonForm';
import usePasswordShow from '../../utils/hooks/usePasswordShow';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MouseEventHandler } from 'react';

function Login() {
  const { t } = useTranslation();
  const [ToggleShow, visible, InputType] = usePasswordShow();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const mutation = useMutation((body: TLogin) => login(body), {
    onSuccess: (data) => {
      dispatch(setAuth({ isLogin: true, token: data.data }));
      nav('/', { replace: true });
    },
    onError(error) {
      toast.error(`${(error as any)?.response?.data?.message?.english}`);
    },
  });
  type FormValues = {
    username: string;
    password: string;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <div className='w-full h-[100vh] flex justify-center text-black'>
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            username: data.username,
            password: data.password,
          };
          mutation.mutate(employee);
        })}
        className='w-3/12 my-auto mx-10 p-8 bg-white rounded-md shadow-lg'
      >
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-primary-600 w-fit'>
          {t('login')}
        </h2>

        <div className='mb-12'>
          <Input
            name='username'
            control={control}
            placeholder={t('userName')}
            error={errors?.username?.message}
            rules={{ required: `${t('required')}` }}
          />
        </div>
        <div className='relative mb-12'>
          <Input
            type={InputType as string}
            name='password'
            control={control}
            placeholder={t('password')}
            error={errors?.password?.message}
            rules={{
              required: `${t('required')}`,
              minLength: { value: 8, message: `${t('minLength')}` },
            }}
          />
          <span
            className='absolute top-4 right-0'
            onClick={ToggleShow as MouseEventHandler<HTMLSpanElement>}
          >
            {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>

        <div className='text-xs'>
          <span className='ursor-pointer'>{t('forgetPass')}</span>
          <Link
            to='/register'
            className='text-primary-600 hover:text-primary-400 p-2 cursor-pointer'
          >
            {t('register')}
          </Link>
        </div>
        <div className='mb-3'>
          <ButtonForm text={t('login')} loading={mutation.isLoading} />
        </div>
      </form>
    </div>
  );
}

export default Login;
