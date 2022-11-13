import { lazy, LazyExoticComponent } from 'react';

const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const Home = lazy(() => import('../pages/home'));
const addNewContacts = lazy(() => import('../pages/addContacts'));
const AllContacts = lazy(() => import('../pages/allContacts'));

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
  { name: 'home', path: '/', component: Home, protected: true },
  {
    name: 'add-contacts',
    path: '/add-contacts',
    component: addNewContacts,
    protected: true,
  },
  {
    name: 'all-contacts',
    path: '/all-contacts',
    component: AllContacts,
    protected: true,
  },
];
