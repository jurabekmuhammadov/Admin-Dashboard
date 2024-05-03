import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';
import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Avatar, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignInFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
});

interface FormValues {
    email: string;
    password: string;
}

const handleError = (error: unknown) => {
    if (error instanceof Error) {
        console.error('An error occurred:', error.message);
    } else {
        console.error('An unknown error occurred:', error);
    }
};

const SignIn = () => {
    const signIn = useAuthStore(state => state.signIn);

    const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        try {
            await signIn(values);
            resetForm();
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
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
                        Sign in
                    </Typography>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignInFormSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className='mt-5 flex flex-col gap-3 w-3/5 max-sm:w-full max-2xl:w-full'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Email <span className='text-red-500'>*</span></label>
                                    <Field type="email" name="email" autoComplete="off" className="bg-slate-200 p-3 rounded-md" placeholder="you@example.com" />
                                    <ErrorMessage name="email" component="div" className="error text-red-500 font-semibold" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg'>Password <span className='text-red-500'>*</span></label>
                                    <Field type="password" name="password" autoComplete="current-password" className="bg-slate-200 p-3 rounded-md" placeholder="password" />
                                    <ErrorMessage name="password" component="div" className="error text-red-500 font-semibold" />
                                </div>
                                <Link to={"/"} className='underline text-blue-700'>Don't have an account?</Link>
                                <button type="submit" disabled={isSubmitting} className='mt-10 bg-blue-500 rounded-md p-3 text-white font-semibold transition-all hover:bg-blue-400'>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignIn;
