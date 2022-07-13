import { useState } from 'react';
import { registerUserRequest } from 'services/authService';

const useRegister = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log(payload);
    registerUserRequest(payload);
  };

  return {
    handleChange,
    handleSubmit,
  };
};

export default useRegister;
