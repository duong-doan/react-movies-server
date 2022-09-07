import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'modules/auth/store/actions';

const useRegister = () => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name, value) => {
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
    dispatch(actions.authRegisterRequest(payload));
  };

  return {
    handleChange,
    handleSubmit,
  };
};

export default useRegister;
