import { TRefresh } from './../../services/authSrv';
import { RootState } from './../../redux/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/features/auth/authSlice';
import { useMutation } from 'react-query';
import { refresh } from '../../services/authSrv';

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
            dispatch(setToken(data.data));
          },
        },
      );
      setLoading(mutation.isLoading);
    }
  }, []);

  return [loading];
};
export default useAuth;
