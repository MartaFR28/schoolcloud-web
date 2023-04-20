import { useFormik } from "formik";
import React from "react";
import { CreateNewStudent } from "../../services/StudentService";
import { studentSchema } from "../../schemas/student.schema";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";

const initialValues = {
  name: "",
  lastName: "",
  img: "",
  studentEmail: "",
  description: "",
};

const CreateStudent = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: studentSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("lastName", values.lastName);
      formData.append("img", values.img);
      formData.append("studentEmail", values.studentEmail);
      formData.append("description", values.description);
      CreateNewStudent(formData)
        .then((response) => {
          // handle successful response
        })
        .catch((error) => {
          // handle error
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          name="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
        />
      </FormControl>
      <FormControl>
        <Input
          name="lastName"
          label="Last Name"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
        />
      </FormControl>
      <FormControl>
        <Input
          name="img"
          label="Image URL"
          type="text"
          value={values.img}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.img && errors.img}
        />
      </FormControl>
      <FormControl>
        <Input
          name="studentEmail"
          label="Email"
          type="email"
          value={values.studentEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.studentEmail && errors.studentEmail}
        />
      </FormControl>
      <FormControl>
        <Input
          name="description"
          label="Description"
          type="text"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && errors.description}
        />
      </FormControl>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default CreateStudent;
