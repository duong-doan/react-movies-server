import { useState } from 'react';
import { loginUserRequest } from 'services/authService';

const useLogin = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    console.log(name, value);

    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = payload;
    loginUserRequest({ email });

    console.log('payload useLogin', payload);
  };

  return {
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
