import { useEffect, useState } from 'react';
import * as actions from 'modules/auth/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserToken,
  selectUserLoading,
} from 'modules/auth/store/selector';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTES } from 'modules/home/store/constants';

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectUserLoading);
  const token = useSelector(selectUserToken);
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (token) {
      navigate(HOME_ROUTES.HOME, { replace: true });
    }
  }, [token, navigate]);

  const handleChange = (name, value) => {
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = payload;
    dispatch(actions.authLoginRequest({ email }));
  };

  return {
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
