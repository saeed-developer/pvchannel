import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { i18n } = useTranslation();

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
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
