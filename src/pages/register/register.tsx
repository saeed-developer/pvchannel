import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/global/input';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { register, TRegister } from '../../services/authSrv';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ButtonForm from '../../components/global/ButtonForm';
import usePasswordShow from '../../utils/hooks/usePasswordShow';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MouseEventHandler } from 'react';

function Register() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [ToggleShow, visible, InputType] = usePasswordShow();

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
    <div className='w-full h-[100vh] flex justify-center text-black'>
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
        className='w-3/12 my-auto mx-10 p-8 bg-white rounded'
      >
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-primary-600 w-fit'>
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

        <div className='relative'>
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
            onClick={() => ToggleShow as MouseEventHandler<HTMLSpanElement>}
          >
            {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
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

        <div className='text-xs'>
          <span className='ursor-pointer'>{t('have_account')}</span>
          <Link
            to='/login'
            className='text-primary-600 hover:text-primary-400 p-2 cursor-pointer'
          >
            {t('login')}
          </Link>
        </div>
        <ButtonForm text={t('register')} loading={mutation.isLoading} />
      </form>
    </div>
  );
}

export default Register;
