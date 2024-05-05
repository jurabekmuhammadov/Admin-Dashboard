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

// Object {
//   id: "e5d36b5d-20cd-426b-82bc-c551df2ee3f3",
//   full_name: "Jurabek Muhammadov",
//   email: "jorabekmuhammadov17@gmail.com",
//   phone_number: "+998990990754",
//   created_at: "2024-05-05 20:43:38",
//   updated_at: "2024-05-05 15:43:38",
//   access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5Njg0MTQsImlhdCI6MTcxNDkyNTIxNCwicm9sZSI6ImFkbWluIiwic3ViIjoiZTVkMzZiNWQtMjBjZC00MjZiLTgyYmMtYzU1MWRmMmVlM2YzIn0.zq0TsQ4D6T5OGgfpmCy-M_s27tExGeieqRz3OksTHGo",
//   refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxODQ0MTQsImlhdCI6MTcxNDkyNTIxNCwicm9sZSI6ImFkbWluIiwic3ViIjoiZTVkMzZiNWQtMjBjZC00MjZiLTgyYmMtYzU1MWRmMmVlM2YzIn0.BblBawcMtkF8eHyBdWyMUR111zn1vDXdM_sycJp9-KM"
// }

// {
//   "id": "61648fcf-a40d-44a2-b9a5-5bfc5898eca6",
//   "name": "my service",
//   "price": 100,
//   "created_at": "2024-05-05T21:09:04.270165Z"
// }