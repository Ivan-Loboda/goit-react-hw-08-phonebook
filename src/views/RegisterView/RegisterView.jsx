import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './RegisterView.module.css';
import PropTypes from 'prop-types';
import AuthButton from '../../components/AuthButton';
import { useDispatch } from 'react-redux';
import { regicterUser } from '../../redux/auth/auth-operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short name!')
    .max(50, 'Too long name!')
    .required('required field'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterView = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const { name, email, password } = values;
        dispatch(regicterUser({ name, email, password }));
      }}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          Name{' '}
        </label>
        <Field className={s.input} type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" />
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <Field
          className={s.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" />
        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <Field
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage name="password" />
        <AuthButton />
      </Form>
    </Formik>
  );
};

RegisterView.propTypes = {
  name: PropTypes.string,
};

export default RegisterView;
