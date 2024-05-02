/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';
import { useNavigate } from 'react-router-dom';

const SignInFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
});

const handleError = (error: any) => {
    console.error('An error occurred:', error.message);
};

const SignIn = () => {
    const signIn = useAuthStore(state => state.signIn);
    const navigete = useNavigate();
    return (
        <div>
            <h1>Sign In Form</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignInFormSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        await signIn(values);
                        resetForm();
                        navigete("/dashboard")
                    } catch (error) {
                        handleError(error);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label>Email</label>
                            <Field type="email" name="email" autoComplete="off" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field type="password" name="password" autoComplete="current-password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignIn;
