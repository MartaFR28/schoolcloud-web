import { useFormik } from 'formik';
import { useContext } from 'react';
import Input from '../../components/Input/Input';
import { Navigate } from "react-router-dom";
import AuthContext from '../../contexts/AuthContext';
import FormControl from '../../components/FormControl/FormControl';
import { StudentLogin as  StudentLogin } from '../../services/StudentService';
import { loginSchema } from '../../schemas/login.schema';

const initialValues = {
  studentEmail: '',
}

const Login = () => {
  const { studentLogin, currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/studentPortal" />;
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
      studentLogin({ email: values.email }) 
        .then(response => {
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
    }
  });

  return (
    <div>
      <h1>Student Login</h1>
      <form onSubmit={handleSubmit}>
        <FormControl text="Email" error={touched.studentEmail && errors.studentEmail} htmlFor="email">
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.studentEmail}
            error={touched.studentEmail && errors.studentEmail}
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
