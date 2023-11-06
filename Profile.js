import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./App.css";

export default function Profile(props) {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginuser = () => {
    navigate("/login");
  };
  return (
    <div className="mayur">
      {props.name ? (
        <div>
          <h2>Hello {props.name}</h2>
          <a href="https://eccomerce-food.netlify.app">
            <h1>Ready to Explore click here</h1>{" "}
          </a>
          <button className="logout " onClick={handleSignout}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={loginuser}>Login Please</button>
      )}
    </div>
  );
}
