import { useFormik } from 'formik';
import { useContext } from 'react';
import Input from '../../components/Input/Input';
import AuthContext from '../../contexts/AuthContext';
import FormControl from '../../components/FormControl/FormControl';
import { loginSchema } from '../../schemas/login.schema';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  teacherID: '',
  password: ''
}

const Login = () => {
  const navigate = useNavigate()
  const { login, currentUser } = useContext(AuthContext);

  const {
    values, errors, touched, handleChange, handleBlur,
    isSubmitting, handleSubmit, setSubmitting, setFieldError
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login({ teacherID: values.teacherID, password: values.password }) 
        .then(response => {
          navigate('/teacherProfile');
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

export default Login;
