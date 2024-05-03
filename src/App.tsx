/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const email = localStorage.getItem("email");
  // const accessToken = localStorage.getItem("access_token");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
    </div>
  );
};

export default App;

// Object { id: "bf60dad3-711d-4f80-9f7a-8617420de469", full_name: "Jurabek", email: "jorabekmuhammadov17@gmail.com", phone_number: "+998990990754", created_at: "2024-05-03 12:53:52", updated_at: "2024-05-03 07:53:52", access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ3NjYwMzIsImlhdCI6MTcxNDcyMjgzMiwicm9sZSI6ImFkbWluIiwic3ViIjoiYmY2MGRhZDMtNzExZC00ZjgwLTlmN2EtODYxNzQyMGRlNDY5In0.fc5aW_KOM1horWc0VJ3H7KuGiIi1Hk5tV67_haGaRQc", refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5ODIwMzIsImlhdCI6MTcxNDcyMjgzMiwicm9sZSI6ImFkbWluIiwic3ViIjoiYmY2MGRhZDMtNzExZC00ZjgwLTlmN2EtODYxNzQyMGRlNDY5In0.3hBSZb6U3nVPw9DS4LdJLcg-Nm3hi_e21OpznmAX-aI" }