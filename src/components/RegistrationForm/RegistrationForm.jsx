import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../store/Auth/operations';
import css from './RegistrationForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('required'),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Incorrect email')
    .required('required'),
  password: yup
    .string()
    .matches(/^[A-Za-z0-9]{8,}$/, 'The password must contain at least 8 characters')
    .required('required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldFullGroup}>
          <label className={css.label}>Name:</label>
          <div className={css.fieldGroup}>
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage className={css.errormessage} name="name" component="div" />
          </div>
        </div>
        <div className={css.fieldFullGroup}>
          <label className={css.label}>Email:</label>
          <div className={css.fieldGroup}>
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage className={css.errormessage} name="email" component="div" />
          </div>
        </div>
        <div className={css.fieldFullGroup}>
          <label className={css.label}>Password:</label>
          <div className={css.fieldGroup}>
            <Field className={css.field} type="password" name="password" />
            <ErrorMessage className={css.errormessage} name="password" component="div" />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
