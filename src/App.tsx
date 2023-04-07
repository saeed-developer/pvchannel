import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router';
import useAuth from './utils/hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from './i18n';
import ProtectedRoute from './components/global/protectedRoute';

const lngs = {
  en: { nativeName: 'English' },
  fa: { nativeName: 'فارسی' },
};

const App: React.FC = () => {
  const [loading] = useAuth();
  const login = useSelector((state: RootState) => state.auth.isLogin);

  const changeLanguageHandler = (lng: string) => {
    if (lng === 'fa') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
    i18n.changeLanguage(lng);
  };

  return (
    <div className='w-full h-[100vh]'>
      <div className='p-8'>
        {Object.keys(lngs).map((lng) => (
          <button
            className='px-4 py-3 border-solid-2 bg-yellow-400 border-purple-400 text-black'
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type='submit'
            onClick={() => changeLanguageHandler(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <ToastContainer />
      {loading ? (
        // This Line should be replaced with loading indicator
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            width: '100vw',
            height: '100vh',
          }}
        >
          ...loading
        </div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.protected ? (
                      <ProtectedRoute isLogin={login}>
                        <route.component />
                      </ProtectedRoute>
                    ) : (
                      <route.component />
                    )
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      )}
    </div>
  );
};

export default App;
