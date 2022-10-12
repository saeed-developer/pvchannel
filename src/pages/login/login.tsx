import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../../components/input';
import { useMutation, useQueryClient } from 'react-query';
import { login } from '../../services/loginApi';

// post data
// const api = process.env.API_KEY;
const api = 'pvchannel.ir/auth/login';

const postData = async (user: any) => {
  const response = await fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
    headers: {
      'Content-type': 'application/json; charset-UTF-8',
    },
  });
  return response.json();
};

//

function Login() {
  const { t } = useTranslation();
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

  // post data
  const queryClient = useQueryClient();
  // const addTodoMutation = useMutation(login,{})

  const { mutate, isLoading, isError } = useMutation(login, {
    onSuccess: (successData) => {
      queryClient.invalidateQueries('auth');
      console.log(successData);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something is wrong</p>;
  }

  //
  return (
    <div className='w-full h-[100vh] flex text-black'>
      <form
        onSubmit={handleSubmit((data) => {
          const employee = {
            ...data,
          };
          mutate(employee);
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
