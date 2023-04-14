import { useFormik } from 'formik';
import { useContext } from 'react';
import Input from '../../Input/Input';
import AuthContext from '../../../Contexts/AuthContext';
import FormControl from '../../FormControl/FormControl';
import { login as loginService } from '../../../services/AuthService';
import { loginSchema } from '../../../views/Login/schemas/login.schema';

const initialValues = {
  teacherID: '',
  password: ''
}

const Login = () => {
  const { login } = useContext(AuthContext);

  const {
    values, errors, touched, handleChange, handleBlur,
    isSubmitting, handleSubmit, setSubmitting, setFieldError
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginService({ teacherID: values.teacherID, password: values.password }) 
        .then(response => {
          // Usar el login del contexto
          login(response.accessToken);
        })
        .catch(err => {
          if (err?.response?.data?.message) {
            setFieldError('teacherID', err?.response?.data?.message)
          } else {
            setFieldError('teacherID', err.message)
          }
          setSubmitting(false)
        })

    }
  });

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <FormControl text="TeacherID" error={touched.teacherID && errors.teacherID} htmlFor="email">
          <Input
            id="teacherID"
            name="teacherID"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.teacherID}
            error={touched.teacherID && errors.teacherID}
            placeholder="Enter your teacher ID..."
          />
        </FormControl>

        <FormControl text="Password" error={touched.password && errors.password} htmlFor="password">
          <Input
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password}
            placeholder="Enter your password..."
            type="password"
          />
        </FormControl>

        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? 'Submitting...'
            : 'Submit'
          }
        </button>
      </form>
    </div>
  )
}

export default Login;