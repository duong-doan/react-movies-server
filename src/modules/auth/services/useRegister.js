import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'modules/auth/store/actions';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { selectUserLoading } from '../store/selector';

const useRegister = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);

  const registerSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    dispatch(actions.authRegisterRequest({ email, password }));
  };

  return {
    loading,
    formik,
  };
};

export default useRegister;
