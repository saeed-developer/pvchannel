import { lazy, LazyExoticComponent } from 'react';

const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));

interface IRoutes {
  name: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  protected: boolean;
}
export const routes: IRoutes[] = [
  { name: 'login', path: '/login', component: Login, protected: false },
  {
    name: 'register',
    path: '/register',
    component: Register,
    protected: false,
  },
];
