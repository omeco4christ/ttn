import * as Yup from 'yup';

export const loginSchema = Yup.object({
  username: Yup.string().required('Username or email is required'),
  password: Yup.string().required('Password is required'),
});

export const signupSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  username: Yup.string().required('Username is required'),
  phone_number: Yup.number().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 character')
    .required('Password is required.'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords not match',
  ),
});

export const forgetPasswordSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Password must be at least 6 character')
    .required('Password is required.'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords not match',
  ),
});

export const resetPasswordTokenSchema = Yup.object({
  token: Yup.number()
    .required('Token is required')
    .max(9999, 'Token must be 4 length'),
});

export const changePasswordSchema = Yup.object({
  old_password: Yup.string().required('Old password is required.'),
  new_password: Yup.string()
    .min(6, 'Password must be at least 6 character')
    .required('New password is required.'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('new_password'), null],
    'Passwords not match',
  ),
});

export const forumTopicSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export const forumTopicCommentSchema = Yup.object({
  comment: Yup.string().required('Comment is required'),
});
