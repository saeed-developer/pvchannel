import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/input/global/input';
import { toast, ToastContainer } from 'react-toastify';
import { useMutation } from 'react-query';
import { register, TRegister } from '../../services/authSrv';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const mutation = useMutation((body: TRegister) => register(body), {
    onSuccess: (data) => {
      console.log('data',data);
      toast.success('success');
      nav('/login', { replace: true });
    },
    onError(error, variables, context) {
      console.log(error);
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

  const { handleSubmit, control } = useForm<FormValues>({
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
        className='h-2/4 my-auto mx-10 p-2 flex-1'
      >
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-yellow-500 w-fit'>
          {t('register')}
        </h2>

        <Controller
          name='email'
          control={control}
          render={(props) => (
            <Input {...props} type='email' placeholder={t('email')} />
          )}
        />

        <Controller
          name='number'
          control={control}
          rules={{
            minLength: { value: 11, message: `${t('minLength')}` },
            maxLength: { value: 13, message: `${t('maxLength')}` },
          }}
          render={(props) => (
            <Input {...props} type='text' placeholder={t('number')} />
          )}
        />

        <Controller
          name='username'
          control={control}
          rules={{ required: `${t('required')}` }}
          render={(props) => (
            <Input {...props} type='text' placeholder={t('userName')} />
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={{
            required: `${t('required')}`,
            minLength: { value: 8, message: `${t('minLength')}` },
          }}
          render={(props) => (
            <Input {...props} type='password' placeholder={t('password')} />
          )}
        />

        <Controller
          name='firstName'
          control={control}
          rules={{ required: `${t('required')}` }}
          render={(props) => (
            <Input {...props} type='text' placeholder={t('firstName')} />
          )}
        />

        <Controller
          name='lastName'
          control={control}
          rules={{
            required: `${t('required')}`,
          }}
          render={(props) => (
            <Input {...props} type='text' placeholder={t('lastName')} />
          )}
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
        <input
          type='submit'
          value={t('register')}
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

export default Register;
