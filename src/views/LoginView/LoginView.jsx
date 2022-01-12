import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './LoginView.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/auth/auth-operations';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginView = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { email, password } = values;
        dispatch(logInUser({ email, password }));
      }}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          Email
        </label>
        <Field
          className={s.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" />
        <label htmlFor="name" className={s.label}>
          Password
        </label>
        <Field
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage name="password" />
        <button type="submit" className={s.button}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

LoginView.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default LoginView;
