/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import NotFound from "./pages/NotFound";
import VerifyRoutes from "./routes/verifyRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path='/dashboard' />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route element={<NotFound />} path='*' />
            <Route element={<SignIn />} path='/sign-in' />
            <Route element={<SignUp />} path="/" />
          </Route>
          <Route element={<VerifyRoutes />}>
            <Route element={<Verify />} path="/verify" />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;

// Object { id: "28cafb3c-8870-4a6d-b568-91477ba01cd0", full_name: "Jurabek", email: "jorabekmuhammadov7@gmail.com", phone_number: "+998990990753", created_at: "2024-05-03 18:42:56", updated_at: "2024-05-03 13:42:56", access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ3OTUwNTgsImlhdCI6MTcxNDc1MTg1OCwicm9sZSI6ImFkbWluIiwic3ViIjoiMjhjYWZiM2MtODg3MC00YTZkLWI1NjgtOTE0NzdiYTAxY2QwIn0.sduP0IS8YjdQU_4CimFgFfjlAjn-HNH3FEIqkxBnwzc", refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUwMTEwNTgsImlhdCI6MTcxNDc1MTg1OCwicm9sZSI6ImFkbWluIiwic3ViIjoiMjhjYWZiM2MtODg3MC00YTZkLWI1NjgtOTE0NzdiYTAxY2QwIn0.pbomwQjgpxM7jSUqAJehNOMmOd_dnOlOZ2MyWZWjyxw" }