import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router';

const App: React.FC = () => {
  return (
    <div className='App'>
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
    </div>
  );
};

export default App;
