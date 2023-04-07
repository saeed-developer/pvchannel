import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import ButtonForm from '../../components/global/ButtonForm';
import { resetAuth } from '../../redux/features/auth/authSlice';

function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className='flex justify-center mt-32 text-black'>
      <div className='xl:w-4/12 md:w-6/12 sm:w-8/12 w-full my-auto mx-10 p-8 bg-white rounded-md shadow-lg text-center'>
        <p className='text-xl'>{t('logout_title')}</p>
        <div className='w-40 mx-auto mt-4'>
          <ButtonForm
            text={t('logout')}
            onClick={() => dispatch(resetAuth())}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
