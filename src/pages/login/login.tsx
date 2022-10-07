import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  const { register } = useForm<FormValues>()

  type FormValues = {
    firstName: string,
    email: string,
    phone: number,
    gender: any
  }

  return (
    <div className='w-full h-[100vh] bg-blue-50 flex'>
      <form className='bg-blue-100 h-2/4 my-auto mr-6 p-2 flex-1'>
        <h2 className='font-bold text-3xl border-b-4 mx-auto my-2 border-yellow-500 w-fit'>{ t('login') }</h2>
        <div>
          <input type="text" placeholder={ t('useName') } />
        </div>
        <div>
          <input type="password" placeholder={ t('password') } />
        </div>
        <input type="submit" value={ t('login') } />
      </form>
      <div className='flex-3 bg-yellow-500 w-4/6 h-full clip-style'></div>
    </div>
  );
}

export default Login