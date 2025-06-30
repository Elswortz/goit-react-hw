import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './ContactForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('required'),
  number: yup
    .string()
    .matches(
      /^[+]?[0-9]{1,4}?[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onFormSubmit }) => {
  const handleSubmit = (values, actions) => {
    onFormSubmit({ ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldFullGroup}>
          <label className={css.label}>Name:</label>
          <div className={css.fieldGroup}>
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage
              className={css.errormessage}
              name="name"
              component="div"
            />
          </div>
        </div>
        <div className={css.fieldFullGroup}>
          <label className={css.label}>Phone:</label>
          <div className={css.fieldGroup}>
            <Field className={css.field} type="tel" name="number" />
            <ErrorMessage
              className={css.errormessage}
              name="number"
              component="div"
            />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
