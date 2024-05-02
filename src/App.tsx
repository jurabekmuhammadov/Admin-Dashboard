import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import SignIn from "./pages/SignIn";

const App = () => {
  // const emailFromLocalStorage = localStorage.getItem("email");
  // const acceessTokenFromLocalStorage = localStorage.getItem("access_token");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// const data = {
//   "id": "d60ea9a2-ae3f-466c-a190-f99183fd7511",
//   "full_name": "Jurabek Muhammadov",
//   "email": "jorabekmuhammadov17@gmail.com",
//   "phone_number": "+998951600754",
//   "created_at": "2024-05-03 00:04:27",
//   "updated_at": "2024-05-02 19:04:27",
//   access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ2NzY2NjcsImlhdCI6MTcxNDY3NjY2Nywicm9sZSI6InVzZXIiLCJzdWIiOiJkNjBlYTlhMi1hZTNmLTQ2NmMtYTE5MC1mOTkxODNmZDc1MTEifQ.vYC0cvAf1JTBUEoylZsvOyuKgvwqaoJ9mE-pXtbwQrc",
//   refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5MzU4NjcsImlhdCI6MTcxNDY3NjY2Nywicm9sZSI6InVzZXIiLCJzdWIiOiJkNjBlYTlhMi1hZTNmLTQ2NmMtYTE5MC1mOTkxODNmZDc1MTEifQ.-pkIp_-0Il0RDUuu79fhmjbZA3Aao5XFgn1PKe7vJ5I"
// }


export default App