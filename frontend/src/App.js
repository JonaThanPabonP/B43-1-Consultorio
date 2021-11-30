import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import UserHome from "./screens/UserHome";
import Contact from "./screens/Contact";
import UserRegister from "./screens/UserRegister";
import MedRegister from "./screens/MedRegister";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<UserHome/> } />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/med-register" element={<MedRegister />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
