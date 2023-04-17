import { useFormik } from 'formik';
import { useContext } from 'react';
import Input from '../../Input/Input';
import AuthContext from '../../../Contexts/AuthContext';
import FormControl from '../../FormControl/FormControl';
//import { studentLogin  } from '../../../services/AuthService';
import { loginSchema } from '../../../views/Login/schemas/login.schema';

const initialValues = {
  email: '',

}

const StudentLogin = () => {
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
          studentLogin(response.accessToken);
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
      <h1>studentLogin</h1>
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