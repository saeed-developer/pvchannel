import { TRefresh } from './../../services/authSrv';
import { RootState } from './../../redux/store/store';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IAuth,
  resetAuth,
  setLogin,
  setToken,
  TToken,
} from '../../redux/features/auth/authSlice';
import { useMutation } from 'react-query';
import { refresh } from '../../services/authSrv';
import { Axios, AxiosError } from 'axios';
const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const token = useSelector((state: RootState) => state.auth.token);
  const mutation = useMutation((body: TRefresh) => refresh(body));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token.refresh) {
      setLoading(false);
    } else if (token.refresh) {
      mutation.mutate(
        { refresh: token.refresh as string },
        {
          onSuccess: (data) => {
            setToken(data.data);
          },
          onError: (err) => {
            err.response.status === 403 && dispatch(resetAuth());
          },
        },
      );
      setLoading(mutation.isLoading);
    }
  }, []);

  return [loading];
};
export default useAuth;
