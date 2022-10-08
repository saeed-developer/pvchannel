import React from 'react';
import { useForm,Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/input';

function Login() {
  const { t } = useTranslation();
  type FormValues = {
    userName: string;
    password: string;

  }
  
  const { register, handleSubmit,control, formState: { errors } } = useForm<FormValues>({
    mode: 'onChange',
    delayError:500,
    defaultValues: {
      userName: "",
      password:""
    }
  });
  

  return (
    <div className='w-full h-[100vh] flex text-black'>
      <form onSubmit={handleSubmit((data) => { console.log(data) })} className='h-2/4 my-auto mr-10 p-2 flex-1'>
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-yellow-500 w-fit'>{t('login')}</h2>
        <Controller
          name='userName'
          control={control}
          rules={{ required: 'this is requerd' }}
          render={(props) => (
            <Input
              {...props}
              type='userName'
              placeholder={t('userName')}
            />
          )}
        />
        
        <Controller
          name='password'
          control={control}
          rules={{ required: 'this is requerd', maxLength: { value: 8, message: 'You exceeded the max length' } }}
          render={(props) => (
            <Input
              {...props}
              type='password'
              placeholder={t('password')}
            />
          )}
        />
        <input
          type="submit"
          value={t('login')}
          className='bg-yellow-500 py-1 px-2 w-52 text-xl mt-6 cursor-pointer rounded-md text-gray-900'
        />
      </form>
      <div className='flex-3 bg-yellow-500 w-8/12 h-full clip-style'></div>
    </div>
  );
}

export default Login;