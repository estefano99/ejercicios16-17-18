import React, {useState, useEffect} from 'react'
import {
  useNavigate
} from "react-router-dom";

function RegisterPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [logged,setLogged] = useState(false)
  const [error,setError] = useState(false)

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  
  function handlePassword(e) {
    setPassword(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault();

    const islogged = JSON.parse(localStorage.getItem("credentials"));
    console.log(islogged)

    if (email != islogged.email || password != islogged.password) {
      setError("Credentials incorrectas");
      return setLogged(false)
    }

   setLogged(true)
   setError("")
   navigate("/tasks")
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
      <input type="email" placeholder='email' onChange={handleEmail}></input>
      <input type="password" placeholder='password' onChange={handlePassword} />
      <button>Login</button>
      <h3>{error}</h3>
    </form>
  )
}

export default RegisterPage