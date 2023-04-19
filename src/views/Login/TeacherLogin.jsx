import { useFormik } from 'formik';
import { useContext } from 'react';
import Input from '../../components/Input/Input';
import AuthContext from '../../contexts/AuthContext';
import FormControl from '../../components/FormControl/FormControl';
import { TeacherLogin as TeacherLogin } from '../../services/TeacherService';
import { loginSchema } from '../../schemas/login.schema';

const initialValues = {
  teacherID: '',
  password: ''
}

const login = () => {
  const { teacherLogin, currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/teacherProfile" />;
  }

  const {
    values, errors, touched, handleChange, handleBlur,
    isSubmitting, handleSubmit, setSubmitting, setFieldError
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      teacherLogin({ teacherID: values.teacherID, password: values.password }) 
        .then(response => {
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
      <h1>teacherLogin</h1>

      <form onSubmit={handleSubmit}>
        <FormControl text="TeacherID" error={touched.teacherID && errors.teacherID} htmlFor="teacherID">
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