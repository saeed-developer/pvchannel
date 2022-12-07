import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isLogin: boolean;
  children: ReactNode;
}
const ProtectedRoute = ({ isLogin, children }: ProtectedRouteProps): any => {
  if (!isLogin) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
export default ProtectedRoute;
