import React, { Suspense, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from './router';
import useAuth from './utils/hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [loading] = useAuth();
  const login = useSelector((state: RootState) => state.auth.isLogin);
  const nav = useNavigate();

  useEffect(() => {
    if (!login) {
      nav('/login');
    }
  }, []);

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
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
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
