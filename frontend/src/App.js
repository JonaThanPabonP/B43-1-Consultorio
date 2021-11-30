import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import Contact from "./screens/Contact";
import UserHome from "./screens/UserHome";
import UserLogin from "./screens/UserLogin";
import MedHome from "./screens/MedHome";
import MedLogin from "./screens/MedLogin";
import UserRegister from "./screens/UserRegister";
import MedRegister from "./screens/MedRegister";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/med-register" element={<MedRegister />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/med-home" element={<MedHome />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/med-login" element={<MedLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
