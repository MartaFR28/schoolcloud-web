import * as Yup from 'yup';

export const studentSchema = Yup.object({
  name: Yup
    .string('Name err')
    .required('Required'),
  lastName: Yup
    .string('Enter lastName err')
    .required('Required'),
  studentEmail: Yup
    .string('Enter studentEmail err')
    .required('Required'),
    description: Yup
    .string('Enter description err')
    .required('Required'),
})