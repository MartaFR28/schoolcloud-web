import { useFormik } from 'formik';
import { useContext } from 'react';
import Input from '../../components/Input/Input';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../contexts/AuthContext';
import FormControl from '../../components/FormControl/FormControl';
import { loginSchema } from '../../schemas/login.schema';
import { studentLogin } from '../../services/StudentService';

const initialValues = {
  studentEmail: '',
};

const Log = () => {
  const navigate = useNavigate();
  const { setLoggedUser } = useContext(AuthContext);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldError
  } = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setSubmitting(true);
        await studentLogin(values.studentEmail);
        setLoggedUser(values.studentEmail);
        navigate(`/students/${values.studentEmail}`);
      } catch (err) {
        if (err?.response?.data?.message) {
          setFieldError('studentEmail', err?.response?.data?.message);
        } else {
          setFieldError('studentEmail', err.message);
        }
      }
      setSubmitting(false);
    }
  });

  return (
    <div>
      <h1>Student Login</h1>
      <form onSubmit={handleSubmit}>
        <FormControl text="studentEmail" error={touched.studentEmail && errors.studentEmail} htmlFor="studentEmail">
          <Input
            id="studentEmail"
            name="studentEmail"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.studentEmail}
            error={touched.studentEmail && errors.studentEmail}
            placeholder="Enter your student email..."
            type="email"
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
  );
};

export default Log;

