import { lazy } from 'react';

const Login = lazy(() => import('../pages/login'));

export const routes = [{ name: 'login', path: '/login', component: Login }];
