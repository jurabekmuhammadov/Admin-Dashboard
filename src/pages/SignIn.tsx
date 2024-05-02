import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';

const SignInFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignIn = () => {
    const signIn = useAuthStore(state => state.signIn);
    return (
        <div>
            <h1>Registration Form</h1>
            <Formik
                initialValues={{
                    email: '',
                    full_name: '',
                    password: '',
                    confirmPassword: '',
                    phone_number: ''
                }}
                validationSchema={SignInFormSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const { confirmPassword, ...signInData } = values;
                        await signIn(JSON.stringify(signInData));
                        resetForm();
                    } catch (error) {
                        console.log(error.message);
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
                            <Field type="password" name="password" autoComplete="new-password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <Field type="password" name="confirmPassword" autoComplete="new-password" />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignIn;
