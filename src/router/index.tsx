import { lazy, LazyExoticComponent } from 'react';

const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const Home = lazy(() => import('../pages/home'));

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
  {
    name: 'home',
    path: '/',
    component: Home,
    protected: true,
  },
];
