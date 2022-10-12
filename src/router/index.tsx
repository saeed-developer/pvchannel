import React, { lazy } from "react";

const Login = lazy(() => import("../pages/login"));
const Rei = lazy(() => import("../pages/rei"));

export const routes = [
  { name: 'login', path: '/login', component: Login },
  { name: 'rei', path: '/rei', component: Rei }
]