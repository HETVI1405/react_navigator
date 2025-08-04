import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const { token, handleLogin } = useContext(AuthContext)

  const HandleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.get("http://localhost:3001/users", {
        params: {
          email: mail,
          password: pass
        }
      })

      if (res.data.length > 0) {
        const user = res.data[0]
        handleLogin(user.token)
        localStorage.setItem('token', user.token)
        navigate("/Product")
      } else {
        setError("Invalid Email or Password")
      }
    } catch (err) {
      console.log(err)
      setError("Server Error")
    }
  }

  if (token) {
    return <Navigate to="/Product" />
  }

  return (
    <div className="login" style={{ margin: "auto", marginTop: "30px", width: "400px", height: "400px" }}>
      <h3 className='ps-5 mt-5'>LOG IN</h3>
      <p className='ps-5'>Enter your email and Password</p>

      <form onSubmit={HandleSubmit} className='ps-5'>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder='Enter Your Email'
          required
        /><br /><br />

        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder='Enter Your Password'
          required
        /><br /><br />

        <input type="submit" value="Login" className='cart-btn' />
      </form>

      {error && <p className='ps-5 text-danger'>{error}</p>}
    </div>
  )
}

export default Login
