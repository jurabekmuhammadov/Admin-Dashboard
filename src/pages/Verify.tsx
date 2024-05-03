import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';
import { Box, Typography } from '@mui/material';

interface FormValues {
    code: string,
}

const Verify = () => {

    const verify = useAuthStore(state => state.verify);

    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        const email = localStorage.getItem("email");
        if (email) {
            const verifyData = { ...values, email };
            verify(verifyData);
            resetForm();
        }
    };

    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "50px",
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5" sx={{ fontSize: "30px", fontWeight: "500", letterSpacing: "0px" }}>
                    Verification code has been sent to you email, please verify!
                </Typography>
                <Formik
                    initialValues={{
                        code: ''
                    }}
                    validationSchema={Yup.object().shape({
                        code: Yup.string().required('Required')
                    })}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col gap-3 w-3/5 max-sm:w-full max-2xl:w-4/5'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-lg'>Verification code <span className='text-red-500'>*</span></label>
                                <Field type="text" name="code" autoComplete="off" className="bg-slate-200 p-3 rounded-md" />
                                <ErrorMessage name="code" component="div" className="error text-red-500 font-semibold" />
                            </div>
                            <button type="submit" disabled={isSubmitting} className='mt-10 bg-blue-500 rounded-md p-3 text-white font-semibold transition-all hover:bg-blue-400'>Submit</button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </div>
    )
}

export default Verify;
