import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router';
import { useTranslation } from 'react-i18next';
import ProtectedRoute from './components/input/global/protectedRoute';
import useAuth from './utils/hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [loading] = useAuth();
  const login = useSelector((state: RootState) => state.auth.isLogin);

  const changeLanguageHandler = (e: React.FormEvent) => {
    const languageValue = (e.target as HTMLInputElement).value;
    if (languageValue === 'fa') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
    i18n.changeLanguage(languageValue);
  };

  return (
    <div className='App'>
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
          <div>
            <select
              className='custom-select'
              style={{ width: 200 }}
              onChange={changeLanguageHandler}
            >
              <option value='en'>English</option>
              <option value='fa'>فارسی</option>
            </select>
          </div>
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
