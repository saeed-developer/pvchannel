import { lazy, LazyExoticComponent } from 'react';
import Home from '../pages/login/home';

const Login = lazy(() => import('../pages/login'));
interface IRoutes {
  name: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  protected: boolean;
}
export const routes: IRoutes[] = [
  { name: 'login', path: '/login', component: Login, protected: false },
  { name: 'home', path: '/', component: Home, protected: true },
];
