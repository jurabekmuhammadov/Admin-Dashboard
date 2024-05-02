/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import SignIn from "./pages/SignIn";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  localStorage.setItem("isAuthenticated", "false");
  // const email = localStorage.getItem("email");
  // const accessToken = localStorage.getItem("access_token");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
