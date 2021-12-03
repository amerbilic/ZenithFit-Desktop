import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [userStatus, setUserStatus] = useState('')
  const navigate = useNavigate()

  const loginHandler = async event => {
    event.preventDefault()
    const userLogin = frmData => {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post(
            'http://192.168.0.13:8000/auth/login',
            frmData
          )
          resolve(res.data)
          const user = jwt_decode(res.data.accessToken)
          setUserStatus(user.userStatus)
          console.log(userStatus)
          localStorage.setItem('accessToken', res.data.accessToken)
          localStorage.setItem('expTime', user.exp)
          localStorage.setItem(
            'ZenithFit',
            JSON.stringify({ refreshToken: res.data.refreshToken })
          )
        } catch (error) {
          reject(error)
        }
      })
    }
    try {
      const isAuth = await userLogin({
        email: emailInput,
        password: passwordInput
      })

      if (isAuth.state === 'error') {
        alert('Invalid login credentials.')
      }
      if (userStatus !== 2) throw new Error('You are not an administrator.')
      navigate('/home')
    } catch (error) {
      alert('Invalid login credentials.')
      setEmailInput('')
      setPasswordInput('')
    }
  }

  const emailHandler = event => {
    setEmailInput(event.target.value)
  }

  const passwordHandler = event => {
    setPasswordInput(event.target.value)
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="mainDiv u-t-center mt-5">
      <h1 className="mainTitle">Zenith Fit Admin</h1>
      <div className="menu-wrapper">
        <form
          className="d-flex flex-column align-items-center justify-content-center mt-5"
          onSubmit={loginHandler}
        >
          <div class="mb-3 w-100">
            <label for="Email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              value={emailInput}
              onChange={emailHandler}
              id="email"
              placeholder="admin@email.com"
            />
          </div>
          <div class="mb-3 w-100">
            <label for="Password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              value={passwordInput}
              onChange={passwordHandler}
              id="password"
              placeholder="******"
            />
          </div>
          <div className="w-100">
          <button type="submit" className="LoginButton btn btn-dark w-100">Login</button>
          </div>
        </form>
      </div>
    </div>
    </motion.div>
  )
}

export default LoginPage
