import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { auth } from "./firebase";
import Profile from "./Profile";

function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.email.substr(0, user.email.indexOf("@")));
      } else setUsername("");
    });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/profile" element={<Profile name={username} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
