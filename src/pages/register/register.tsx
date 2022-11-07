import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/input/global/input';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { register, TRegister } from '../../services/authSrv';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ButtonForm from '../../components/input/global/ButtonForm';

function Register() {
  const { t } = useTranslation();
  const nav = useNavigate();

  const mutation = useMutation((body: TRegister) => register(body), {
    onSuccess: (data) => {
      toast.success(`${(data as any)?.data?.message?.english}`);
      nav('/login', { replace: true });
    },
    onError(error) {
      toast.error(`${(error as any)?.response?.data?.message?.english}`);
    },
  });

  type FormValues = {
    email: string;
    number?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      email: '',
      number: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });

  return (
    <div className='w-full h-[100vh] flex text-black'>
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            email: data.email,
            number: data?.number,
            username: data.username,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
          };
          mutation.mutate(employee);
        })}
        className='h-2/4 mt-24 mx-10 p-2 flex-1'
      >
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-yellow-500 w-fit'>
          {t('register')}
        </h2>

        <Input
          type='email'
          name='email'
          control={control}
          placeholder={t('email')}
          error={errors?.email?.message}
          rules={{
            required: `${t('required')}`,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          }}
        />

        <Input
          name='number'
          control={control}
          placeholder={t('number')}
          error={errors?.number?.message}
          rules={{
            minLength: { value: 11, message: `${t('minLength')}` },
            maxLength: { value: 13, message: `${t('maxLength')}` },
          }}
        />

        <Input
          name='username'
          control={control}
          placeholder={t('userName')}
          error={errors?.username?.message}
          rules={{ required: `${t('required')}` }}
        />

        <Input
          type='password'
          name='password'
          control={control}
          placeholder={t('password')}
          error={errors?.password?.message}
          rules={{
            required: `${t('required')}`,
            minLength: { value: 8, message: `${t('minLength')}` },
          }}
        />

        <Input
          name='firstName'
          control={control}
          placeholder={t('firstName')}
          error={errors?.firstName?.message}
          rules={{ required: `${t('required')}` }}
        />

        <Input
          name='lastName'
          control={control}
          placeholder={t('lastName')}
          error={errors?.lastName?.message}
          rules={{
            required: `${t('required')}`,
          }}
        />

        <div className='mt-[-1.5rem] text-xs'>
          <span className='ursor-pointer'>{t('have_account')}</span>
          <Link
            to='/login'
            className='mx-2 text-yellow-500 hover:text-yellow-600'
          >
            {t('login')}
          </Link>
        </div>
        <ButtonForm text={t('register')} loading={mutation.isLoading} />
      </form>
      <div
        className={`flex-3 bg-yellow-500 w-8/12 h-full ${
          document.body.dir === 'rtl' ? 'clip-rtl-style' : 'clip-ltr-style'
        } `}
      ></div>
    </div>
  );
}

export default Register;
