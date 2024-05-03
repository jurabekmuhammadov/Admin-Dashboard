/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';
import { Link, useNavigate } from 'react-router-dom';


import { Typography, Grid, Paper, Avatar, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    full_name: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    confirm_password: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Passwords must match'),
    phone_number: Yup.string().matches(/^\+[0-9]{12}$/, 'Invalid phone number').required('Required')
});

const handleError = (error: any) => {
    console.error('An error occurred:', error.message);
};

const SignUp = () => {
    const signUp = useAuthStore(state => state.signUp);
    const navigate = useNavigate();
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const { confirmPassword, ...signUpData } = values;
            await signUp(signUpData);
            resetForm();
            navigate("/verify");
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ marginTop: "5px", fontSize: "30px", fontWeight: "500", letterSpacing: "0px" }}>
                        Sign up
                    </Typography>
                    <Formik
                        initialValues={{
                            email: '',
                            full_name: '',
                            password: '',
                            confirm_password: '',
                            phone_number: ''
                        }}
                        validationSchema={SignUpFormSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className='mt-5 flex flex-col gap-3 w-3/5 max-sm:w-full max-2xl:w-full'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Email <span className='text-red-500'>*</span></label>
                                    <Field type="email" name="email" autoComplete="off" className="bg-slate-200 p-3 rounded-md" />
                                    <ErrorMessage name="email" component="div" className="error text-red-500 font-semibold" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Full name <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="full_name" autoComplete="off" className="bg-slate-200 p-3 rounded-md" />
                                    <ErrorMessage name="full_name" component="div" className="error text-red-500 font-semibold" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Phone number <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="phone_number" autoComplete="off" className="bg-slate-200 p-3 rounded-md" />
                                    <ErrorMessage name="phone_number" component="div" className="error text-red-500 font-semibold" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Password <span className='text-red-500'>*</span></label>
                                    <Field type="password" name="password" autoComplete="current-password" className="bg-slate-200 p-3 rounded-md" />
                                    <ErrorMessage name="password" component="div" className="error text-red-500 font-semibold" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Confirm Password <span className='text-red-500'>*</span></label>
                                    <Field type="password" name="confirm_password" autoComplete="current-password" className="bg-slate-200 p-3 rounded-md" />
                                    <ErrorMessage name="confirm_password" component="div" className="error text-red-500 font-semibold" />
                                </div>

                                <Link to={"/sign-in"} className='underline text-blue-700'>Already have an account?</Link>
                                <button type="submit" disabled={isSubmitting} className='mt-10 bg-blue-500 rounded-md p-3 text-white font-semibold transition-all hover:bg-blue-400'>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Grid>
            <Grid item xs={false} sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Grid>
    );
};

export default SignUp;