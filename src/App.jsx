import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registrarse from "./components/Registrarse";
import Login from "./components/Login"
import Tasks from "./components/Tasks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <h1>Ejercicio 16-17-18 Enrutado</h1>
        <nav>
          <li className="link"><NavLink to="/" className={({ isActive }) => isActive ? "is-active" : undefined }  >Resistrarse</NavLink></li>
          <li className="link" ><NavLink to="/login" className={({ isActive }) => isActive ? "is-active" : undefined } >Login</NavLink></li>
        </nav>
      </header>
      <Routes>
        <Route path={"/"} element={<Registrarse/>}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path="/tasks" element={<Tasks/>  }></Route>
      </Routes>
    </Router>
  );
}

export default App;
