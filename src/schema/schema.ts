import { object, string, } from 'yup';

let userSchema = object({
  email: string().email().required('Must enter a valid email address'),
  password: string().min(6).required('password should be grater than 6 characters')
});
export default userSchema