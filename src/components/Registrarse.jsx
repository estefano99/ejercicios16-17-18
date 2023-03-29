import React, {useState} from 'react'
import {
  useNavigate
} from "react-router-dom";

function RegisterPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  function handleEmail(e) {
   setEmail(e.target.value)
  }
  
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const values = {
      email: email,
      password: password
    }
    if (email == "" || password == "") {
      return setError("Campos obligatorios")
    }
    localStorage.setItem("credentials",JSON.stringify(values));
    navigate("/tasks")
    
  }

  return (
    <form onSubmit={handleSubmit}>
    <h3>Registrarse</h3>
      <input type="email" placeholder='email' onChange={handleEmail}></input>
      <input type="password" placeholder='password' onChange={handlePassword} />
      <button>Registrarse</button>
      <p>{error}</p>
    </form>
  )
}

export default RegisterPage