import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operations"
import { Formik, Form, Field} from 'formik';
import css from './RegisterForm.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };


  return (
    <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
    }}
    onSubmit={handleSubmit}
    >
       <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>Register</button>
      </Form>
    </Formik>
  );
};




    // <form  onSubmit={handleSubmit} autoComplete="off">
    //   <label >
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label >
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label >
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
