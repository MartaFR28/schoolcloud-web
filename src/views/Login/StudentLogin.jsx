import { useFormik } from 'formik';
import { useContext } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import Input from '../../components/Input/Input';
import StudentContext from '../../contexts/StudentContext';
import { login as loginService } from '../../services/AuthService';
import { setAccessToken } from '../../stores/AccessTokenStore';
import { loginSchema } from './schemas/login.schema';

const initialValues = {
  email: ''
}

const Login = () => {
  const { login } = useContext(StudentContext);

  const {
    values, errors, touched, handleChange, handleBlur,
    isSubmitting, handleSubmit, setSubmitting, setFieldError
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginService({ email: values.email }) // llama a /login del back pasandole el email y la password
        .then(response => {
          // Usar el login del contexto
          login(response.accessToken);
        })
        .catch(err => {
          if (err?.response?.data?.message) {
            setFieldError('email', err?.response?.data?.message)
          } else {
            setFieldError('email', err.message)
          }
          setSubmitting(false)
        })

      // Peticion al back para que me devuelva el JWT
    }
  });

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <FormControl text="Email" error={touched.email && errors.email} htmlFor="email">
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email}
            placeholder="Enter your student email..."
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

export default StudentLogin;
