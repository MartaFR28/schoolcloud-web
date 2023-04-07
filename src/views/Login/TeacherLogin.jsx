import { useFormik } from 'formik';
import { useContext } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import Input from '../../components/Input/Input';
import TeacherContext from '../../contexts/TeacherContext';
import { login as loginService } from '../../services/AuthService';
import { setAccessToken } from '../../stores/AccessTokenStore';
import { loginSchema } from './schemas/login.schema';

const initialValues = {
  email: '',
  password: '',
  teacherID: ''
}

const Login = () => {
  const { login } = useContext(TeacherContext);

  const {
    values, errors, touched, handleChange, handleBlur,
    isSubmitting, handleSubmit, setSubmitting, setFieldError
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginService({ ID: values.teacherID, password: values.password }) // llama a /login del back pasandole el email y la password
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

      // Peticion al back para que me devuelva el JWT
    }
  });

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <FormControl text="teacherID" error={touched.teacherID && errors.teacherID} htmlFor="teacherID">
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

export default TeacherLogin;
