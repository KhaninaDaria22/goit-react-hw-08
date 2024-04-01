import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operation"
import { Formik, Form, Field} from 'formik';


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
       <Form  autoComplete="off">
        <label >
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label >
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
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
