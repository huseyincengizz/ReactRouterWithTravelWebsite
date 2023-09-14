import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Domestic from "./components/Domestic";
import Abroad from "./components/Abroad";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Notfound from "./components/Notfound";

export default function App(){


  return(
    <div className="app">
    <Routes>
      <Route 
      path="/"
      element={<Home />}
      />
      <Route 
      path="/domestic"
      element={<Domestic />}
      />
      <Route 
      path="/abroad"
      element={<Abroad />}
      />
      <Route 
      path="/contact"
      element={<Contact />}
      />
      <Route 
      path="/signin"
      element={<Signin />}
      />
      <Route 
      path="/register"
      element={<Register />}
      />
      <Route 
      path="*"
      element={<Notfound />}
      />
    </Routes>
    </div>
  )
}