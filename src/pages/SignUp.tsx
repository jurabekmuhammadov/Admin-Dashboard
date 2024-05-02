// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useAuthStore } from '../app/auth/useAuthStore';
// import { useNavigate } from 'react-router-dom';

// const SignUpFormSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     full_name: Yup.string().required('Required'),
//     password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
//     confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
//     phone_number: Yup.string().matches(/^\+[0-9]{12}$/, 'Invalid phone number').required('Required')
// });

// const SignUp = () => {
//     const signUp = useAuthStore(state => state.signUp);
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h1>Registration Form</h1>
//             <Formik
//                 initialValues={{
//                     email: '',
//                     full_name: '',
//                     password: '',
//                     confirmPassword: '',
//                     phone_number: ''
//                 }}
//                 validationSchema={SignUpFormSchema}
//                 onSubmit={async (values, { resetForm }) => {
//                     try {
//                         const { confirmPassword, ...signUpData } = values;
//                         await signUp(JSON.stringify(signUpData));
//                         resetForm();
//                         navigate("/verify")
//                     } catch (error) {
//                         console.log(error.message);
//                     }
//                 }}
//             >
//                 {({ isSubmitting }) => (
//                     <Form>
//                         <div>
//                             <label>Email</label>
//                             <Field type="email" name="email" autoComplete="off" />
//                             <ErrorMessage name="email" component="div" className="error" />
//                         </div>
//                         <div>
//                             <label>Full Name</label>
//                             <Field type="text" name="full_name" autoComplete="off" />
//                             <ErrorMessage name="full_name" component="div" className="error" />
//                         </div>
//                         <div>
//                             <label>Password</label>
//                             <Field type="password" name="password" autoComplete="new-password" />
//                             <ErrorMessage name="password" component="div" className="error" />
//                         </div>
//                         <div>
//                             <label>Confirm Password</label>
//                             <Field type="password" name="confirmPassword" autoComplete="new-password" />
//                             <ErrorMessage name="confirmPassword" component="div" className="error" />
//                         </div>
//                         <div>
//                             <label>Phone Number</label>
//                             <Field type="tel" name="phone_number" autoComplete="off" placeholder="+998" />
//                             <ErrorMessage name="phone_number" component="div" className="error" />
//                         </div>
//                         <button type="submit" disabled={isSubmitting}>Submit</button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default SignUp;

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';
import { useNavigate } from 'react-router-dom';

const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    full_name: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phone_number: Yup.string().matches(/^\+[0-9]{12}$/, 'Invalid phone number').required('Required')
});

const SignUp = () => {
    const signUp = useAuthStore(state => state.signUp);
    const navigate = useNavigate();
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
                validationSchema={SignUpFormSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const { confirmPassword, ...signUpData } = values;
                        await signUp(signUpData);
                        resetForm();
                        navigate("/verify");
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
                            <label>Full Name</label>
                            <Field type="text" name="full_name" autoComplete="off" />
                            <ErrorMessage name="full_name" component="div" className="error" />
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
                        <div>
                            <label>Phone Number</label>
                            <Field type="tel" name="phone_number" autoComplete="off" placeholder="+998" />
                            <ErrorMessage name="phone_number" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;
