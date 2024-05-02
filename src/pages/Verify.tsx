import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '../app/auth/useAuthStore';


const Verify = () => {
    const verify = useAuthStore(state => state.verify);
    const deleteUser = useAuthStore(state => state.delete);

    const email = localStorage.getItem("email");
    return (
        <div>
            <h1>Verification Form</h1>
            <Formik
                initialValues={{
                    code: ''
                }}
                validationSchema={Yup.object().shape({
                    code: Yup.string().required('Required')
                })}
                onSubmit={(values, { resetForm }) => {
                    const verifyData = { ...values, email }
                    verify(JSON.stringify(verifyData));
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label>Verification Code</label>
                            <Field type="text" name="code" />
                            <ErrorMessage name="code" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
            <button onClick={() => deleteUser("d60ea9a2-ae3f-466c-a190-f99183fd7511")}>Delete</button>
        </div>
    )
}

export default Verify;
